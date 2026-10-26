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

// Since BR-D45 (2026-10-26): a navy band with the copy on the left and the link as a white button on the right,
// so the home alternates light sections with one dark one, as ignitech.ch does with its footer and banner.
export default function AtlasHomeSection({language}: {language: Language}) {
  const copy = ATLAS_HOME[language];

  return (
    <section id="atlas" className="bg-[#0d1b35] py-14 md:py-[72px]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8" data-reveal="">
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-primary-300">
            <span className="inline-block h-0.5 w-[18px] rounded bg-primary-300" aria-hidden="true"/>
            {copy.eyebrow}
          </p>
          <h2 className="mb-4 text-[1.9rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-white md:text-[2.5rem]">{copy.heading}</h2>
          <p className="max-w-[65ch] text-lg leading-8 text-gray-300">{copy.line}</p>
        </div>
        <Link
          href={`/${language}/${ATLAS_PATH}`}
          className="inline-flex flex-shrink-0 items-center justify-center self-start rounded-lg bg-white px-7 py-3.5 font-semibold text-[#0d1b35] transition hover:-translate-y-0.5 hover:bg-primary-50 lg:self-center"
        >
          {copy.link}
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true"/>
        </Link>
      </div>
    </section>
  );
}
