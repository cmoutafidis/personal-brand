import React from 'react';
import Link from 'next/link';
import {Language} from '@/types/language';
import sheetToApp from '@/data/offers/sheet-to-app';

// 2026-10-08 (F16, offer-os gtm/followups-and-search/PLAN.md F-D133): /portfolio carries ONE prose
// link to the 7-Day Sheet-to-App Prototype, under the three Services cards. Charis picked "Yes, one
// prose link", a dated exception to the CLAUDE.md rule that keeps /offers/* off this hub. It is the
// one offer this page links, and the three cards stay three. Copy from offer-os
// `offers/fiji-solutions--sheet-to-app/derived/site/F16-COPY.md` section 4; the second sentence is
// the homepage's body link line (Solutions.tsx), and the anchor text is the destination's own
// `eyebrow`, read from the data file and never typed here (offerLinks.ts rule).
const COPY: Record<Language, {lead: string; before: string; after: string}> = {
  en: {
    lead: 'If your week runs on one shared spreadsheet, start with a prototype of your app 7 days after the audit call, and pay only if you like it.',
    before: 'Everything the finished app includes is on the prototype\'s page: ',
    after: '.'
  },
  el: {
    lead: 'Αν η δουλειά της ομάδας σου τρέχει σε ένα κοινό Excel, ξεκίνα με ένα πρωτότυπο της εφαρμογής σου 7 μέρες μετά την πρώτη κλήση, και πληρώνεις μόνο αν σου αρέσει.',
    before: 'Όσα περιλαμβάνει η τελική εφαρμογή τα βρίσκεις στη σελίδα του πρωτοτύπου: ',
    after: '.'
  }
};

export default function PortfolioOfferLink({lang}: {lang: Language}) {
  const c = COPY[lang];
  return (
    <section className="pb-16 md:pb-24 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {c.lead} {c.before}
          <Link
            href={`/${lang}/${sheetToApp.slug}`}
            className="font-medium text-primary-600 dark:text-primary-400 underline underline-offset-4 hover:no-underline"
          >
            {sheetToApp.copy[lang].eyebrow}
          </Link>
          {c.after}
        </p>
      </div>
    </section>
  );
}
