import type {Metadata} from 'next';
import BusinessProcessAuditLanding from '@/components/BusinessProcessAuditLanding';

export const metadata: Metadata = {
  title: 'Δωρεάν Ανάλυση Επιχειρηματικών Διαδικασιών | Fiji Solutions',
  description: 'Κλείσε ένα δωρεάν Process Audit: γραπτός χάρτης με τα bottlenecks που σου κοστίζουν χρήματα και custom λογισμικό με την Εγγύηση Απόσβεσης — απόσβεση σε 6 μήνες από το go-live ή σου επιστρέφουμε την αμοιβή υλοποίησης.',
  keywords: 'δωρεάν ανάλυση διαδικασιών, βελτιστοποίηση workflows Ελλάδα, αυτοματοποίηση διαδικασιών, custom software Ελλάδα, internal operations fix, AI λογισμικό',
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
    description: 'Βρες τα workflow bottlenecks που κοστίζουν χρήματα στην επιχείρησή σου και λύσε τα με custom λογισμικό που καλύπτεται από την Εγγύηση Απόσβεσης.',
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
    description: 'Βρες τις διαρροές χρήματος στα workflows σου και λύσε τες με custom λογισμικό που καλύπτεται από την Εγγύηση Απόσβεσης.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function GreekBusinessProcessAuditPage() {
  return <BusinessProcessAuditLanding language="el" />;
}
