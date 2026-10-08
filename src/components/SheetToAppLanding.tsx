import React from 'react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import TrackedLink from '@/components/TrackedLink';
import SheetToAppStickyCta from '@/components/SheetToAppStickyCta';
import type {Faq} from '@/components/OfferLanding';
import {BOOKING_CLICK_EVENT, CTA_CLICK_EVENT} from '@/utils/gtag';
import {Language} from '@/types/language';
import {OFFER_NEXT_COPY, PARENT_SERVICE, SERVICE_LABEL, SIBLING_OFFER, type OfferSlug} from '@/data/offerLinks';
import {SHEET_TO_APP_BOOKING_URL} from '@/data/offers/sheet-to-app';
import {offerLastmod} from '@/lib/offerSchema';

// The layout of the 7-Day Sheet-to-App Prototype page, /en/offers/sheet-to-app and
// /el/offers/sheet-to-app. Built 2026-09-30 in G19.
//
// WHY A SECOND OFFER LAYOUT. OfferLanding renders the seven workbook offers with one fixed section
// set (hero, problem, mechanism, stack, timeline, guarantee, fit, FAQ). This offer's contract,
// offer-os `offers/fiji-solutions--sheet-to-app/02-architecture.md`, is a different page: nineteen
// sections in page.sections order, five CTA blocks, tables, a diagram and a priced section. Fitting
// it into OfferLanding would change sixteen live routes. So the copy lives in one bilingual data
// file, src/data/offers/sheet-to-app.ts, and this component renders whatever sections it lists, in
// order. The en/el pair shares this layout, which keeps them in structural parity.
//
// Every section carries a stable id matching its section id in lowercase (s01-hero, s03-problem,
// ..., s18-cta-1 to s18-cta-4), and the form section is `sheet-to-app-form`, the page's one
// destination (D59). Every button is an in-page link to it.
//
// PRICES. This page is the dated exception to CLAUDE.md rule 7 (2026-09-30): the body publishes
// the price ladder in S12 and in the S19 close, as the approved 03-copy.md writes it (D79, G15a).
// D68 keeps every figure out of the hero, the FAQ and the emails. Nothing here adds a figure anywhere
// else, and the JSON-LD built in lib/offerSchema.ts carries none.
//
// ATTENTION RATIO. Navbar renders a logo-only header on this route and the Vapi chat bubble does
// not load (src/lib/landing.ts). The body links nowhere except its own anchors, the public mailto
// address, the privacy link inside the form, the Calendly booking line under the form, the offer
// graph's foot nav below the form, and (2026-10-08, F22, offer-os
// gtm/followups-and-search/PLAN.md F-D161 to F-D164) the two case study lines in S09, each to its
// shared Gamma doc in a new tab, so the offer page stays open behind it. The footer stays, for the
// privacy-policy link.

export type Block =
  /** A paragraph. `lead` renders bold before the text. */
  | {type: 'p'; text: string; lead?: string}
  /** A bold line on its own. */
  | {type: 'strong'; text: string}
  | {type: 'h3'; text: string}
  | {type: 'ul'; items: {lead?: string; text: string}[]}
  | {type: 'ol'; items: string[]; start?: number}
  /** `rowHeaders` renders each row's first cell as its header. An empty head cell renders empty. */
  | {type: 'table'; head: string[]; rows: string[][]; rowHeaders?: boolean}
  /** The S05 four-step diagram: one row of boxes, numbered by position. */
  | {type: 'diagram'; boxes: string[]}
  /** Side by side on wide screens, stacked on a phone. */
  | {type: 'cards'; cards: {title: string; items: string[]}[]}
  /** A worked formula line, set apart from the prose. */
  | {type: 'formula'; text: string}
  /** A paragraph that is a quotation of the reader's own words. */
  | {type: 'quote'; text: string}
  /** A text link to the offer stack. `lead` is plain text before the link. */
  | {type: 'skip'; text: string; lead?: string}
  /**
   * A line linking a case study doc (F22, 2026-10-08), opened in a new tab. Each click is a
   * cta_click with `location` as its cta_location. Only CS1 and CS-NEL, never CS-AKB (F-D21).
   */
  | {type: 'caseStudy'; text: string; href: string; location: string};

