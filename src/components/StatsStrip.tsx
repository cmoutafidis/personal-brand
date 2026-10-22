import type {Language} from '@/types/language';
import {HOME} from '@/data/home';

// The stats strip under the hero of both homepages. Added 2026-10-22 (offer-os gtm/broad-home-2026-10
// BR-G05, PLAN.md §4.1 row 3), copy from src/data/home.ts. Four tiles, 2 by 2 on a phone. No count of
// projects or clients, no rating and no price (BR-D24). Each tile's source is in the offer-os contract;
// the Snowflake listing was read in his Chrome on 2026-10-22 (SELECT, Fiji Solutions, Greece).

export default function StatsStrip({language}: {language: Language}) {
  const stats = HOME[language].stats;

  return (
    <section className="border-y border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-6 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.figure} className="text-center">
            <dt className="text-xl font-bold text-gray-950 dark:text-white md:text-2xl">{s.figure}</dt>
            <dd className="mt-1 text-sm text-gray-600 dark:text-gray-400">{s.line}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
