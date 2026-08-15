import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';
import Contact from '@/components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Επικοινωνία | Δωρεάν έλεγχος διαδικασιών, Θεσσαλονίκη',
  description: 'Πες μας ποια διαδικασία σου κοστίζει περισσότερο. Απαντάμε μέσα σε μία εργάσιμη ημέρα με ένα πρακτικό πρώτο βήμα.',
  keywords: 'εταιρεία λογισμικού, εταιρεία λογισμικού Θεσσαλονίκη, εταιρείες λογισμικού Θεσσαλονίκη επικοινωνία, εταιρεία πληροφορικής Θεσσαλονίκη, εταιρεία ανάπτυξης λογισμικού Θεσσαλονίκη, εταιρεία κατασκευής ιστοσελίδων Θεσσαλονίκη, mobile apps Ελλάδα, διαχείριση IT συστημάτων Ελλάδα, εξατομικευμένο λογισμικό Ελλάδα, εγκατάσταση ERP Θεσσαλονίκη, λύσεις CRM Ελλάδα',
  alternates: buildAlternates('/contact', 'el'),
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/el/contact',
    title: 'Επικοινωνία Fiji Solutions | Θεσσαλονίκη',
    description: 'Πες μας ποια διαδικασία σου κοστίζει περισσότερο. Απαντάμε μέσα σε μία εργάσιμη ημέρα.',
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
    title: 'Επικοινωνία Fiji Solutions | Θεσσαλονίκη',
    description: 'Πες μας ποια διαδικασία σου κοστίζει περισσότερο. Απαντάμε μέσα σε μία εργάσιμη ημέρα.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function GreekContactPage() {
  const language = 'el';
  const t = createTranslationFunction(language);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Contact t={t} element={"h1"}/>
      <Footer t={t}/>
    </div>
  );
}
