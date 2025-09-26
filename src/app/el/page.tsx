import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Hero from '../../components/Hero';
import Challenges from '../../components/Challenges';
import Solutions from '../../components/Solutions';
import Contact from '../../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Fiji Solutions | Κορυφαία Εταιρεία Λογισμικού Θεσσαλονίκη',
  description: 'Κορυφαία εταιρεία ανάπτυξης λογισμικού στη Θεσσαλονίκη. Custom software, κατασκευή ιστοσελίδων, ανάπτυξη εφαρμογών & υποστήριξη IT.',
  keywords: 'εταιρείες λογισμικού Θεσσαλονίκη, κορυφαίες εταιρείες λογισμικού Θεσσαλονίκη, εταιρεία ανάπτυξης λογισμικού Θεσσαλονίκη, custom software Ελλάδα, εταιρεία κατασκευής ιστοσελίδων Θεσσαλονίκη, mobile apps Ελλάδα, εταιρία πληροφορικής Θεσσαλονίκη, διαχείριση IT συστημάτων Ελλάδα, προγραμματιστές λογισμικού Ελλάδα, ανάπτυξη λογισμικού, λογισμικό επιχειρήσεων',
  alternates: {
    canonical: 'https://www.fijisolutions.net/el',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/el',
    title: 'Fiji Solutions | Εταιρεία Λογισμικού Θεσσαλονίκη',
    description: 'Fiji Solutions: IT συμβουλευτική & ανάπτυξη λογισμικού στη Θεσσαλονίκη. Web development, AI λύσεις, cloud υπηρεσίες & blockchain.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions - Εταιρεία Λογισμικού στη Θεσσαλονίκη, Ελλάδα που ειδικεύεται στην IT συμβουλευτική και ανάπτυξη λογισμικού',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Fiji Solutions | Εταιρεία Λογισμικού Θεσσαλονίκη',
    description: 'Fiji Solutions: IT συμβουλευτική & ανάπτυξη λογισμικού στη Θεσσαλονίκη. Web development, AI λύσεις, cloud υπηρεσίες & blockchain.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function GreekHomePage() {
  const language = 'el';
  const t = createTranslationFunction(language);

  return (
    <>
      <Hero t={t}/>
      <Challenges t={t}/>
      <Solutions t={t}/>
      <Contact t={t} element={"h2"}/>
      <Footer t={t}/>
    </>
  );
}