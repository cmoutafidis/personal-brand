import type {Language} from '@/types/language';
import {HOME} from '@/data/home';

// "How we work" on both homepages: four steps, no figures. Added 2026-10-22 (offer-os
// gtm/broad-home-2026-10 BR-G05, PLAN.md §4.1 row 10), copy from src/data/home.ts.
//
// Server component: `language` comes in as a prop.

export default function HowWeWork({language}: {language: Language}) {
  const copy = HOME[language].how;

  return (
    <section className="bg-gray-50 py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-950 dark:text-white md:text-[2rem]">{copy.heading}</h2>
        <ol className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {copy.steps.map((step, i) => (
            <li key={step.title} className="rounded-xl border border-gray-200/80 bg-white p-4 sm:p-5 dark:border-gray-700/80 dark:bg-gray-800">
              <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white dark:bg-primary-500" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mb-1 text-base font-semibold sm:mb-2 sm:text-lg text-gray-950 dark:text-white">{step.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 sm:text-base lg:text-sm">{step.line}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
