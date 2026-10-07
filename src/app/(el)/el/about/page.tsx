import type {Metadata} from 'next';
import AboutPage, {aboutMetadata, aboutSchema} from '@/components/AboutPage';
import Footer from '@/components/Footer';
import {createTranslationFunction} from '@/translations';

// The about page, added 2026-10-08 in F16 (offer-os gtm/followups-and-search/PLAN.md F-D130).
// Everything on it lives in src/components/AboutPage.tsx.

export const metadata: Metadata = aboutMetadata('el');

export default function GreekAboutPage() {
  const t = createTranslationFunction('el');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(aboutSchema('el'))}}
      />
      <AboutPage lang="el"/>
      <Footer t={t}/>
    </>
  );
}
