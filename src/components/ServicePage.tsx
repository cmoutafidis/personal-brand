import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import {createTranslationFunction} from '@/translations';
import {Language} from '@/types/language';
import OfferLinks from '@/components/OfferLinks';
import WorkDone from '@/components/WorkDone';
import type {LinkedOffer, ServiceSlug} from '@/data/offerLinks';
import {jsonLd} from '@/lib/jsonLd';
import {BOOKING_URL} from '@/lib/booking';
import TrackedLink from '@/components/TrackedLink';
import {BOOKING_CLICK_EVENT} from '@/utils/gtag';

// One skeleton for all six service pages.
//
// They used to be six near-identical files, each hardcoding the same three sections, the same
// Tailwind strings and — the part that read as unfinished — the SAME paragraph printed under
// every card in the grid. Each card now carries its own line, and the closing CTA goes to the
// audit page rather than to a bare contact form.

export type ServiceOutcome = { title: string; body: string };
export type ServiceQuestion = { q: string; a: string };

export type ServicePageContent = {
  lang: Language;
  eyebrow: string;
  h1: string;
  lead: string;
  heroCta: string;
  outcomesTitle: string;
  outcomes: ServiceOutcome[];
  // The depth sections (2026-10-29, offer-os gtm/seo-plan-2026-10 D5, CONT-1): typical engagements, how a project
  // runs, the tools we connect, how it is priced (D-95: fixed fee in writing, never a figure, BR-D24) and the
  // questions a searcher asks, each its own H2 with the direct answer first. No FAQPage node (D-13).
  // Copy contract: offer-os companies/fiji-solutions/site/03-copy-home.md, "Service pages".
  engagementsTitle: string;
  engagements: ServiceOutcome[];
  processTitle: string;
  process: ServiceOutcome[];
  integrationsTitle: string;
  integrationsIntro: string;
  integrations: string[];
  pricingTitle: string;
  howPriced: string[];
  questions: ServiceQuestion[];
  closingH2: string;
  closingBody: string;
  closingCta: string;
  /**
   * Where both buttons go. 'audit' (the default) is the free process audit page; 'booking' is the 30-minute call
   * (BOOKING_URL), for the Snowflake and data pages, whose searchers a process audit headline does not answer
   * (D-94, D5).
   */
  cta?: 'audit' | 'booking';
  /**
   * The offers that are fixed-scope ways to buy THIS service, from OFFERS_BY_SERVICE in
   * src/data/offerLinks.ts. Never hand-written here, and never an offer that belongs to another
   * service page: the map is a tree and it is only a tree if it stays in one file. The Snowflake
   * page passes an empty array on purpose — see offerLinks.ts.
   */
  offers?: LinkedOffer[];
  /** The route without its locale, e.g. `/services/data-analysis-greece`. Builds the Service node's url and @id. */
  path: string;
  schema: Record<string, unknown>;
};

const SITE = 'https://www.fijisolutions.net';

// The page's JSON-LD: the Service node the page passes, given a url and an @id, and a BreadcrumbList
// (2026-10-28, offer-os gtm/seo-plan-2026-10 C5, SCH-4). Without @id the node could not be referenced, and
// without url nothing tied it to this page. Two items, since there is no services index page.
function serviceSchema(c: ServicePageContent) {
  const url = `${SITE}/${c.lang}${c.path}`;
  const service: Record<string, unknown> = {...c.schema};
  delete service['@context'];
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {...service, '@id': `${url}#service`, url},
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: c.lang === 'el' ? 'Αρχική' : 'Home', item: `${SITE}/${c.lang}`},
          {'@type': 'ListItem', position: 2, name: c.schema.name, item: url},
        ],
      },
    ],
  };
}

const BUTTON = 'inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700';

function Cta({c, label, location, className}: {c: ServicePageContent; label: string; location: string; className: string}) {
  if (c.cta === 'booking') {
    return (
      <TrackedLink
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        event={BOOKING_CLICK_EVENT}
        params={{cta_location: location, locale: c.lang, service: c.path.replace('/services/', '')}}
        className={`${className} ${BUTTON}`}
      >
        {label}
      </TrackedLink>
    );
  }
  return <Link href={`/${c.lang}/business-process-audit`} className={`${className} ${BUTTON}`}>{label}</Link>;
}

function Cards({items, numbered, onGrey}: {items: ServiceOutcome[]; numbered?: boolean; onGrey?: boolean}) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      {items.map((o, i) => (
        <div key={o.title} className={`rounded-xl p-6 shadow-sm ${onGrey ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}`}>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {numbered && <span className="mr-2 text-primary-600 dark:text-primary-400">{i + 1}.</span>}
            {o.title}
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">{o.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function ServicePage(c: ServicePageContent) {
  const t = createTranslationFunction(c.lang);

  return (
    <div className="min-h-screen bg-white pt-20 dark:bg-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: jsonLd(serviceSchema(c))}}/>

      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">
            {c.eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">
            {c.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">{c.lead}</p>
          <Cta c={c} label={c.heroCta} location="service-hero" className="mt-8"/>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{c.outcomesTitle}</h2>
          <Cards items={c.outcomes}/>
        </div>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{c.engagementsTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {c.engagements.map((o) => (
              <div key={o.title} className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{o.title}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The projects that show this service (2026-10-29, offer-os gtm/seo-plan-2026-10 D4, CONT-3). */}
      <WorkDone page={c.path.slice(1) as ServiceSlug} lang={c.lang}/>

      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{c.processTitle}</h2>
          <Cards items={c.process} numbered onGrey/>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{c.integrationsTitle}</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{c.integrationsIntro}</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {c.integrations.map((name) => (
              <li key={name} className="rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-800 shadow-sm dark:bg-gray-800 dark:text-gray-200">
                {name}
              </li>
            ))}
          </ul>
          <h2 className="mt-14 text-3xl font-bold text-gray-900 dark:text-white">{c.pricingTitle}</h2>
          {c.howPriced.map((p) => (
            <p key={p} className="mt-4 text-lg text-gray-600 dark:text-gray-400">{p}</p>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-24">
        <div className="mx-auto max-w-4xl space-y-12 px-4 sm:px-6 lg:px-8">
          {c.questions.map((q) => (
            <div key={q.q}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">{q.q}</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{q.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Added 2026-09-01, when Google Ads was dropped and organic became the whole strategy.
          Until then the /offers/* pages were orphans on purpose, because they arrived by paid
          click; an orphan now is just a page that cannot rank. BODY link only — this must never
          be lifted into Navbar, Footer, QuickLinks or the /portfolio Services grid. */}
      <OfferLinks lang={c.lang} variant="service" offers={c.offers ?? []}/>

      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{c.closingH2}</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{c.closingBody}</p>
          <Cta c={c} label={c.closingCta} location="service-closing" className="mt-8"/>
        </div>
      </section>

      <Footer t={t}/>
    </div>
  );
}
