import {ChevronDown} from 'lucide-react';
import type {Language} from '@/types/language';
import {HOME} from '@/data/home';
import {jsonLd} from '@/lib/jsonLd';

// The FAQ of both homepages. Added 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05, PLAN.md §4.1 row 11,
// decision BR-D6) in place of the HomeLongForm block. The four existing ids stay, reworded broad; the
// FAQPage is built from the SAME array this renders, so the marked-up questions and the visible ones
// cannot drift. The node existed before this goal, so no new markup is added (GEO rule 3 in CLAUDE.md).
// Each answer sits in a native <details>, closed until opened, so the home stays inside its height target
// (PLAN.md §4.1); the answers are in the HTML either way.
//
// Server component: `language` comes in as a prop.

export default function HomeFaq({language}: {language: Language}) {
  const faq = HOME[language].faq;

  return (
    <section className="bg-white py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-950 dark:text-white md:text-[2rem]">{faq.heading}</h2>
        <div className="mt-6 grid border-t border-gray-200 dark:border-gray-800 lg:grid-cols-2 lg:gap-x-12">
          {faq.items.map((item) => (
            <details key={item.id} id={item.id} className="group border-b border-gray-200 py-4 dark:border-gray-800">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-semibold text-gray-950 dark:text-white [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <ChevronDown className="mt-1 h-5 w-5 flex-shrink-0 transition-transform group-open:rotate-180" aria-hidden="true"/>
              </summary>
              <p className="mt-3 text-lg leading-8 text-gray-700 dark:text-gray-300">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            inLanguage: language,
            mainEntity: faq.items.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {'@type': 'Answer', text: item.a},
            })),
          }),
        }}
      />
    </section>
  );
}
