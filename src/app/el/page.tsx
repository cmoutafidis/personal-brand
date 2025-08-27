import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Hero from '../../components/Hero';
import Challenges from '../../components/Challenges';
import Solutions from '../../components/Solutions';
import Contact from '../../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Fiji Solutions | Εταιρεία Λογισμικού στη Θεσσαλονίκη | Ανάπτυξη Λογισμικού & IT Συμβουλευτική',
  description: 'Η Fiji Solutions είναι κορυφαία εταιρεία λογισμικού στη Θεσσαλονίκη, Ελλάδα. Ειδικευόμαστε στην ανάπτυξη προσαρμοσμένου λογισμικού, λύσεις AI, mobile εφαρμογές, web ανάπτυξη και IT συμβουλευτική για επιχειρήσεις σε όλη την Ελλάδα.',
  keywords: 'Fiji Solutions, Fiji Solutions Θεσσαλονίκη, Fiji Solutions Ελλάδα, εταιρεία λογισμικού Θεσσαλονίκη, IT συμβουλευτική Ελλάδα, ανάπτυξη λογισμικού, mobile εφαρμογές Θεσσαλονίκη, web ανάπτυξη Ελλάδα, λύσεις AI, εταιρικό λογισμικό, blockchain ανάπτυξη, ενσωμάτωση πληρωμών, ψηφιακός μετασχηματισμός Ελλάδα',
  alternates: {
    canonical: 'https://www.fijisolutions.net/el',
  },
  openGraph: {
    url: 'https://www.fijisolutions.net/el',
    title: 'Fiji Solutions | Εταιρεία Λογισμικού στη Θεσσαλονίκη, Ελλάδα',
    description: 'Κορυφαία εταιρεία λογισμικού στη Θεσσαλονίκη που ειδικεύεται στην ανάπτυξη προσαρμοσμένου λογισμικού, λύσεις AI και IT συμβουλευτική.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions - Εταιρεία Λογισμικού στη Θεσσαλονίκη, Ελλάδα',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Fiji Solutions | Εταιρεία Λογισμικού στη Θεσσαλονίκη, Ελλάδα',
    description: 'Κορυφαία εταιρεία λογισμικού στη Θεσσαλονίκη που ειδικεύεται στην ανάπτυξη προσαρμοσμένου λογισμικού, λύσεις AI και IT συμβουλευτική.',
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
      <Contact t={t}/>
      <Footer t={t}/>
    </>
  );
}