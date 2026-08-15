import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import {createTranslationFunction} from '@/translations';
import {Language} from '@/types/language';

// One skeleton for all six service pages.
//
// They used to be six near-identical files, each hardcoding the same three sections, the same
// Tailwind strings and — the part that read as unfinished — the SAME paragraph printed under
// every card in the grid. Each card now carries its own line, and the closing CTA goes to the
// audit page rather than to a bare contact form.

export type ServiceOutcome = { title: string; body: string };

export type ServicePageContent = {
  lang: Language;
  eyebrow: string;
  h1: string;
  lead: string;
  heroCta: string;
  outcomesTitle: string;
  outcomes: ServiceOutcome[];
  closingH2: string;
  closingBody: string;
  closingCta: string;
  schema: Record<string, unknown>;
};

export default function ServicePage(c: ServicePageContent) {
  const t = createTranslationFunction(c.lang);
  const auditHref = `/${c.lang}/business-process-audit`;

  return (
    <div className="min-h-screen bg-white pt-20 dark:bg-gray-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(c.schema)}}/>

      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary-600 dark:text-primary-400">
            {c.eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl">
            {c.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-700 dark:text-gray-300">{c.lead}</p>
          <Link
            href={auditHref}
            className="mt-8 inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700"
          >
            {c.heroCta}
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{c.outcomesTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {c.outcomes.map((o) => (
              <div key={o.title} className="rounded-xl bg-gray-50 p-6 shadow-sm dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{o.title}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-400">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-gray-800 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{c.closingH2}</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{c.closingBody}</p>
          <Link
            href={auditHref}
            className="mt-8 inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700"
          >
            {c.closingCta}
          </Link>
        </div>
      </section>

      <Footer t={t}/>
    </div>
  );
}
