import React from 'react';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import type {Language} from '@/types/language';
import {PROJECTS_COPY, projectBySlug} from '@/data/projects';
import {WORK_DONE, WORK_DONE_HEADING, type WorkDonePage} from '@/data/workDone';

// The "Work we have done" block on the offer and service pages (offer-os gtm/seo-plan-2026-10 D4, audit CONT-3).
// Server component, like OfferLinks: the project data stays out of the browser bundle. The list comes from
// src/data/workDone.ts; the intro and the index link are the projects index's own strings (PROJECTS_COPY).
//
// A border-top band, like OfferLinks, so it can sit in any page without breaking the white and grey banding:
// `tone` is the background it takes (white by default), and the line marks it off from the section above.

const TONE = {
  white: 'bg-white dark:bg-gray-900',
  grey: 'bg-gray-50 dark:bg-gray-950',
} as const;

const LINK_CLASS =
  'font-semibold text-primary-600 underline underline-offset-4 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300';

function slugsFor(page: WorkDonePage): readonly string[] {
  const slugs = WORK_DONE[page];
  if (!slugs) throw new Error(`WorkDone: no entry for ${page} in src/data/workDone.ts`);
  return slugs;
}

export default function WorkDone({
  page,
  lang,
  tone = 'white',
}: {
  page: WorkDonePage;
  lang: Language;
  tone?: keyof typeof TONE;
}) {
  const c = PROJECTS_COPY[lang];
  return (
    <section id="work-we-have-done" className={`border-t border-gray-200 py-16 dark:border-gray-800 md:py-20 ${TONE[tone]}`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-950 dark:text-white md:text-3xl">{WORK_DONE_HEADING[lang]}</h2>
        <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300">{c.indexIntro}</p>
        <ul className="mt-6 space-y-5">
          {slugsFor(page).map((slug) => {
            const p = projectBySlug(slug);
            if (!p) throw new Error(`WorkDone: no live project ${slug} for ${page}`);
            return (
              <li key={slug} className="text-base leading-7 text-gray-700 dark:text-gray-300 md:text-lg">
                <Link href={`/${lang}/projects/${slug}`} className={LINK_CLASS}>
                  {p.copy[lang].h1}
                </Link>
                <p className="mt-1">{p.copy[lang].cardLine}</p>
              </li>
            );
          })}
        </ul>
        <p className="mt-6">
          <Link
            href={`/${lang}/projects`}
            className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-400"
          >
            {c.all}
            <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" aria-hidden="true"/>
          </Link>
        </p>
      </div>
    </section>
  );
}
