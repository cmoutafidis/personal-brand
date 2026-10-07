import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';
import Contact from '@/components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  // 2026-10-08 (F16, offer-os gtm/followups-and-search/PLAN.md F-D135): the Contact page leads with
  // the 7-day prototype. Copy from offer-os offers/fiji-solutions--sheet-to-app/derived/site/F16-COPY.md.
  title: 'Contact Fiji Solutions: a prototype 7 days after the audit call',
  description: 'Tell us which spreadsheet your team runs on. A prototype of your app 7 days after the free 30-minute audit call. Pay only if you like it. We reply within one business day.',
  keywords: 'contact Fiji Solutions, spreadsheet to app, turn spreadsheet into app, software company Thessaloniki',
  alternates: buildAlternates('/contact'),
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/en/contact',
    title: 'Contact Fiji Solutions: a prototype 7 days after the audit call',
    description: 'Tell us which spreadsheet your team runs on. A prototype of your app 7 days after the free 30-minute audit call. Pay only if you like it. We reply within one business day.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Contact Fiji Solutions, software company in Thessaloniki',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Contact Fiji Solutions: a prototype 7 days after the audit call',
    description: 'Tell us which spreadsheet your team runs on. A prototype of your app 7 days after the free 30-minute audit call. Pay only if you like it. We reply within one business day.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function EnglishContactPage() {
  const language = 'en';
  const t = createTranslationFunction(language);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Contact t={t} element={"h1"} lang="en"/>
      <Footer t={t}/>
    </div>
  );
}
