import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Hero from '../../components/Hero';
import Challenges from '../../components/Challenges';
import Solutions from '../../components/Solutions';
import Contact from '../../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Fiji Solutions | Βοηθάμε την επιχείρησή σου να μεγαλώσει online',
  description: 'Η Fiji Solutions είναι εταιρεία λογισμικού στη Θεσσαλονίκη που φτιάχνει λογισμικό και σου δίνει συμβουλές για την επιχείρησή σου.',
  alternates: {
    canonical: 'https://www.fijisolutions.net/el',
  },
  openGraph: {
    url: 'https://www.fijisolutions.net/el',
    title: 'Fiji Solutions | Βοηθάμε την επιχείρησή σου να μεγαλώσει online',
    description: 'Η Fiji Solutions είναι εταιρεία λογισμικού στη Θεσσαλονίκη που φτιάχνει λογισμικό και σου δίνει συμβουλές για την επιχείρησή σου.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Fiji Solutions | Βοηθάμε την επιχείρησή σου να μεγαλώσει online',
    description: 'Η Fiji Solutions είναι εταιρεία λογισμικού στη Θεσσαλονίκη που φτιάχνει λογισμικό και σου δίνει συμβουλές για την επιχείρησή σου.',
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
      <Footer t={t} language={language}/>
    </>
  );
}