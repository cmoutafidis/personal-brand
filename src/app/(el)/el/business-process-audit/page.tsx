import type {Metadata} from 'next';
import BusinessProcessAuditLanding from '@/components/BusinessProcessAuditLanding';
import Footer from '@/components/Footer';
import {createTranslationFunction} from '@/translations';
import {buildAlternates} from '@/lib/alternates';

export const metadata: Metadata = {
  title: 'Δωρεάν Ανάλυση Επιχειρηματικών Διαδικασιών | Fiji Solutions',
  description: 'Κλείσε ένα δωρεάν Process Audit: γραπτός χάρτης με τα bottlenecks που σου κοστίζουν χρήματα και custom λογισμικό με την Εγγύηση Απόσβεσης. Απόσβεση σε 6 μήνες από το go-live ή σου επιστρέφουμε την αμοιβή υλοποίησης.',
  keywords: 'δωρεάν ανάλυση διαδικασιών, βελτιστοποίηση workflows Ελλάδα, αυτοματοποίηση διαδικασιών, custom software Ελλάδα, internal operations fix, AI λογισμικό',
  alternates: buildAlternates('/business-process-audit', 'el'),
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
  const t = createTranslationFunction('el');

  return (
    <>
      <BusinessProcessAuditLanding language="el"/>
      {/* Added 2026-08-15. These two routes were the ONLY ones in the repo that did not
          render a Footer, so the one page that collects a name and an email was also the
          one page with no link to the privacy policy. */}
      <Footer t={t}/>
    </>
  );
}
