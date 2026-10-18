'use client';

import React, {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {AlertCircle, CheckCircle, Send} from 'lucide-react';
import TrackedLink from '@/components/TrackedLink';
import {createTranslationFunction} from '@/translations';
import {BOOKING_CLICK_EVENT, CONTACT_FORM_EVENT, reportConversion, trackEvent} from '@/utils/gtag';
import {sendForm} from '@/lib/formDelivery';
import {SHEET_TO_APP_BOOKING_URL} from '@/data/offers/sheet-to-app';
import atlas, {ATLAS_PATH, ATLAS_STEP1, ATLAS_STEP2, BUDGET_MARKERS, type AtlasQuestion} from '@/data/offers/atlas';
import type {Language} from '@/types/language';

// The two-step Atlas application (offer-os gtm/atlas/DECISIONS.md AT-D7, AT-D12, AT-D21, AT-D23).
// Field labels, options, buttons and success states are verbatim from 03-copy.md (AT-D26), via
// src/data/offers/atlas.ts. The sending and error lines are the site's own form strings from
// translations.ts, the ones every ContactForm shows. The privacy line above the submit button is
// AT-D27's, from the same data file.
//
// DELIVERY (AT-D12). Both sends go through src/lib/formDelivery.ts, the endpoint and the email
// notification every other form on this site uses. No other service is called.
//  - "Continue" sends the five step-1 answers as their own notification, marked incomplete
//    (AT-D23): question marker `atlas-step1`, first line of `message`
//    "Atlas application: step 1 of 2, incomplete". The applicant sees no success state for it, only
//    step 2. Going back and pressing Continue again resends only if an answer changed.
//  - "Send application" sends the whole application, step 1 included, marked complete: first line
//    "Atlas application: complete", marker `atlas`, `atlas-not-yet` or `atlas-no` by the budget
//    answer. "Not yet" and "No" are still sent, so the inbox holds them (02-architecture.md,
//    Budget routing).
// The endpoint emails name, email, company, question and message only, so every other answer rides
// in `message` as labelled lines, with the ENGLISH label and option on both locales, so every
// application reads the same way in one inbox.
//
// ANALYTICS. `contact_form_submit` on the complete send only (locale, offer_slug `atlas`,
// form_location = the marker), GA4, and reportConversion() beside it, exactly as ContactForm does on
// every other form. Google Ads was dropped as a bought channel on 2026-09-01, but the existing forms
// still call reportConversion(), so this form matches them (2026-10-18, reversing QA round 1's removal;
// drop it here only in the same change that drops it from ContactForm). Both calls check consent.
// The step-1 send fires no event, so one application counts once. `booking_click` with cta_location
// `atlas-form-not-ready` on the Sheet-to-App call link.
//
// AT-D21: neither success state promises a reply, a response time or a next contact, and this form
// does not render the "You need Atlas." line (03-copy.md: the Atlas form's own success states do
// not carry it). AT-D31: the "Yes" state confirms receipt only, without the duplicate "Atlas is by
// application only."
//
// Required fields use the browser's own validation (`required`), which speaks the reader's browser
// language, so no validation string is written here. A required checkbox group is required while
// none of its boxes is ticked.

const OFFER_SLUG = 'atlas';

type Answers = Record<string, string>;
type Multi = Record<string, number[]>;

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500';
const labelClass = 'block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1';
const linkClass =
  'font-medium text-primary-600 underline underline-offset-4 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300';

/** One answer as the inbox reads it: the English option text, or what was typed. */
function answerText(q: AtlasQuestion, answers: Answers, multi: Multi, other: Answers): string {
  if (q.type === 'checkboxes') {
    const picked = (multi[q.id] ?? []).map((i) => {
      const option = q.options?.en[i] ?? '';
      const named = i === q.otherTextOption ? other[q.id]?.trim() : '';
      return named ? `${option}: ${named}` : option;
    });
    return picked.length ? picked.join(', ') : '(no answer)';
  }
  const raw = (answers[q.id] ?? '').trim();
  if (!raw) return '(no answer)';
  if (q.type === 'select' || q.type === 'radio') return q.options?.en[Number(raw)] ?? raw;
  return raw;
}

function serialise(questions: AtlasQuestion[], answers: Answers, multi: Multi, other: Answers): string[] {
  return questions.map((q) => `${q.label.en}: ${answerText(q, answers, multi, other)}`);
}

export default function AtlasApplicationForm({language}: {language: Language}) {
  const c = atlas.copy[language];
  const t = createTranslationFunction(language);

  const [step, setStep] = useState<1 | 2 | 'done'>(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [multi, setMulti] = useState<Multi>({});
  const [other, setOther] = useState<Answers>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [ready, setReady] = useState(true);

  const honeypot = useRef<HTMLInputElement>(null);
  const shownAt = useRef(0);
  const step1Sent = useRef('');
  const stepHeading = useRef<HTMLParagraphElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    shownAt.current = performance.now();
  }, []);

  // Move focus to the new step's label, so a keyboard or screen-reader user lands on step 2 (or the
  // success state) rather than on a button that has gone.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    stepHeading.current?.focus();
    stepHeading.current?.scrollIntoView({block: 'start', behavior: 'smooth'});
  }, [step]);

  const setAnswer = (id: string, value: string) => {
    setAnswers((prev) => ({...prev, [id]: value}));
    if (submitError) setSubmitError('');
  };

  const toggle = (id: string, index: number) => {
    setMulti((prev) => {
      const current = prev[id] ?? [];
      const next = current.includes(index) ? current.filter((i) => i !== index) : [...current, index].sort((a, b) => a - b);
      return {...prev, [id]: next};
    });
    if (submitError) setSubmitError('');
  };

  const identity = () => ({
    name: (answers.name ?? '').trim(),
    email: (answers.email ?? '').trim(),
    company: (answers.company ?? '').trim(),
  });

  // Step 1's own answers, the ones not carried in name, email and company.
  const step1Extra = ATLAS_STEP1.filter((q) => !['name', 'email', 'company'].includes(q.id));
  const pageLine = `Page: /${language}/${ATLAS_PATH}`;

  const send = async (question: string, lines: string[]) => {
    await sendForm({
      ...identity(),
      message: lines.join('\n'),
      question,
      website: honeypot.current?.value ?? '',
      elapsed_ms: Math.round(performance.now() - shownAt.current),
    });
  };

  const handleStep1 = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    const lines = [
      'Atlas application: step 1 of 2, incomplete',
      '',
      ...serialise(step1Extra, answers, multi, other),
      pageLine,
    ];
    const key = JSON.stringify([identity(), lines]);
    if (key === step1Sent.current) {
      setStep(2);
      return;
    }

    setIsSubmitting(true);
    try {
      await send('atlas-step1', lines);
      step1Sent.current = key;
      setStep(2);
    } catch (error) {
      console.error('Atlas step 1 submission error:', error);
      setSubmitError(t('contact.form.error.failed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    const budget = Number(answers.budget ?? '0');
    const marker = BUDGET_MARKERS[budget] ?? BUDGET_MARKERS[0];
    const lines = [
      'Atlas application: complete',
      '',
      ...serialise(step1Extra, answers, multi, other),
      ...serialise(ATLAS_STEP2, answers, multi, other),
      pageLine,
    ];

    setIsSubmitting(true);
    try {
      await send(marker, lines);
      reportConversion();
      trackEvent(CONTACT_FORM_EVENT, {locale: language, offer_slug: OFFER_SLUG, form_location: marker});
      setReady(budget === 0);
      setStep('done');
    } catch (error) {
      console.error('Atlas application submission error:', error);
      setSubmitError(t('contact.form.error.failed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const labelText = (q: AtlasQuestion) => (q.required ? `${q.label[language]} (${c.requiredMarker})` : q.label[language]);

  const renderField = (q: AtlasQuestion) => {
    const id = `atlas-${q.id}`;
    const value = answers[q.id] ?? '';

    if (q.type === 'radio' || q.type === 'checkboxes') {
      const options = q.options?.[language] ?? [];
      const picked = multi[q.id] ?? [];
      return (
        <fieldset key={q.id}>
          <legend className={labelClass}>{labelText(q)}</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {options.map((option, i) => (
              <label
                key={option}
                className="flex items-start gap-3 rounded-lg border border-gray-200 px-3 py-2 text-gray-800 dark:border-gray-700 dark:text-gray-200"
              >
                {q.type === 'radio' ? (
                  <input
                    type="radio"
                    name={id}
                    value={String(i)}
                    checked={value === String(i)}
                    onChange={() => setAnswer(q.id, String(i))}
                    required={q.required}
                    disabled={isSubmitting}
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                ) : (
                  <input
                    type="checkbox"
                    name={id}
                    value={String(i)}
                    checked={picked.includes(i)}
                    onChange={() => toggle(q.id, i)}
                    required={q.required && picked.length === 0}
                    disabled={isSubmitting}
                    className="mt-1 h-4 w-4 rounded text-primary-600 focus:ring-primary-500"
                  />
                )}
                <span>{option}</span>
              </label>
            ))}
          </div>
          {q.otherTextOption !== undefined && picked.includes(q.otherTextOption) && (
            <input
              type="text"
              aria-label={options[q.otherTextOption]}
              value={other[q.id] ?? ''}
              onChange={(e) => setOther((prev) => ({...prev, [q.id]: e.target.value}))}
              disabled={isSubmitting}
              className={`${inputClass} mt-3`}
            />
          )}
        </fieldset>
      );
    }

    let control: React.ReactNode;
    if (q.type === 'select') {
      control = (
        <select
          id={id}
          name={id}
          value={value}
          onChange={(e) => setAnswer(q.id, e.target.value)}
          required={q.required}
          disabled={isSubmitting}
          className={inputClass}
        >
          <option value=""></option>
          {(q.options?.[language] ?? []).map((option, i) => (
            <option key={option} value={String(i)}>
              {option}
            </option>
          ))}
        </select>
      );
    } else if (q.type === 'textarea') {
      control = (
        <textarea
          id={id}
          name={id}
          rows={3}
          value={value}
          onChange={(e) => setAnswer(q.id, e.target.value)}
          required={q.required}
          disabled={isSubmitting}
          className={inputClass}
        />
      );
    } else {
      const autoComplete = q.id === 'name' ? 'name' : q.id === 'email' ? 'email' : q.id === 'company' ? 'organization' : undefined;
      control = (
        <input
          id={id}
          name={id}
          type={q.type}
          inputMode={q.type === 'number' ? 'numeric' : undefined}
          min={q.type === 'number' ? 0 : undefined}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => setAnswer(q.id, e.target.value)}
          required={q.required}
          disabled={isSubmitting}
          className={inputClass}
        />
      );
    }

    return (
      <div key={q.id}>
        <label htmlFor={id} className={labelClass}>
          {labelText(q)}
        </label>
        {control}
      </div>
    );
  };

  const submitButton = (label: string) => (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isSubmitting ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          {t('contact.form.sending')}
        </>
      ) : (
        <>
          <Send className="h-4 w-4 mr-2"/>
          {label}
        </>
      )}
    </button>
  );

  if (step === 'done') {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div
          role="status"
          className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg flex items-start space-x-3"
        >
          <CheckCircle className="mt-1 h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0"/>
          <p ref={stepHeading} tabIndex={-1} className="text-green-800 dark:text-green-200 focus:outline-none">
            {ready ? (
              c.successReady
            ) : (
              <>
                {c.successNotReady}{' '}
                <TrackedLink
                  event={BOOKING_CLICK_EVENT}
                  params={{cta_location: 'atlas-form-not-ready', locale: language, offer_slug: OFFER_SLUG}}
                  href={SHEET_TO_APP_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {c.successNotReadyLink}
                </TrackedLink>
                .
              </>
            )}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <p
        ref={stepHeading}
        tabIndex={-1}
        className="mb-6 scroll-mt-28 text-sm font-semibold text-primary-700 focus:outline-none dark:text-primary-300"
      >
        {step === 1 ? c.step1Label : c.step2Label}
      </p>

      {submitError && (
        <div
          role="alert"
          className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3"
        >
          <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0"/>
          <p className="text-red-800 dark:text-red-200">{submitError}</p>
        </div>
      )}

      <form onSubmit={step === 1 ? handleStep1 : handleStep2} className="space-y-6">
        {(step === 1 ? ATLAS_STEP1 : ATLAS_STEP2).map(renderField)}

        {/* AT-D27: one privacy line above the submit button, on both steps, since each step sends a
            name, an email and a company name to a third-party endpoint, as every form here does. It
            promises no reply (AT-D21), so the site's consent sentence that ContactForm shows ("We use
            what you send to answer you") is left out. min-h-[44px] keeps the link's tap target at 44px
            on a phone (QA round 1, 375px check 4). */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
          {c.privacyLine}{' '}
          <Link
            href={`/${language}/privacy-policy`}
            className="inline-flex min-h-[44px] items-center px-1 underline underline-offset-2 hover:text-gray-700 dark:hover:text-gray-200"
          >
            {c.privacyLink}
          </Link>
        </p>

        {submitButton(step === 1 ? c.step1Button : c.step2Button)}

        {step === 2 && (
          <p className="text-center">
            <button
              type="button"
              onClick={() => setStep(1)}
              disabled={isSubmitting}
              className={`inline-flex min-h-[44px] items-center px-3 text-sm ${linkClass}`}
            >
              {c.backLink}
            </button>
          </p>
        )}

        {/* The honeypot, as in ContactForm. Off screen rather than display:none, which some bots skip. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="atlas-leave-empty">Leave this field empty</label>
          <input type="text" id="atlas-leave-empty" name="leave_empty" ref={honeypot} tabIndex={-1} autoComplete="off" data-1p-ignore="" data-lpignore="true" data-bwignore="true" data-form-type="other" defaultValue=""/>
        </div>

      </form>
    </div>
  );
}
