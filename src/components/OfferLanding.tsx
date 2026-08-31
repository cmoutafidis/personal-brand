import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import {Language} from '@/types/language';
import {REPLY_SLA} from '@/lib/offer';
import {CALENDLY_URL} from '@/components/AuditFormSection';

// One component, every front-end offer page.
//
// These pages are Google Ads landing pages. They are deliberately NOT in the navigation: an ad
// points at one of them, the reader either takes the offer or leaves. They ARE in the sitemap and
// indexable, because organic search may also find them.
//
// WHY ONE COMPONENT AND NOT ONE PER OFFER. There are eight offers and two locales, so sixteen
// hand-built pages would drift within a week: the guarantee wording, the CTA label and the form
// copy would each end up saying something slightly different on each page, and nobody would notice
// which. Here the layout lives once and each offer is a data file under `src/data/offers/`. That
// also makes the en/el pair structurally impossible to get out of parity, which is the invariant
// `repo.md` asks for and which nothing else in this repo enforces.
//
// ⛔ NO PRICE APPEARS ON ANY OF THESE PAGES. Charis, 2026-08-31, asked directly how the offer pages
// should handle price: "Do not mention price." That is the same rule as CLAUDE.md rule 7 and it is
// not relaxed here just because the workbook these offers came from calls them "cheap offers".
// There is no price field on OfferCopy on purpose. Adding one is the wrong fix.
//
// ⛔ NO RESULTS CLAIM APPEARS EITHER. `proof/` in the offer-os knowledge base holds nothing for
// Fiji except the Snowflake partnership. The 75% on some of these pages is a GUARANTEE with a
// refund behind it, not a measurement of past work, and the copy must keep saying so.

export type LeadItem = {
  lead: string;
  body: string;
};

export type TimelineItem = {
  when: string;
  body: string;
};

export type Faq = {
  q: string;
  a: string;
};

export type OfferCopy = {
  /** <title>. Under 60 characters. */
  metaTitle: string;
  /** <meta description>. Under 155 characters. */
  metaDescription: string;
  metaKeywords: string;
  ogAlt: string;

  /** s01 — the exact primary keyword, above the fold, once. */
  eyebrow: string;
  title: string;
  subhead: string;
  bullets: LeadItem[];

  /** s03 */
  problemTitle: string;
  problemParagraphs: string[];

  /** s05 — the named method. */
  mechanismTitle: string;
  mechanismParagraphs: string[];

  /** s07 */
  stackTitle: string;
  stackIntro: string;
  stackItems: LeadItem[];

  /** s10 — every duration anchored to the kickoff workshop, never to first contact. */
  timelineTitle: string;
  timeline: TimelineItem[];
  timelineNote: string;

  /** s13 */
  guaranteeTitle: string;
  guaranteePromise: string;
  guaranteePoints: LeadItem[];
  guaranteeClosing: string;

  /** s17 */
  fitTitle: string;
  fitForLabel: string;
  fitFor: string[];
  fitNotForLabel: string;
  fitNotFor: string[];

  /** s15 — also the source of the FAQPage JSON-LD, so the two can never disagree. */
  faqTitle: string;
  faqs: Faq[];

  ctaButton: string;
  ctaCallout: string;

  formTitle: string;
  formSubhead: string;
  formMessageLabel: string;
  formMessagePlaceholder: string;
  formMicrocopy: string;
  formSuccess: string;
  calendlyLead: string;
  calendlyLink: string;
};

export type Offer = {
  /** Route below the locale, without a leading slash: `offers/ai-agent`. Same in both locales. */
  slug: string;
  /**
   * Lead-source marker. Rides as the form's `question` field, which is the ONLY thing telling one
   * offer's submissions from another's in the shared inbox. One per page. Never reuse another
   * surface's value.
   */
  questionMarker: string;
  /** schema.org `serviceType`. English in both locales — schema.org values are not translated. */
  serviceType: string;
  copy: Record<Language, OfferCopy>;
};

