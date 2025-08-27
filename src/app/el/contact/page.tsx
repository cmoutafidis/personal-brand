import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Contact from '../../../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Επικοινωνία με τη Fiji Solutions | Εταιρεία Λογισμικού στη Θεσσαλονίκη | Δωρεάν Συνομιλία',
  description: 'Επικοινωνήστε με τη Fiji Solutions, την κορυφαία εταιρεία λογισμικού στη Θεσσαλονίκη, Ελλάδα. Λάβετε δωρεάν συνομιλία για ανάπτυξη προσαρμοσμένου λογισμικού, λύσεις AI, mobile εφαρμογές, web ανάπτυξη και IT συμβουλευτική. Βρισκόμαστε στη Μαρίνου Αντύπα 40, Θεσσαλονίκη.',
  keywords: 'επικοινωνία Fiji Solutions, Fiji Solutions Θεσσαλονίκη επικοινωνία, εταιρεία λογισμικού επικοινωνία Ελλάδα, δωρεάν συνομιλία Θεσσαλονίκη, ανάπτυξη λογισμικού συνομιλία, IT συμβουλευτική Θεσσαλονίκη, Μαρίνου Αντύπα 40 Θεσσαλονίκη, προσφορά ανάπτυξης λογισμικού',
  alternates: {
    canonical: 'https://www.fijisolutions.net/el/contact',
  },
  openGraph: {
    url: 'https://www.fijisolutions.net/el/contact',
    title: 'Επικοινωνία με τη Fiji Solutions | Εταιρεία Λογισμικού στη Θεσσαλονίκη',
    description: 'Επικοινωνήστε με την κορυφαία εταιρεία λογισμικού στη Θεσσαλονίκη για δωρεάν συνομιλία σχετικά με ανάπτυξη λογισμικού και IT συμβουλευτική.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Επικοινωνία Fiji Solutions - Εταιρεία Λογισμικού στη Θεσσαλονίκη',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Επικοινωνία με τη Fiji Solutions | Εταιρεία Λογισμικού στη Θεσσαλονίκη',
    description: 'Επικοινωνήστε με την κορυφαία εταιρεία λογισμικού στη Θεσσαλονίκη για δωρεάν συνομιλία σχετικά με ανάπτυξη λογισμικού και IT συμβουλευτική.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function GreekContactPage() {
  const language = 'el';
  const t = createTranslationFunction(language);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Contact t={t}/>
      <Footer t={t}/>
    </div>
  );
}