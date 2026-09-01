import type {Metadata} from 'next';
import OfferLanding from '@/components/OfferLanding';
import Footer from '@/components/Footer';
import aiDevelopmentSprint from '@/data/offers/ai-development-sprint';
import {buildOfferMetadata, offerSchema} from '@/lib/offerSchema';
import {createTranslationFunction} from '@/translations';

// Front-end offer page. Was a Google Ads landing page until 2026-09-01; organic search is now the
// only way in, so it is linked from page bodies (src/data/offerLinks.ts) — still not in the navigation.
// Everything on it comes from src/data/offers/ai-development-sprint.ts and src/components/OfferLanding.tsx.

export const metadata: Metadata = buildOfferMetadata(aiDevelopmentSprint, 'en');

export default function Page() {
  const t = createTranslationFunction('en');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(offerSchema(aiDevelopmentSprint, 'en'))}}
      />
      <OfferLanding offer={aiDevelopmentSprint} language="en"/>
      {/* The page collects a name, an email and a company name, so it needs the footer's
          privacy-policy link. The audit page shipped without one once; do not repeat it. */}
      <Footer t={t}/>
    </>
  );
}
