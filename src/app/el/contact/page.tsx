import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Contact from '../../../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Επικοινωνία Εταιρεία Λογισμικού Θεσσαλονίκη | Υποστήριξη IT',
  description: 'Επικοινωνήστε με κορυφαία εταιρεία ανάπτυξης λογισμικού Θεσσαλονίκη για custom software, κατασκευή ιστοσελίδων & υποστήριξη IT.',
  keywords: 'εταιρείες λογισμικού Θεσσαλονίκη επικοινωνία, εταιρία πληροφορικής Θεσσαλονίκη, εταιρεία ανάπτυξης λογισμικού Θεσσαλονίκη, εταιρεία κατασκευής ιστοσελίδων Θεσσαλονίκη, mobile apps Ελλάδα, διαχείριση IT συστημάτων Ελλάδα, custom software Ελλάδα, εγκατάσταση ERP Θεσσαλονίκη, custom CRM λύσεις Ελλάδα',
  alternates: {
    canonical: 'https://www.fijisolutions.net/el/contact',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/el/contact',
    title: 'Επικοινωνία Fiji Solutions | Δωρεάν Συνομιλία Θεσσαλονίκη',
    description: 'Επικοινωνήστε με τη Fiji Solutions για δωρεάν συνομιλία. IT συμβουλευτική & ανάπτυξη λογισμικού στη Θεσσαλονίκη. Web development, AI λύσεις.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Επικοινωνία Fiji Solutions - Εταιρεία Λογισμικού στη Θεσσαλονίκη που ειδικεύεται στην IT συμβουλευτική και ανάπτυξη λογισμικού',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Επικοινωνία Fiji Solutions | Δωρεάν Συνομιλία Θεσσαλονίκη',
    description: 'Επικοινωνήστε με τη Fiji Solutions για δωρεάν συνομιλία. IT συμβουλευτική & ανάπτυξη λογισμικού στη Θεσσαλονίκη. Web development, AI λύσεις.',
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