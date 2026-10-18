import type {Metadata} from 'next';
import AtlasLanding from '@/components/AtlasLanding';
import AtlasFooter from '@/components/AtlasFooter';
import atlas from '@/data/offers/atlas';
import {buildOfferMetadata, offerSchema} from '@/lib/offerSchema';

// Atlas, the apply-only top tier, built 2026-10-18 from offer-os offers/fiji-solutions--atlas
// (gtm/atlas/DECISIONS.md AT-D1 to AT-D26). Everything on it comes from src/data/offers/atlas.ts
// and src/components/AtlasLanding.tsx. Metadata and JSON-LD carry no price (02-architecture.md).

export const metadata: Metadata = buildOfferMetadata(atlas, 'el');

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(offerSchema(atlas, 'el'))}}
      />
      <AtlasLanding offer={atlas} language="el"/>
      {/* The form collects a name, an email and a company name, so the page needs the privacy
          policy link. AtlasFooter carries it with the legal page and nothing else (QA round 1,
          CRO1: the shared Footer put 15 other links on a one-goal page). */}
      <AtlasFooter language="el"/>
    </>
  );
}
