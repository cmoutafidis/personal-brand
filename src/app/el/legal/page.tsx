import type { Metadata } from 'next';
import { createTranslationFunction } from '@/translations';
import LegalContent from './LegalContent';

export const metadata: Metadata = {
  title: 'Νομικές Πληροφορίες | Fiji Solutions',
  description: 'Στοιχεία εγγραφής και νομικές λεπτομέρειες εταιρείας για τη Fiji Solutions - εταιρεία λογισμικού στη Θεσσαλονίκη.',
  alternates: {
    canonical: 'https://www.fijisolutions.net/el/legal',
  },
  openGraph: {
    url: 'https://www.fijisolutions.net/el/legal',
    title: 'Νομικές Πληροφορίες | Fiji Solutions',
    description: 'Στοιχεία εγγραφής και νομικές λεπτομέρειες εταιρείας για τη Fiji Solutions - εταιρεία λογισμικού στη Θεσσαλονίκη.',
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

export default function GreekLegalPage() {
  const t = createTranslationFunction('el');

  return <LegalContent t={t} />;
}