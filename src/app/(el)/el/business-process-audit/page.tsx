import type {Metadata} from 'next';
import BusinessProcessAuditLanding from '@/components/BusinessProcessAuditLanding';
import Footer from '@/components/Footer';
import {createTranslationFunction} from '@/translations';
import {buildAlternates} from '@/lib/alternates';

export const metadata: Metadata = {
  title: 'Δωρεάν έλεγχος διαδικασιών | Fiji Solutions',
  description: 'Κλείσε δωρεάν έλεγχο διαδικασιών: γραπτός χάρτης με τα τρία σημεία που σου κοστίζουν χρήματα, και μετά εξατομικευμένο λογισμικό με Εγγύηση Απόσβεσης. Απόσβεση σε 6 μήνες από τη θέση σε λειτουργία, αλλιώς επιστρέφουμε την αμοιβή υλοποίησης.',
  keywords: 'δωρεάν έλεγχος διαδικασιών, βελτιστοποίηση διαδικασιών, αυτοματοποίηση διαδικασιών, εξατομικευμένο λογισμικό Ελλάδα, εγγύηση απόσβεσης',
  alternates: buildAlternates('/business-process-audit', 'el'),
  openGraph: {
    type: 'website',
    title: 'Δωρεάν έλεγχος διαδικασιών | Fiji Solutions',
    description: 'Βρες τα σημεία που σου κοστίζουν χρήματα και λύσε τα με εξατομικευμένο λογισμικό που καλύπτεται από την Εγγύηση Απόσβεσης.',
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
    title: 'Δωρεάν έλεγχος διαδικασιών | Fiji Solutions',
    description: 'Βρες από πού φεύγουν τα χρήματα στις διαδικασίες σου και κλείσε τη διαρροή, με Εγγύηση Απόσβεσης.',
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