function CtaButton({label, callout}: {label: string; callout?: string}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <a
        href="#offer-form"
        className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-lg font-medium text-white shadow-lg shadow-primary-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      >
        {label}
      </a>
      {callout && (
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-400">
          {callout}
        </p>
      )}
    </div>
  );
}

function SectionTitle({children}: {children: React.ReactNode}) {
  return (
    <h2 className="mb-8 text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">
      {children}
    </h2>
  );
}

function Check() {
  return (
    <svg
      className="mt-1 h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function OfferLanding({offer, language}: {offer: Offer; language: Language}) {
  const c = offer.copy[language];

  return (
    <>
      {/* s01 — hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-200/60 blur-3xl dark:bg-primary-900/30"/>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary-200/60 blur-3xl dark:bg-secondary-900/30"/>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-36">
          <div className="mx-auto max-w-4xl text-center">
            {/* LOAD-BEARING. The only above-the-fold instance of the page's exact primary keyword.
                The H1 is a result promise, which cannot also carry the keyword without reading
                like a category page. Deleting this eyebrow costs the paid and organic channels
                their keyword match with no visible symptom on the page. */}
            <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
              {c.eyebrow}
            </p>
            <h1 className="mb-8 text-4xl font-bold leading-tight text-gray-950 dark:text-white md:text-5xl lg:text-6xl">
              {c.title}
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-gray-700 dark:text-gray-300 md:text-xl">
              {c.subhead}
            </p>
            <ul className="mx-auto mb-10 max-w-2xl space-y-4 text-left">
              {c.bullets.map((bullet) => (
                <li key={bullet.lead} className="flex items-start gap-3">
                  <Check/>
                  <p className="text-base leading-7 text-gray-700 dark:text-gray-300 md:text-lg">
                    <strong className="font-semibold text-gray-950 dark:text-white">{bullet.lead}</strong>{' '}
                    {bullet.body}
                  </p>
                </li>
              ))}
            </ul>
            <CtaButton label={c.ctaButton} callout={c.ctaCallout}/>
          </div>
        </div>
      </section>

      {/* s03 — the problem, in the reader's week */}
      <section className="bg-white py-16 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{c.problemTitle}</SectionTitle>
          <div className="space-y-5 text-lg leading-8 text-gray-700 dark:text-gray-300">
            {c.problemParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* s05 — the mechanism. Why this is possible at this speed. */}
      <section className="bg-gray-50 py-16 dark:bg-gray-950 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{c.mechanismTitle}</SectionTitle>
          <div className="space-y-5 text-lg leading-8 text-gray-700 dark:text-gray-300">
            {c.mechanismParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* s07 — what you get */}
      <section className="bg-white py-16 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{c.stackTitle}</SectionTitle>
          <p className="mb-8 text-lg leading-8 text-gray-700 dark:text-gray-300">{c.stackIntro}</p>
          <ul className="space-y-5">
            {c.stackItems.map((item) => (
              <li key={item.lead} className="flex items-start gap-3">
                <Check/>
                <p className="text-base leading-7 text-gray-700 dark:text-gray-300 md:text-lg">
                  <strong className="font-semibold text-gray-950 dark:text-white">{item.lead}</strong>{' '}
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <CtaButton label={c.ctaButton}/>
          </div>
        </div>
      </section>

      {/* s10 — the timeline. Anchored at the workshop, never at first contact. */}
      <section className="bg-gray-50 py-16 dark:bg-gray-950 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{c.timelineTitle}</SectionTitle>
          <ol className="space-y-6 border-l border-primary-200 pl-6 dark:border-primary-900">
            {c.timeline.map((step) => (
              <li key={step.when} className="relative">
                <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-primary-600 dark:bg-primary-400"/>
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
                  {step.when}
                </p>
                <p className="mt-1 text-base leading-7 text-gray-700 dark:text-gray-300 md:text-lg">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-base font-medium leading-7 text-gray-700 dark:text-gray-300">
            {c.timelineNote}
          </p>
        </div>
      </section>

      {/* s13 — the guarantee. A promise with a remedy, not a claim about past work. */}
      <section className="bg-white py-16 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{c.guaranteeTitle}</SectionTitle>
          <p className="mb-8 rounded-xl border border-primary-200 bg-primary-50 p-6 text-lg font-semibold leading-8 text-gray-950 dark:border-primary-900 dark:bg-primary-950/40 dark:text-white">
            {c.guaranteePromise}
          </p>
          <ul className="space-y-5">
            {c.guaranteePoints.map((point) => (
              <li key={point.lead} className="flex items-start gap-3">
                <Check/>
                <p className="text-base leading-7 text-gray-700 dark:text-gray-300 md:text-lg">
                  <strong className="font-semibold text-gray-950 dark:text-white">{point.lead}</strong>{' '}
                  {point.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base font-medium leading-7 text-gray-700 dark:text-gray-300">
            {c.guaranteeClosing}
          </p>
          <div className="mt-12">
            <CtaButton label={c.ctaButton}/>
          </div>
        </div>
      </section>

      {/* s17 — who this is for, and who it is not for */}
      <section className="bg-gray-50 py-16 dark:bg-gray-950 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{c.fitTitle}</SectionTitle>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-950 dark:text-white">
                {c.fitForLabel}
              </h3>
              <ul className="space-y-3">
                {c.fitFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check/>
                    <span className="text-base leading-7 text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-gray-950 dark:text-white">
                {c.fitNotForLabel}
              </h3>
              <ul className="space-y-3">
                {c.fitNotFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400 dark:bg-gray-600"
                      aria-hidden="true"
                    />
                    <span className="text-base leading-7 text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* s15 — objections. The SAME array feeds the FAQPage JSON-LD in the route file, so the
          marked-up answer and the rendered answer cannot drift apart. Google requires marked-up
          FAQ content to be present on the page. */}
      <section className="bg-white py-16 dark:bg-gray-900 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle>{c.faqTitle}</SectionTitle>
          <dl className="space-y-8">
            {c.faqs.map((faq) => (
              <div key={faq.q}>
                <dt className="mb-2 text-lg font-semibold text-gray-950 dark:text-white">{faq.q}</dt>
                <dd className="text-base leading-7 text-gray-700 dark:text-gray-300">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The form. `questionMarker` is what makes a submission attributable to THIS offer. */}
      <section id="offer-form" className="scroll-mt-24 bg-gray-50 py-16 dark:bg-gray-950 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">
              {c.formTitle}
            </h2>
            <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">{c.formSubhead}</p>
          </div>

          <div className="mx-auto max-w-2xl">
            <ContactForm
              languageOverride={language}
              hideTitle
              presetQuestion={offer.questionMarker}
              messageOptional
              messageLabelOverride={c.formMessageLabel}
              messagePlaceholderOverride={c.formMessagePlaceholder}
              submitLabelOverride={c.ctaButton}
              successMessageOverride={c.formSuccess}
            />
            <p className="mt-6 text-center text-sm leading-6 text-gray-600 dark:text-gray-400">
              {c.formMicrocopy}
            </p>
            <p className="mt-2 text-center text-sm leading-6 text-gray-600 dark:text-gray-400">
              {c.calendlyLead}{' '}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary-600 underline underline-offset-4 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                {c.calendlyLink}
              </a>
            </p>
            <p className="mt-6 text-center text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">
              {c.ctaCallout}
            </p>
            {/* The reply-time promise is site-wide and lives in offer.ts. It is rendered rather
                than retyped so this page cannot promise a different one from the audit page. */}
            <p className="mt-2 text-center text-sm leading-6 text-gray-600 dark:text-gray-400">
              {language === 'el'
                ? `Απαντάμε μέσα σε ${REPLY_SLA.el}.`
                : `We reply within ${REPLY_SLA.en}.`}
            </p>
            <p className="mt-6 text-center text-xs leading-5 text-gray-500 dark:text-gray-500">
              <Link
                href={`/${language}/business-process-audit`}
                className="underline underline-offset-2 hover:text-gray-700 dark:hover:text-gray-300"
              >
                {language === 'el'
                  ? 'Δες και τον δωρεάν έλεγχο διαδικασιών'
                  : 'See also the free Process Audit'}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
