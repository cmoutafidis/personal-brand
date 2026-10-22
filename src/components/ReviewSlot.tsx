import {ArrowRight} from 'lucide-react';
import type {Language} from '@/types/language';
import {HOME} from '@/data/home';
import {GOOGLE_REVIEW_URL, REVIEWS} from '@/data/reviews';

// The review slot of both homepages. Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05, PLAN.md §4.5
// and §9, decision BR-D27). Today it renders the one placeholder card: a heading, a line and a link to write
// a review on the Fiji Business Profile. No stars, no quote, no avatar, and no review or rating markup in any
// state. BR-G29 adds the real kinds of src/data/reviews.ts when the first one exists; until then any other
// kind renders nothing.
//
// Server component: `language` comes in as a prop.

export default function ReviewSlot({language}: {language: Language}) {
  const copy = HOME[language].review;
  if (!REVIEWS.some((r) => r.kind === 'placeholder')) return null;

  return (
    <section className="bg-white py-6 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-dashed border-gray-300 p-6 text-center dark:border-gray-700 md:flex md:items-center md:justify-between md:gap-8 md:text-left">
          <div>
            <h2 className="mb-1 text-xl font-bold text-gray-950 dark:text-white md:text-2xl">{copy.heading}</h2>
            <p className="text-gray-700 dark:text-gray-300">{copy.line}</p>
          </div>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex flex-shrink-0 items-center font-medium text-primary-600 hover:underline dark:text-primary-400 md:mt-0"
          >
            {copy.link}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true"/>
          </a>
        </div>
      </div>
    </section>
  );
}
