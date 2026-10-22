'use client';

import Link from 'next/link';
import {useMemo, useRef, useState} from 'react';
import {trackEvent, CTA_CLICK_EVENT} from '@/utils/gtag';
import {
  EFFECT_LABEL,
  LANES,
  QUESTIONS,
  SOURCES,
  type Effect,
  type Finding,
  type Lang,
  type LaneId,
  type Text,
} from '@/data/tools/spreadsheetCheck';

// The spreadsheet check, /en/tools/spreadsheet-check and /el/tools/spreadsheet-check (offer-os
// gtm/seo-loop-2026-10 S14, SL-D61 to SL-D68), built after the Peak Code migration check of S13.
//
// Language neutral, the AboutPage / OfferLanding way: one component, every string in both locales,
// the questions and findings in src/data/tools/spreadsheetCheck.ts. Every question renders in the
// prerendered HTML, so the page reads in full without JavaScript; the result fills in as the
// visitor answers.
//
// Nothing leaves the browser (SL-D53). There is no form and no endpoint call. The one event is the
// existing cta_click on the link to the offer page, with cta_location "spreadsheet_check" and
// offer_slug "sheet-to-app" (SL-D65), which GA4 already reports.
//
// The offer link's href and anchor text come from the route as props: the anchor is the offer's own
// eyebrow (CLAUDE.md, the offer link rule), and passing it in keeps the offer's data file out of
// this client bundle.

const COPY: Record<string, Text> = {
  eyebrow: {en: 'For teams that share one spreadsheet', el: 'Για ομάδες που δουλεύουν σε ένα κοινό Excel'},
  h1: {en: 'Spreadsheet check', el: 'Τεστ για το κοινό Excel'},
  lead: {
    en: 'What does the way your team uses its shared spreadsheet mean? Answer up to 11 questions about your Excel or Google Sheets file, and the result shows what each answer means: what you can try in the sheet you have, where it stops, and what an app built around it adds.',
    el: 'Τι σημαίνει ο τρόπος που η ομάδα σου δουλεύει στο κοινό της Excel; Απάντησε σε έως 11 ερωτήσεις για το αρχείο σου στο Excel ή στο Google Sheets, και το αποτέλεσμα δείχνει τι σημαίνει κάθε απάντηση: τι μπορείς να δοκιμάσεις σε αυτό που ήδη έχεις, πού σταματά, και τι προσθέτει μια εφαρμογή χτισμένη γύρω από αυτό.',
  },
  privacy: {
    en: 'Your answers stay in your browser. Nothing is sent and nothing is stored.',
    el: 'Οι απαντήσεις σου μένουν στον browser σου. Δεν στέλνεται και δεν αποθηκεύεται τίποτα.',
  },
  scope: {
    en: 'The check reads your answers against what Microsoft and Google write about Excel and Google Sheets on their own help pages, and against how we build an app around a sheet. It gives no score and no verdict. Those pages give hard maximums for file size and for how many open tabs or devices can edit one Google file at once. None of them names a team size or a number of edits at which a shared sheet starts to fail.',
    el: 'Το τεστ διαβάζει τις απαντήσεις σου με βάση όσα γράφουν η Microsoft και η Google για το Excel και το Google Sheets στις δικές τους σελίδες βοήθειας, και με βάση το πώς χτίζουμε εμείς μια εφαρμογή γύρω από ένα Excel. Δεν βγάζει βαθμό ούτε ετυμηγορία. Οι σελίδες αυτές δίνουν ανώτατα όρια για το μέγεθος ενός αρχείου και για το σε πόσες καρτέλες ή συσκευές μπορεί ένα αρχείο Google να είναι ανοιχτό για επεξεργασία ταυτόχρονα. Καμία τους δεν ορίζει μέγεθος ομάδας ή αριθμό αλλαγών από τον οποίο και πέρα ένα κοινό Excel αρχίζει να δυσκολεύεται.',
  },
  questionsH2: {en: 'The questions', el: 'Οι ερωτήσεις'},
  howToFind: {en: 'How to find out', el: 'Πώς θα το βρεις'},
  resultH2: {en: 'Your result', el: 'Το αποτέλεσμά σου'},
  resultEmpty: {
    en: 'As soon as you answer the first question, this shows what your answers mean for the sheet you have and for an app built around it.',
    el: 'Μόλις απαντήσεις στην πρώτη ερώτηση, εδώ θα δεις τι σημαίνουν οι απαντήσεις σου για το αρχείο που έχεις και για μια εφαρμογή χτισμένη γύρω από αυτό.',
  },
  answered: {en: 'Answered', el: 'Απαντήσεις'},
  of: {en: 'of', el: 'από'},
  nothing: {
    en: 'Nothing follows here from your answers so far.',
    el: 'Από τις απαντήσεις σου ως τώρα δεν προκύπτει κάτι εδώ.',
  },
  unsureH3: {en: 'Still to find out', el: 'Τι μένει να μάθεις'},
  reset: {en: 'Reset answers', el: 'Καθάρισε τις απαντήσεις'},
  ctaH2: {en: 'Talk through your sheet with us', el: 'Συζήτησε μαζί μας πώς δουλεύει το Excel σου'},
  ctaText: {
    en: 'We read your column headers before the audit call, a 30-minute call where we talk through how your sheet runs today and what your team needs. 7 days after the audit call you get a prototype of your app, and you pay only if you like it.',
    el: 'Διαβάζουμε τα ονόματα των στηλών σου πριν από την πρώτη κλήση, μια κλήση 30 λεπτών όπου συζητάμε πώς δουλεύει σήμερα το Excel σου και τι χρειάζεται η ομάδα σου. 7 μέρες μετά την πρώτη κλήση έχεις ένα πρωτότυπο της εφαρμογής σου, και πληρώνεις μόνο αν σου αρέσει.',
  },
  offerBefore: {
    en: 'More on the prototype and the finished app:',
    el: 'Περισσότερα για το πρωτότυπο και την τελική εφαρμογή:',
  },
  sourcesH2: {en: 'Sources', el: 'Πηγές'},
  sourcesNote: {
    en: 'Every statement about Excel and Google Sheets in your result was checked on 21 October 2026 against the help pages below. The findings under “In an app built around your sheet” describe how we work.',
    el: 'Κάθε πρόταση για το Excel και το Google Sheets στο αποτέλεσμά σου ελέγχθηκε στις 21 Οκτωβρίου 2026 με βάση τις σελίδες βοήθειας παρακάτω. Όπου η Microsoft ή η Google δεν έχει ελληνική σελίδα, ο σύνδεσμος οδηγεί στην αγγλική. Τα ευρήματα κάτω από τον τίτλο «Σε μια εφαρμογή χτισμένη γύρω από το αρχείο σου» περιγράφουν πώς δουλεύουμε εμείς.',
  },
};

