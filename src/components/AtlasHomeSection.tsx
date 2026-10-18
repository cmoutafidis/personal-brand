import React from 'react';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {Language} from '@/types/language';
import {ATLAS_HOME, ATLAS_PATH} from '@/data/offers/atlas';

// The Atlas band on both homepages, added 2026-10-18 (offer-os gtm/atlas/DECISIONS.md AT-D8,
// AT-D22). Its own section, placed directly after the Sheet-to-App section (Solutions.tsx) and
// never inside that box. Copy verbatim from offer-os offers/fiji-solutions--atlas/03-copy.md,
// "Homepage section", via src/data/offers/atlas.ts. Its line names no price: AT-D34 (2026-10-18)
// keeps the figure on the Atlas page, after the core total (AT-D36). One link, in the band, to /offers/atlas.
//
// Server component: it takes `language` as a prop, which keeps both homepages statically prerendered.

export default function AtlasHomeSection({language}: {language: Language}) {
  const copy = ATLAS_HOME[language];

  return (
    <section id="atlas" className="bg-primary-50 py-16 dark:bg-gray-950 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 text-sm font-semibold text-primary-700 dark:text-primary-300">{copy.eyebrow}</p>
        <h2 className="mb-4 text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">{copy.heading}</h2>
        <p className="mx-auto max-w-[65ch] text-lg leading-8 text-gray-700 dark:text-gray-300">{copy.line}</p>
        <Link
          href={`/${language}/${ATLAS_PATH}`}
          className="mt-6 inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-400"
        >
          {copy.link}
          <ArrowRight className="ml-2 h-4 w-4"/>
        </Link>
      </div>
    </section>
  );
}
