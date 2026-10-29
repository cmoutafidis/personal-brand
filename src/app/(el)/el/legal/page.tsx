import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';
import LegalContent from './LegalContent';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Νομικές πληροφορίες | Fiji Solutions',
  description: 'Τα νομικά στοιχεία της Fiji Solutions: επωνυμία, διεύθυνση έδρας, αριθμός ΓΕΜΗ, εταιρικό κεφάλαιο, εταίρος και διαχειριστής.',
  keywords: 'εταιρεία λογισμικού, εταιρεία λογισμικού Θεσσαλονίκη, Fiji Solutions νομικά, Fiji Solutions εγγραφή εταιρείας, εταιρεία λογισμικού Θεσσαλονίκη νομικά, ΓΕΜΗ εγγραφή Ελλάδα, επιχειρηματική εγγραφή Θεσσαλονίκη, νομικές πληροφορίες εταιρεία λογισμικού, εταιρικά στοιχεία Fiji Solutions, IT συμβουλευτική νομικά στοιχεία, ανάπτυξη λογισμικού νομικά',
  alternates: buildAlternates('/legal', 'el'),
  openGraph: {
    locale: 'el_GR',
    type: 'website',
    url: 'https://www.fijisolutions.net/el/legal',
    title: 'Νομικές πληροφορίες',
    description: 'Τα νομικά στοιχεία της Fiji Solutions: επωνυμία, διεύθυνση έδρας, αριθμός ΓΕΜΗ, εταιρικό κεφάλαιο, εταίρος και διαχειριστής.',
    images: [
      {
        url: 'https://www.fijisolutions.net/og/fiji-solutions-el.png',
        width: 1200,
        height: 630,
        alt: 'Νομικές Πληροφορίες Fiji Solutions: Εταιρεία Λογισμικού στη Θεσσαλονίκη που ειδικεύεται στην IT συμβουλευτική και ανάπτυξη λογισμικού',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Νομικές πληροφορίες',
    description: 'Τα νομικά στοιχεία της Fiji Solutions: επωνυμία, διεύθυνση έδρας, αριθμός ΓΕΜΗ, εταιρικό κεφάλαιο, εταίρος και διαχειριστής.',
    images: ['https://www.fijisolutions.net/og/fiji-solutions-el.png'],
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