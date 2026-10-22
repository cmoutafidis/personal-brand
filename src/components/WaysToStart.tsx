import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import type {Language} from '@/types/language';
import {HOME} from '@/data/home';
import {HOME_START} from '@/data/offerLinks';

// "Ways to start" on both homepages: five offers, each one way in. Added 2026-10-22 (offer-os
// gtm/broad-home-2026-10 BR-G05, PLAN.md §4.1 row 6 and §4.3). The list and its order are HOME_START in
// offerLinks.ts; the card heading and line come from src/data/home.ts; the link text is the offer's own
// eyebrow. No price and no guarantee line (BR-D24). The id is the target of the About page's "ways to
// start" link (offer-os contract, About, `waysBefore`).
//
// Server component: `language` comes in as a prop.

export const WAYS_TO_START_ID = 'ways-to-start';

export default function WaysToStart({language}: {language: Language}) {
  const copy = HOME[language].start;

  return (
    <section id={WAYS_TO_START_ID} className="bg-white py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-950 dark:text-white md:text-[2rem]">{copy.heading}</h2>
          <p className="mx-auto max-w-[65ch] text-lg leading-8 text-gray-700 dark:text-gray-300">{copy.line}</p>
        </div>
        <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:overflow-visible sm:px-0 sm:pb-0 sm:grid-cols-2 lg:grid-cols-5">
          {HOME_START.map(({slug, offer}) => (
            <li key={slug} className="flex w-[80%] flex-shrink-0 snap-start flex-col rounded-xl border border-gray-200/80 bg-gray-50 p-5 sm:w-auto dark:border-gray-700/80 dark:bg-gray-800">
              <h3 className="mb-2 text-lg font-semibold lg:text-base text-gray-950 dark:text-white">{copy.cards[slug].heading}</h3>
              <p className="mb-4 flex-1 text-gray-700 dark:text-gray-300 lg:text-sm">{copy.cards[slug].line}</p>
              <Link href={`/${language}/${slug}`} className="inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-400">
                {offer.copy[language].eyebrow}
                <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" aria-hidden="true"/>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
