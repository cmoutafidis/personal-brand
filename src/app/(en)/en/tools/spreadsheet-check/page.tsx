import type {Metadata} from 'next';
import SpreadsheetCheck from '@/components/SpreadsheetCheck';
import Footer from '@/components/Footer';
import sheetToApp from '@/data/offers/sheet-to-app';
import {spreadsheetCheckMetadata, spreadsheetCheckSchema} from '@/lib/spreadsheetCheckPage';
import {createTranslationFunction} from '@/translations';
import {jsonLd} from '@/lib/jsonLd';

// The spreadsheet check, built 2026-10-21 in S14 of offer-os gtm/seo-loop-2026-10. Its twin is
// /el/tools/spreadsheet-check. Everything on it lives in src/components/SpreadsheetCheck.tsx and
// src/data/tools/spreadsheetCheck.ts. The one body link to an offer goes to sheet-to-app, with the
// offer's own eyebrow as anchor text (CLAUDE.md, the offer link rule).

export const metadata: Metadata = spreadsheetCheckMetadata('en');

export default function EnglishSpreadsheetCheckPage() {
  const t = createTranslationFunction('en');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: jsonLd(spreadsheetCheckSchema('en'))}}
      />
      <SpreadsheetCheck
        language="en"
        offerHref={`/en/${sheetToApp.slug}`}
        offerLabel={sheetToApp.copy.en.eyebrow}
      />
      <Footer t={t}/>
    </>
  );
}
