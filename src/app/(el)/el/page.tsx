import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';
import Hero from '@/components/Hero';
import Challenges from '@/components/Challenges';
import Solutions from '@/components/Solutions';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Μία διαδικασία αυτοματοποιημένη σε 30 μέρες | Fiji Solutions',
  description: 'Χαρτογραφούμε πώς δουλεύει πραγματικά η επιχείρησή σου, βάζουμε νούμερο σε ευρώ στα τρία σημεία που σου κοστίζουν περισσότερο και αυτοματοποιούμε το πρώτο μέσα σε 30 μέρες.',
  keywords: 'λογισμικό επιχειρήσεων Ελλάδα, αυτοματοποίηση διαδικασιών Ελλάδα, εξατομικευμένο λογισμικό Ελλάδα, εταιρεία λογισμικού Θεσσαλονίκη, ανάλυση δεδομένων Ελλάδα, Snowflake consulting Ελλάδα, business intelligence Ελλάδα, custom software Ελλάδα',
  alternates: buildAlternates('', 'el'),
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/el',
    title: 'Μία διαδικασία αυτοματοποιημένη σε 30 μέρες | Fiji Solutions',
    description: 'Γραπτός χάρτης με τα τρία σημεία που σου κοστίζουν χρήματα, και το πρώτο αυτοματοποιημένο σε 30 μέρες.',
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
    title: 'Μία διαδικασία αυτοματοποιημένη σε 30 μέρες | Fiji Solutions',
    description: 'Γραπτός χάρτης με τα τρία σημεία που σου κοστίζουν χρήματα, και το πρώτο αυτοματοποιημένο σε 30 μέρες.',
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
      <Footer t={t}/>
    </>
  );
}
