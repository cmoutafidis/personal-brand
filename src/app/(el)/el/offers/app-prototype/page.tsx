import type {Metadata} from 'next';
import OfferLanding from '@/components/OfferLanding';
import Footer from '@/components/Footer';
import appPrototype from '@/data/offers/app-prototype';
import {buildOfferMetadata, offerSchema} from '@/lib/offerSchema';
import {createTranslationFunction} from '@/translations';

// Front-end offer page. Google Ads landing page: not in the navigation, in the sitemap.
// Everything on it comes from src/data/offers/app-prototype.ts and src/components/OfferLanding.tsx.

export const metadata: Metadata = buildOfferMetadata(appPrototype, 'el');

export default function Page() {
  const t = createTranslationFunction('el');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(offerSchema(appPrototype, 'el'))}}
      />
      <OfferLanding offer={appPrototype} language="el"/>
      {/* The page collects a name, an email and a company name, so it needs the footer's
          privacy-policy link. The audit page shipped without one once; do not repeat it. */}
      <Footer t={t}/>
    </>
  );
}