export type Section =
  | {kind: 'content'; id: string; title: string; blocks: Block[]}
  /** An S18 CTA block: benefit, action, the button, the risk remover. */
  | {kind: 'cta'; id: string; benefit: string; action: string}
  /** S15. Its questions come from `faqs`, which also feed the FAQPage JSON-LD. */
  | {kind: 'faq'; id: string; title: string};

export type SheetToAppCopy = {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  ogAlt: string;
  /** The S01 outcome line. Also the anchor text of every link to this page (offerLinks.ts). */
  eyebrow: string;
  title: string;
  subhead: string;
  button: string;
  heroSkip: string;
  /** The tag at the end of the hero illustration's calendar strip. No strip when undefined. */
  illustrationDayTag?: string;
  riskRemover: string;
  sections: Section[];
  faqs: Faq[];
  formTitle: string;
  formSubhead: string;
  formNameLabel: string;
  formEmailLabel: string;
  formCompanyLabel: string;
  formMessageLabel: string;
  formMessagePlaceholder: string;
  /** Form chrome written in G19 (2026-09-30), outside 03-copy.md: the error when the headers field is left empty. The site's "<label> is required" does not agree with a plural label. */
  formMessageRequired: string;
  formMicrocopy: string;
  formSuccess: string;
  bookingBefore: string;
  bookingLink: string;
  bookingAfter: string;
  /** Written 2026-10-08 in F17 (F-D144), outside 03-copy.md: the word before the page's visible last-update date. */
  updatedLabel: string;
};

export type SheetToAppOffer = {
  slug: 'offers/sheet-to-app';
  /** Lead-source marker, sent as the form's `question`. Unique to this page. */
  questionMarker: string;
  /** schema.org serviceType, English in both locales. */
  serviceType: string;
  /** schema.org areaServed per locale, from offer.yaml seo.area_served (D97). */
  areaServed: Record<Language, string[]>;
  /** Site-relative 1200x630 preview image per locale (F17, F-D143). */
  ogImage: Record<Language, string>;
  /** Prints the sitemap lastmod as "Updated <date>" at the page end and emits it as dateModified (F17, F-D144). */
  showUpdated: true;
  copy: Record<Language, SheetToAppCopy>;
};

const FORM_ID = 'sheet-to-app-form';

