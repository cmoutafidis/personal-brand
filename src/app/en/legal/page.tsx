import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import LegalContent from './LegalContent';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Legal Information | Fiji Solutions',
  description: 'Company registration and legal details for Fiji Solutions - software company in Thessaloniki, Greece.',
  alternates: {
    canonical: 'https://www.fijisolutions.net/en/legal',
  },
  openGraph: {
    url: 'https://www.fijisolutions.net/en/legal',
    title: 'Legal Information | Fiji Solutions',
    description: 'Company registration and legal details for Fiji Solutions - software company in Thessaloniki, Greece.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions',
      },
    ],
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