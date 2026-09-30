import type {Metadata} from 'next';
import SheetToAppLanding from '@/components/SheetToAppLanding';
import Footer from '@/components/Footer';
import sheetToApp from '@/data/offers/sheet-to-app';
import {buildOfferMetadata, offerSchema} from '@/lib/offerSchema';
import {createTranslationFunction} from '@/translations';

// The 7-Day Sheet-to-App Prototype, built 2026-09-30 in G19. It replaces /offers/app-prototype,
// which now redirects here (next.config.ts). Everything on it comes from
// src/data/offers/sheet-to-app.ts and src/components/SheetToAppLanding.tsx.

export const metadata: Metadata = buildOfferMetadata(sheetToApp, 'el');

export default function Page() {
  const t = createTranslationFunction('el');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(offerSchema(sheetToApp, 'el'))}}
      />
      <SheetToAppLanding offer={sheetToApp} language="el"/>
      {/* The page collects a name, an email and a company name, so it needs the footer's
          privacy-policy link. */}
      <Footer t={t}/>
    </>
  );
}
