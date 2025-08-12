import type { Metadata } from 'next';
import Hero from '../../components/Hero';
import Challenges from '../../components/Challenges';
import Solutions from '../../components/Solutions';
import Contact from '../../components/Contact';

export const metadata: Metadata = {
  title: 'Fiji Solutions | Βοηθάμε την επιχείρησή σου να μεγαλώσει online',
  description: 'Η Fiji Solutions είναι εταιρεία λογισμικού στη Θεσσαλονίκη που φτιάχνει λογισμικό και σου δίνει συμβουλές για την επιχείρησή σου.',
  alternates: {
    canonical: 'https://fijisolutions.net/el',
  },
  openGraph: {
    url: 'https://fijisolutions.net/el',
    title: 'Fiji Solutions | Βοηθάμε την επιχείρησή σου να μεγαλώσει online',
    description: 'Η Fiji Solutions είναι εταιρεία λογισμικού στη Θεσσαλονίκη που φτιάχνει λογισμικό και σου δίνει συμβουλές για την επιχείρησή σου.',
    images: [
      {
        url: 'https://fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions',
      },
    ],
  },
  twitter: {
    title: 'Fiji Solutions | Βοηθάμε την επιχείρησή σου να μεγαλώσει online',
    description: 'Η Fiji Solutions είναι εταιρεία λογισμικού στη Θεσσαλονίκη που φτιάχνει λογισμικό και σου δίνει συμβουλές για την επιχείρησή σου.',
  },
};

export default function GreekHomePage() {
  return (
    <>
      <Hero />
      <Challenges />
      <Solutions />
      <Contact />
    </>
  );
}