const EFFECT_ORDER: Effect[] = ['limit', 'fix', 'check', 'adds', 'note'];

const EFFECT_CLASS: Record<Effect, string> = {
  limit: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200',
  fix: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200',
  check: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100',
  adds: 'bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200',
  note: 'bg-green-100 text-green-900 dark:bg-green-950 dark:text-green-200',
};

export default function SpreadsheetCheck({
  language,
  offerHref,
  offerLabel,
}: {
  language: Lang;
  offerHref: string;
  offerLabel: string;
}) {
  const t = (key: string) => COPY[key][language];
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const questionsRef = useRef<HTMLHeadingElement>(null);

  const answeredCount = Object.keys(answers).length;

  const {perLane, unsureQs} = useMemo(() => {
    const perLane: Record<LaneId, Finding[]> = {sheet: [], app: []};
    const unsureQs: string[] = [];
    // A finding tagged with platforms shows only when the first question names one of them, or is
    // unanswered or "Not sure".
    const where = answers.where;
    const fits = (f: Finding) => !f.platforms || !where || where === 'unsure' || f.platforms.includes(where);
    for (const q of QUESTIONS) {
      const opt = q.options.find((o) => o.id === answers[q.id]);
      if (!opt) continue;
      if (opt.unsure) unsureQs.push(q.id);
      for (const f of opt.findings ?? []) {
        if (!fits(f)) continue;
        if (!perLane[f.lane].includes(f)) perLane[f.lane].push(f);
      }
    }
    for (const l of Object.keys(perLane) as LaneId[]) {
      perLane[l].sort((a, b) => EFFECT_ORDER.indexOf(a.effect) - EFFECT_ORDER.indexOf(b.effect));
    }
    return {perLane, unsureQs};
  }, [answers]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-28 pb-16 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 lg:pt-36">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-700 dark:text-primary-400">{t('eyebrow')}</p>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-gray-950 dark:text-white md:text-6xl">{t('h1')}</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">{t('lead')}</p>
          <p className="mt-4 max-w-3xl text-base text-gray-700 dark:text-gray-300">{t('privacy')}</p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 dark:text-gray-300">{t('scope')}</p>

          <h2 ref={questionsRef} tabIndex={-1} className="mt-12 font-display text-3xl font-bold text-gray-950 outline-none dark:text-white">
            {t('questionsH2')}
          </h2>
          <ol className="mt-8 space-y-6">
            {QUESTIONS.map((q, i) => (
              <li key={q.id} className="rounded-xl bg-gray-50 p-6 shadow-sm dark:bg-gray-800">
                <fieldset>
                  <legend className="text-lg font-semibold text-gray-950 dark:text-white">
                    {i + 1}. {q.text[language]}
                  </legend>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {q.options.map((o) => {
                      const selected = answers[q.id] === o.id;
                      return (
                        <label
                          key={o.id}
                          className={`cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium transition focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-800 ${
                            selected
                              ? 'border-primary-700 bg-primary-700 text-white'
                              : 'border-gray-300 bg-white text-gray-800 hover:border-primary-700 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100'
                          }`}
                        >
                          <input
                            type="radio"
                            name={q.id}
                            value={o.id}
                            checked={selected}
                            onChange={() => setAnswers((a) => ({...a, [q.id]: o.id}))}
                            className="sr-only"
                          />
                          {o.label[language]}
                        </label>
                      );
                    })}
                  </div>
                  <details className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                    <summary className="cursor-pointer font-medium text-primary-700 dark:text-primary-400">
                      {t('howToFind')}
                    </summary>
                    <p className="mt-2">{q.hint[language]}</p>
                  </details>
                </fieldset>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-gray-950 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-gray-950 dark:text-white">{t('resultH2')}</h2>
          {/* The one live region: a short status line, mounted from the start so screen readers
              register it, announcing the count; the lanes below are plain content. */}
          <p role="status" className={answeredCount === 0 ? 'sr-only' : 'mt-4 text-gray-700 dark:text-gray-300'}>
            {answeredCount === 0 ? '' : `${t('answered')}: ${answeredCount} ${t('of')} ${QUESTIONS.length}`}
          </p>
          {answeredCount === 0 ? (
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{t('resultEmpty')}</p>
          ) : (
            <>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {LANES.map((l) => (
                  <div key={l.id} className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
                    <h3 className="text-xl font-semibold text-gray-950 dark:text-white">{l.name[language]}</h3>
                    {perLane[l.id].length === 0 ? (
                      <p className="mt-3 text-gray-700 dark:text-gray-300">{t('nothing')}</p>
                    ) : (
                      <ul className="mt-4 space-y-4">
                        {perLane[l.id].map((f) => (
                          <li key={f.text.en} className="text-gray-700 dark:text-gray-300">
                            <span
                              className={`mr-2 inline-block rounded px-2 py-0.5 text-xs font-semibold ${EFFECT_CLASS[f.effect]}`}
                            >
                              {EFFECT_LABEL[f.effect][language]}
                            </span>
                            {f.text[language]}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
              {unsureQs.length > 0 && (
                <div className="mt-8 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
                  <h3 className="text-xl font-semibold text-gray-950 dark:text-white">{t('unsureH3')}</h3>
                  <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                    {QUESTIONS.filter((q) => unsureQs.includes(q.id)).map((q) => (
                      <li key={q.id}>
                        <span className="font-semibold">{q.text[language]}</span> {q.hint[language]}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <button
                type="button"
                onClick={() => {
                  setAnswers({});
                  questionsRef.current?.focus();
                }}
                className="mt-6 text-sm font-medium text-primary-700 hover:underline dark:text-primary-400"
              >
                {t('reset')}
              </button>
            </>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-gray-950 dark:text-white">{t('ctaH2')}</h2>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">{t('ctaText')}</p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">{t('offerBefore')}</p>
          <Link
            href={offerHref}
            onClick={() =>
              trackEvent(CTA_CLICK_EVENT, {cta_location: 'spreadsheet_check', locale: language, offer_slug: 'sheet-to-app'})
            }
            className="mt-6 inline-block rounded-lg bg-primary-700 px-6 py-3 font-medium text-white transition hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            {offerLabel}
          </Link>
        </div>
      </section>

      <section className="border-t border-gray-200 py-12 dark:border-gray-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-gray-950 dark:text-white">{t('sourcesH2')}</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300">{t('sourcesNote')}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {Object.entries(SOURCES).map(([key, s]) => (
              <li key={key}>
                <a
                  href={s.url[language]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-700 underline underline-offset-2 hover:text-primary-800 dark:text-primary-400"
                >
                  {s.title[language]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
