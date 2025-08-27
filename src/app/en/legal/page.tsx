import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import LegalContent from './LegalContent';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Legal Information | Fiji Solutions | Software Company Registration Details Thessaloniki, Greece',
  description: 'Official legal information and company registration details for Fiji Solutions, a software company in Thessaloniki, Greece specializing in IT consulting and custom software development. GEMI number, corporate details, and business registration information.',
  keywords: 'Fiji Solutions legal, Fiji Solutions company registration, software company Thessaloniki legal, GEMI registration Greece, business registration Thessaloniki, legal information software company, corporate details Fiji Solutions, IT consulting legal details, custom software development legal, company law Greece',
  alternates: {
    canonical: 'https://www.fijisolutions.net/en/legal',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/en/legal',
    title: 'Legal Information | Fiji Solutions | Software Company Registration Thessaloniki',
    description: 'Official legal information and company registration details for Fiji Solutions, a software company in Thessaloniki, Greece specializing in IT consulting and custom software development.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions Legal Information - Registered Software Company in Thessaloniki specializing in IT consulting and custom software development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Legal Information | Fiji Solutions | Software Company Registration Thessaloniki',
    description: 'Official legal information and company registration details for Fiji Solutions, a software company in Thessaloniki, Greece specializing in IT consulting and custom software development.',
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