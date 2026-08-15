import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import LegalContent from './LegalContent';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Νομικές Πληροφορίες Εταιρεία Λογισμικού Θεσσαλονίκη | Fiji Solutions',
  description: 'Επίσημες νομικές πληροφορίες εταιρεία λογισμικού Θεσσαλονίκη Fiji Solutions. Αριθμός ΓΕΜΗ, εταιρικά στοιχεία & πληροφορίες εγγραφής IT συμβουλευτικής.',
  keywords: 'εταιρεία λογισμικού, εταιρεία λογισμικού Θεσσαλονίκη, Fiji Solutions νομικά, Fiji Solutions εγγραφή εταιρείας, εταιρεία λογισμικού Θεσσαλονίκη νομικά, ΓΕΜΗ εγγραφή Ελλάδα, επιχειρηματική εγγραφή Θεσσαλονίκη, νομικές πληροφορίες εταιρεία λογισμικού, εταιρικά στοιχεία Fiji Solutions, IT συμβουλευτική νομικά στοιχεία, ανάπτυξη λογισμικού νομικά',
  alternates: {
    canonical: 'https://www.fijisolutions.net/el/legal',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/el/legal',
    title: 'Νομικές Πληροφορίες',
    description: 'Επίσημες νομικές πληροφορίες & στοιχεία εγγραφής εταιρείας για τη Fiji Solutions. Αριθμός ΓΕΜΗ, εταιρικά στοιχεία & πληροφορίες εγγραφής.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Νομικές Πληροφορίες Fiji Solutions - Εταιρεία Λογισμικού στη Θεσσαλονίκη που ειδικεύεται στην IT συμβουλευτική και ανάπτυξη λογισμικού',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Νομικές Πληροφορίες',
    description: 'Επίσημες νομικές πληροφορίες & στοιχεία εγγραφής εταιρείας για τη Fiji Solutions. Αριθμός ΓΕΜΗ, εταιρικά στοιχεία & πληροφορίες εγγραφής.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function GreekLegalPage() {
  const language = 'el';
  const t = createTranslationFunction(language);

  return (
    <>
      <LegalContent t={t}/>
      <Footer t={t}/>
    </>
  );
}