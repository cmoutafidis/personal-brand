import type { Metadata } from 'next';
import Contact from '../../../components/Contact';

export const metadata: Metadata = {
  title: 'Επικοινωνία | Fiji Solutions',
  description: 'Επικοινώνησε με τη Fiji Solutions για δωρεάν συνομιλία. Βοηθάμε επιχειρήσεις να μεγαλώσουν online με ανάπτυξη λογισμικού και IT συμβουλευτική.',
  alternates: {
    canonical: 'https://fijisolutions.net/el/contact',
  },
  openGraph: {
    url: 'https://fijisolutions.net/el/contact',
    title: 'Επικοινωνία | Fiji Solutions',
    description: 'Επικοινώνησε με τη Fiji Solutions για δωρεάν συνομιλία. Βοηθάμε επιχειρήσεις να μεγαλώσουν online με ανάπτυξη λογισμικού και IT συμβουλευτική.',
    images: [
      {
        url: 'https://fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions',
      },
    ],
  },
};

export default function GreekContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Contact />
    </div>
  );
}