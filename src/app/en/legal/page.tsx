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
  },
};

export default function EnglishLegalPage() {
  return <LegalContent />;
}