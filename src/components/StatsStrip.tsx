import type {Language} from '@/types/language';
import {HOME} from '@/data/home';

// The stats strip under the hero of both homepages. Added 2026-10-22 (offer-os gtm/broad-home-2026-10
// BR-G05, PLAN.md §4.1 row 3), copy from src/data/home.ts. Four tiles, 2 by 2 on a phone. No count of
// projects or clients, no rating and no price (BR-D24). Each tile's source is in the offer-os contract;
// the Snowflake listing was read in his Chrome on 2026-10-22 (SELECT, Fiji Solutions, Greece).

// Since BR-D45 (2026-10-26) the strip takes the shape of ignitech.ch's stats bar, in the same place, right under
// the hero: one centred row, each figure heavy and blue over a small uppercase line, thin dividers between them.
// For a few hours that day it sat in the hero as a 2x2 panel; he asked for the hero in one column again.
export default function StatsStrip({language}: {language: Language}) {
  const stats = HOME[language].stats;

  return (
    <section className="border-b border-gray-200 bg-white py-7 dark:border-gray-800 dark:bg-gray-900">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-4 sm:px-6 md:flex md:items-stretch md:justify-center lg:px-8">
        {stats.map((s, i) => (
          <div key={s.figure} className={`flex flex-col items-center px-4 text-center md:flex-1 md:self-stretch md:justify-center md:px-6 ${i > 0 ? 'md:border-l md:border-gray-200 md:dark:border-gray-700' : ''}`}>
            <dt className="font-display text-[1.35rem] font-extrabold leading-tight tracking-[-0.01em] text-primary-600 dark:text-primary-400 lg:text-[1.6rem]">{s.figure}</dt>
            <dd className="mt-1.5 text-xs font-semibold uppercase tracking-[0.04em] text-gray-500 dark:text-gray-400">{s.line}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
