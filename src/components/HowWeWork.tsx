import type {Language} from '@/types/language';
import {HOME} from '@/data/home';
import SectionHeading, {SECTION_PAD} from '@/components/SectionHeading';

// "How we work" on both homepages: four steps, no figures. Added 2026-10-22 (offer-os
// gtm/broad-home-2026-10 BR-G05, PLAN.md §4.1 row 10), copy from src/data/home.ts.
//
// Server component: `language` comes in as a prop.

// Since BR-D45 (2026-10-26, after ignitech.ch): the labelled heading on the left, the four steps as a 2x2 grid
// of joined cells on the right, each with its number in a small pill.
export default function HowWeWork({language}: {language: Language}) {
  const copy = HOME[language].how;

  return (
    <section className={`bg-white dark:bg-gray-900 ${SECTION_PAD}`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-4">
          <SectionHeading label={HOME[language].labels.how} heading={copy.heading}/>
        </div>
        <ol className="grid overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:grid-cols-2 lg:col-span-8" data-reveal="100">
          {copy.steps.map((step, i) => (
            <li key={step.title} className="border-gray-200 p-6 dark:border-gray-700 [&:not(:last-child)]:border-b sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(3)]:border-b-0">
              <span className="mb-4 inline-flex h-7 items-center rounded-full bg-primary-50 px-2.5 text-xs font-bold text-primary-700 dark:bg-primary-950 dark:text-primary-300" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mb-2 font-display text-lg font-extrabold tracking-[-0.01em] text-gray-950 dark:text-white">{step.title}</h3>
              <p className="leading-7 text-gray-600 dark:text-gray-300">{step.line}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
