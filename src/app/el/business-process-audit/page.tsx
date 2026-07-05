import type {Metadata} from 'next';
import BusinessProcessAuditLanding from '@/components/BusinessProcessAuditLanding';

export const metadata: Metadata = {
  title: 'Δωρεάν Ανάλυση Επιχειρηματικών Διαδικασιών | Fiji Solutions',
  description: 'Αναλύουμε δωρεάν τα workflows σου, βρίσκουμε bottlenecks που κοστίζουν χρήματα και φτιάχνουμε custom AI-based λογισμικό με εγγύηση απόσβεσης σε 3 έως 6 μήνες.',
  keywords: 'δωρεάν ανάλυση διαδικασιών, βελτιστοποίηση workflows Ελλάδα, AI λογισμικό, αυτοματοποίηση διαδικασιών, custom software Ελλάδα, αύξηση εσόδων',
  alternates: {
    canonical: 'https://www.fijisolutions.net/el/business-process-audit',
    languages: {
      en: 'https://www.fijisolutions.net/en/business-process-audit',
      el: 'https://www.fijisolutions.net/el/business-process-audit',
    },
  },
  openGraph: {
    type: 'website',
    title: 'Δωρεάν Ανάλυση Επιχειρηματικών Διαδικασιών | Fiji Solutions',
    description: 'Βρες τα workflow bottlenecks που κοστίζουν χρήματα στην επιχείρησή σου και λύσε τα με custom AI-based software με εγγύηση απόσβεσης.',
    url: 'https://www.fijisolutions.net/el/business-process-audit',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions - Δωρεάν ανάλυση επιχειρηματικών διαδικασιών και custom AI software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Δωρεάν Ανάλυση Επιχειρηματικών Διαδικασιών | Fiji Solutions',
    description: 'Βρες revenue leaks στα workflows σου και λύσε τα με custom AI-based software με εγγύηση απόσβεσης.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function GreekBusinessProcessAuditPage() {
  return <BusinessProcessAuditLanding language="el" />;
}
