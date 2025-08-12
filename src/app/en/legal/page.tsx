import type { Metadata } from 'next';
import LegalContent from './LegalContent';

export const metadata: Metadata = {
  title: 'Legal Information | Fiji Solutions',
  description: 'Company registration and legal details for Fiji Solutions - software company in Thessaloniki, Greece.',
  alternates: {
    canonical: 'https://fijisolutions.net/en/legal',
  },
  openGraph: {
    url: 'https://fijisolutions.net/en/legal',
    title: 'Legal Information | Fiji Solutions',
    description: 'Company registration and legal details for Fiji Solutions - software company in Thessaloniki, Greece.',
    images: [
      {
        url: 'https://fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions',
      },
    ],
  },
};

export default function EnglishLegalPage() {
  return <LegalContent />;
}