import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import LegalContent from './LegalContent';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Legal Information | Fiji Solutions | Software Company Registration Details Thessaloniki, Greece',
  description: 'Official legal information and company registration details for Fiji Solutions, a registered software company in Thessaloniki, Greece. GEMI number, corporate details, and business registration information for our IT consulting and software development services.',
  keywords: 'Fiji Solutions legal, Fiji Solutions company registration, software company legal details Thessaloniki, GEMI registration Greece, business registration Thessaloniki, legal information software company, corporate details Fiji Solutions, company law Greece',
  alternates: {
    canonical: 'https://www.fijisolutions.net/en/legal',
  },
  openGraph: {
    url: 'https://www.fijisolutions.net/en/legal',
    title: 'Legal Information | Fiji Solutions | Software Company Registration Thessaloniki',
    description: 'Official legal information and company registration details for Fiji Solutions, a registered software company in Thessaloniki, Greece.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions Legal Information - Registered Software Company in Thessaloniki',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Legal Information | Fiji Solutions | Software Company Registration Thessaloniki',
    description: 'Official legal information and company registration details for Fiji Solutions, a registered software company in Thessaloniki, Greece.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function EnglishLegalPage() {
  const language = 'en';
  const t = createTranslationFunction(language);

  return (
    <>
      <LegalContent t={t}/>
      <Footer t={t}/>
    </>
  );
}