/** An ISO date as "8 October 2026" or «8 Οκτωβρίου 2026», read in UTC so the build machine's zone cannot shift it. */
function formatUpdated(iso: string, language: Language): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(language === 'el' ? 'el-GR' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
const STACK_ID = 's07-offer-stack';
const HERO_ID = 's01-hero';
const CONTACT_EMAIL = 'info@fijisolutions.net';

const linkClass =
  'font-medium text-primary-600 underline underline-offset-4 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300';

/** Renders the site's public address as a mailto link wherever a line carries it. */
function withMailto(text: string): React.ReactNode {
  const at = text.indexOf(CONTACT_EMAIL);
  if (at === -1) return text;
  return (
    <>
      {text.slice(0, at)}
      <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
        {CONTACT_EMAIL}
      </a>
      {text.slice(at + CONTACT_EMAIL.length)}
    </>
  );
}

function CtaButton({
  label,
  location,
  language,
  offerSlug
}: {
  label: string;
  location: string;
  language: Language;
  offerSlug: string;
}) {
  return (
    <TrackedLink
      event={CTA_CLICK_EVENT}
      params={{cta_location: location, locale: language, offer_slug: offerSlug}}
      href={`#${FORM_ID}`}
      className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-center text-lg font-medium text-white shadow-lg shadow-primary-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
    >
      {label}
    </TrackedLink>
  );
}

function BlockView({block, language, offerSlug}: {block: Block; language: Language; offerSlug: string}) {
  switch (block.type) {
    case 'p':
      return (
        <p>
          {block.lead && (
            <>
              <strong className="font-semibold text-gray-950 dark:text-white">{block.lead}</strong>{' '}
            </>
          )}
          {withMailto(block.text)}
        </p>
      );
    case 'strong':
      return (
        <p className="font-semibold text-gray-950 dark:text-white">
          <strong className="font-semibold">{block.text}</strong>
        </p>
      );
    case 'h3':
      return (
        <h3 className="pt-4 text-xl font-semibold leading-8 text-gray-950 dark:text-white md:text-2xl">
          {block.text}
        </h3>
      );
    case 'ul':
      return (
        <ul className="space-y-4">
          {block.items.map((item) => (
            <li key={item.text} className="flex items-start gap-3">
              <span
                className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600 dark:bg-primary-400"
                aria-hidden="true"
              />
              <span>
                {item.lead && (
                  <>
                    <strong className="font-semibold text-gray-950 dark:text-white">{item.lead}</strong>{' '}
                  </>
                )}
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol start={block.start} className="list-decimal space-y-3 pl-6 marker:font-semibold marker:text-primary-600 dark:marker:text-primary-400">
          {block.items.map((item) => (
            <li key={item} className="pl-1">
              {item}
            </li>
          ))}
        </ol>
      );
    case 'table':
      return (
        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[32rem] border-collapse text-left text-base leading-7">
            <thead>
              <tr className="border-b-2 border-primary-200 dark:border-primary-900">
                {block.head.map((cell, i) => (
                  <th
                    key={`${cell}-${i}`}
                    scope="col"
                    className="px-3 py-3 align-bottom font-semibold text-gray-950 first:pl-0 dark:text-white"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]} className="border-b border-gray-200 dark:border-gray-800">
                  {row.map((cell, i) =>
                    i === 0 && block.rowHeaders ? (
                      <th
                        key={`${cell}-${i}`}
                        scope="row"
                        className="py-3 pl-0 pr-3 align-top font-semibold text-gray-950 dark:text-white"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td key={`${cell}-${i}`} className="px-3 py-3 align-top text-gray-700 dark:text-gray-300">
                        {cell}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'diagram':
      return (
        <ol className="grid grid-cols-2 gap-3 py-2 md:grid-cols-4">
          {block.boxes.map((box, i) => (
            <li
              key={box}
              className="flex flex-col items-start gap-2 rounded-xl border border-primary-200 bg-primary-50 p-4 dark:border-primary-900 dark:bg-primary-950/40"
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white dark:bg-primary-500"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span className="text-base font-semibold leading-6 text-gray-950 dark:text-white">{box}</span>
            </li>
          ))}
        </ol>
      );
    case 'cards':
      return (
        <div className="grid gap-6 md:grid-cols-2">
          {block.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="mb-4 text-xl font-semibold text-gray-950 dark:text-white">{card.title}</h3>
              <ul className="space-y-3 text-base leading-7">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600 dark:bg-primary-400"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case 'formula':
      return (
        <p className="rounded-xl border border-gray-200 bg-white p-5 text-base font-medium leading-7 text-gray-950 dark:border-gray-800 dark:bg-gray-900 dark:text-white">
          {block.text}
        </p>
      );
    case 'quote':
      return (
        <p className="border-l-4 border-primary-200 pl-5 italic dark:border-primary-900/60">{block.text}</p>
      );
    case 'skip':
      return (
        <p className="pt-2 text-base">
          {block.lead && <>{block.lead} </>}
          <a href={`#${STACK_ID}`} className={linkClass}>
            {block.text}
          </a>
        </p>
      );
    case 'caseStudy':
      return (
        <p className="text-base">
          <TrackedLink
            event={CTA_CLICK_EVENT}
            params={{cta_location: block.location, locale: language, offer_slug: offerSlug}}
            href={block.href}
            target="_blank"
            rel="noopener"
            className={linkClass}
          >
            {block.text}
          </TrackedLink>
        </p>
      );
  }
}

/** The hero illustration: drawn shapes with generic labels. */
function HeroIllustration({dayTag}: {dayTag?: string}) {
  const rows = [
    {w: 'w-3/5', dot: 'bg-emerald-500'},
    {w: 'w-2/5', dot: 'bg-amber-400'},
    {w: 'w-1/2', dot: 'bg-primary-500'},
    {w: 'w-3/5', dot: 'bg-emerald-500'},
    {w: 'w-1/3', dot: 'bg-amber-400'}
  ];
  return (
    <div aria-hidden="true" className="mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xl dark:border-gray-700 dark:bg-gray-900">
        <div className="mb-4 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600"/>
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600"/>
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600"/>
        </div>
        {/* The row of column names, drawn as header cells. */}
        <div className="mb-3 grid grid-cols-4 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="h-3 rounded bg-primary-200 dark:bg-primary-900"/>
          ))}
        </div>
        {/* The screen of orders or jobs, a status beside each. */}
        <ul className="space-y-2.5">
          {rows.map((row, i) => (
            <li key={i} className="flex items-center gap-3 rounded-lg bg-gray-50 px-3 py-2.5 dark:bg-gray-800">
              <span className={`h-2.5 ${row.w} rounded bg-gray-300 dark:bg-gray-600`}/>
              <span className={`ml-auto h-3 w-3 flex-shrink-0 rounded-full ${row.dot}`}/>
            </li>
          ))}
        </ul>
      </div>
      {dayTag && (
        <div className="mt-5 flex items-center gap-1.5">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span key={i} className="h-7 flex-1 rounded-md bg-primary-100 dark:bg-primary-950/60"/>
          ))}
          <span className="flex h-7 flex-[2] items-center justify-center rounded-md bg-primary-600 text-sm font-semibold text-white dark:bg-primary-500">
            {dayTag}
          </span>
        </div>
      )}
    </div>
  );
}

export default function SheetToAppLanding({offer, language}: {offer: SheetToAppOffer; language: Language}) {
  const c = offer.copy[language];
  // GA4's offer_slug, as OfferLanding derives it: `sheet-to-app`.
  const offerSlug = offer.slug.replace(/^offers\//, '');
  const parent = PARENT_SERVICE[offer.slug as OfferSlug];
  const sibling = SIBLING_OFFER[offer.slug as OfferSlug];
  const next = OFFER_NEXT_COPY[language];
  const updated = offerLastmod(offer);

  let band = 0;
  const bandClass = () =>
    band++ % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-950';

  return (
    <>
      {/* s01: the hero. The H1 is the first text and the largest, with nothing above it (D66). */}
      <section
        id={HERO_ID}
        className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800"
      >
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-200/60 blur-3xl dark:bg-primary-900/30"/>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary-200/60 blur-3xl dark:bg-secondary-900/30"/>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-36">
          <div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-950 dark:text-white md:text-5xl lg:text-6xl">
              {c.title}
            </h1>
            <p className="mb-4 max-w-[60ch] text-lg leading-8 text-gray-700 dark:text-gray-300 md:text-xl">
              {c.subhead}
            </p>
            <p className="mb-8 text-sm font-medium text-primary-700 dark:text-primary-300">{c.eyebrow}</p>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CtaButton label={c.button} location="hero" language={language} offerSlug={offerSlug}/>
              <a href={`#${STACK_ID}`} className={`text-base ${linkClass}`}>
                {c.heroSkip}
              </a>
            </div>
          </div>
          <HeroIllustration dayTag={c.illustrationDayTag}/>
        </div>
      </section>

      {c.sections.map((section) => {
        if (section.kind === 'cta') {
          return (
            <section key={section.id} id={section.id} className={`${bandClass()} py-14 md:py-20`}>
              <div className="mx-auto max-w-[65ch] px-4 text-center sm:px-6">
                <p className="text-xl font-semibold leading-8 text-gray-950 dark:text-white">{section.benefit}</p>
                <p className="mt-3 text-lg leading-8 text-gray-700 dark:text-gray-300">{section.action}</p>
                <div className="mt-8">
                  <CtaButton label={c.button} location={section.id} language={language} offerSlug={offerSlug}/>
                </div>
                <p className="mt-4 text-sm font-medium text-gray-600 dark:text-gray-400">{c.riskRemover}</p>
              </div>
            </section>
          );
        }

        if (section.kind === 'faq') {
          return (
            <section key={section.id} id={section.id} className={`${bandClass()} py-16 md:py-24`}>
              <div className="mx-auto max-w-[65ch] px-4 sm:px-6">
                <h2 className="mb-10 text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">{section.title}</h2>
                <dl className="space-y-8">
                  {c.faqs.map((faq) => (
                    <div key={faq.q}>
                      <dt className="mb-2 text-lg font-semibold text-gray-950 dark:text-white">{faq.q}</dt>
                      <dd className="text-base leading-7 text-gray-700 dark:text-gray-300 md:text-lg md:leading-8">{faq.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>
          );
        }

        return (
          <section key={section.id} id={section.id} className={`${bandClass()} scroll-mt-24 py-16 md:py-24`}>
            <div className="mx-auto max-w-[65ch] px-4 sm:px-6">
              <h2 className="mb-8 text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">{section.title}</h2>
              <div className="space-y-5 text-lg leading-8 text-gray-700 dark:text-gray-300">
                {section.blocks.map((block, i) => (
                  <BlockView key={`${section.id}-${i}`} block={block} language={language} offerSlug={offerSlug}/>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* S18 block 5: the form section, the page's one destination (D59). Its id is the anchor
          every button points at. `questionMarker` is what tells this page's leads apart in the
          shared inbox. The site's "How did you hear about us" field stays as a fifth field: G19
          settled it, as 02-architecture.md leaves it to G19. The copy's microcopy renders directly under the button,
          inside the form, and the name, email and company inputs carry no sample placeholders,
          since 03-copy.md gives none. */}
      <section id={FORM_ID} className={`${bandClass()} scroll-mt-24 py-16 md:py-24`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-[65ch] text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">{c.formTitle}</h2>
            <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">{c.formSubhead}</p>
          </div>
          <div className="mx-auto max-w-2xl">
            <ContactForm
              languageOverride={language}
              hideTitle
              presetQuestion={offer.questionMarker}
              offerSlug={offerSlug}
              nameLabelOverride={c.formNameLabel}
              emailLabelOverride={c.formEmailLabel}
              companyLabelOverride={c.formCompanyLabel}
              messageLabelOverride={c.formMessageLabel}
              messagePlaceholderOverride={c.formMessagePlaceholder}
              messageRequiredErrorOverride={c.formMessageRequired}
              submitLabelOverride={c.button}
              successMessageOverride={c.formSuccess}
              microcopyUnderButton={c.formMicrocopy}
              hideSamplePlaceholders
            />
            {/* The booking line books the audit call on the existing 30-minute Calendly event
                (offer-os D120, 2026-09-30), SHEET_TO_APP_BOOKING_URL in
                src/data/offers/sheet-to-app.ts. It renders only while that string is set. */}
            {SHEET_TO_APP_BOOKING_URL && (
              <p className="mt-2 text-center text-sm leading-6 text-gray-600 dark:text-gray-400">
                {c.bookingBefore}
                <TrackedLink
                  event={BOOKING_CLICK_EVENT}
                  params={{cta_location: 'form-calendly', locale: language, offer_slug: offerSlug}}
                  href={SHEET_TO_APP_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {c.bookingLink}
                </TrackedLink>
                {c.bookingAfter}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Where this offer sits: the offer graph's foot nav, below the form (02-architecture.md,
          Attention ratio), up to the parent service and across to the one sibling, both from
          src/data/offerLinks.ts. A body nav at the foot of this page, below the form. */}
      <section className="border-t border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-900">
        <nav aria-label={next.heading} className="mx-auto max-w-[65ch] px-4 sm:px-6">
          <h2 className="text-lg font-semibold text-gray-950 dark:text-white">{next.heading}</h2>
          <ul className="mt-4 space-y-3 text-base leading-7 text-gray-700 dark:text-gray-300">
            {parent && (
              <li>
                {next.parentLead}{' '}
                <Link href={`/${language}/${parent}`} className={linkClass}>
                  {SERVICE_LABEL[parent][language]}
                </Link>
              </li>
            )}
            {sibling && (
              <li>
                {next.siblingLead}{' '}
                <Link href={`/${language}/${sibling.slug}`} className={linkClass}>
                  {sibling.copy[language].eyebrow}
                </Link>
              </li>
            )}
          </ul>
        </nav>
        {/* 2026-10-08 (F17, F-D144): the page's last update, at the page end, outside the nav
            landmark. The date is the route's sitemap lastmod (src/lib/routes.ts), the same value the
            WebPage node emits as dateModified, so the sitemap, this line and the JSON-LD agree. */}
        <p className="mx-auto mt-8 max-w-[65ch] px-4 text-sm leading-6 text-gray-600 dark:text-gray-400 sm:px-6">
          {c.updatedLabel}{' '}
          <time dateTime={updated}>{formatUpdated(updated, language)}</time>
        </p>
      </section>

      <SheetToAppStickyCta
        label={c.button}
        heroId={HERO_ID}
        formId={FORM_ID}
        language={language}
        offerSlug={offerSlug}
      />
    </>
  );
}
