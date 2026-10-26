import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import type {Language} from '@/types/language';
import {HOME} from '@/data/home';
import {HOME_START} from '@/data/offerLinks';
import SectionHeading, {SECTION_PAD} from '@/components/SectionHeading';

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
    <section id={WAYS_TO_START_ID} className={`bg-white dark:bg-gray-900 ${SECTION_PAD}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label={HOME[language].labels.start} heading={copy.heading} line={copy.line}/>
        <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:overflow-visible sm:px-0 sm:pb-0 sm:grid-cols-2 lg:grid-cols-5">
          {HOME_START.map(({slug, offer}, i) => (
            <li key={slug} data-reveal={String(i * 80)} className="flex w-[80%] flex-shrink-0 snap-start flex-col rounded-[20px] border-[1.5px] border-gray-200 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-primary-600 hover:shadow-[0_8px_32px_rgba(0,134,255,0.12)] dark:border-gray-700 dark:bg-gray-900 dark:hover:border-primary-400 p-6 sm:w-auto">
              <span className="mb-4 inline-flex h-7 w-fit items-center rounded-full bg-primary-50 px-2.5 text-xs font-bold text-primary-700 dark:bg-primary-950 dark:text-primary-300" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mb-2 font-display text-lg font-extrabold leading-snug tracking-[-0.01em] text-gray-950 dark:text-white">{copy.cards[slug].heading}</h3>
              <p className="mb-4 flex-1 text-gray-600 dark:text-gray-300 lg:text-sm lg:leading-6">{copy.cards[slug].line}</p>
              <Link href={`/${language}/${slug}`} className="inline-flex items-center font-semibold text-primary-600 hover:underline dark:text-primary-400">
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
