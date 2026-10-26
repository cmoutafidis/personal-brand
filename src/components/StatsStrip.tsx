import type {Language} from '@/types/language';
import {HOME} from '@/data/home';

// The stats strip under the hero of both homepages. Added 2026-10-22 (offer-os gtm/broad-home-2026-10
// BR-G05, PLAN.md §4.1 row 3), copy from src/data/home.ts. Four tiles, 2 by 2 on a phone. No count of
// projects or clients, no rating and no price (BR-D24). Each tile's source is in the offer-os contract;
// the Snowflake listing was read in his Chrome on 2026-10-22 (SELECT, Fiji Solutions, Greece).

// Since BR-D45 (2026-10-26) the four stats sit in the hero, as a 2x2 panel of cards on the right where
// ignitech.ch has its photo; Hero.tsx renders this, and the home pages no longer render it on its own.
export default function StatsStrip({language}: {language: Language}) {
  const stats = HOME[language].stats;

  return (
    <dl className="grid grid-cols-2 gap-3 sm:gap-4">
      {stats.map((s, i) => (
        <div
          key={s.figure}
          className={`flex flex-col justify-between rounded-2xl border p-5 shadow-sm sm:p-6 ${
            i === 0
              ? 'border-primary-600 bg-primary-600 text-white shadow-primary-600/20'
              : 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'
          }`}
        >
          <dt className={`text-xl font-extrabold leading-tight tracking-[-0.02em] font-display md:text-2xl ${i === 0 ? 'text-white' : 'text-gray-950 dark:text-white'}`}>
            {s.figure}
          </dt>
          <dd className={`mt-3 text-sm leading-6 ${i === 0 ? 'text-primary-50' : 'text-gray-600 dark:text-gray-400'}`}>{s.line}</dd>
        </div>
      ))}
    </dl>
  );
}
