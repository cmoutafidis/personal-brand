import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Services from '../../../components/Services';
import Technologies from '../../../components/Technologies';
import Industries from '../../../components/Industries';
import Projects from '../../../components/Projects';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Η Δουλειά μας & Έργα | Fiji Solutions | Τα Έργα μας στη Θεσσαλονίκη',
  description: 'Δείτε το portfolio της Fiji Solutions που παρουσιάζει τις καινοτόμες λύσεις web development, AI, cloud υπηρεσίες, mobile εφαρμογές και blockchain τεχνολογία. Δείτε πώς η ομάδα μας στη Θεσσαλονίκη παραδίδει προσαρμοσμένες, επεκτάσιμες λύσεις.',
  keywords: 'Fiji Solutions portfolio, Fiji Solutions έργα, εταιρεία λογισμικού Θεσσαλονίκη portfolio, web development έργα, λύσεις AI portfolio, cloud υπηρεσίες έργα, mobile εφαρμογές, blockchain τεχνολογία έργα, ανάπτυξη λογισμικού, IT συμβουλευτική Θεσσαλονίκη, επεκτάσιμες λύσεις, προσαρμοσμένες λύσεις',
  alternates: {
    canonical: 'https://www.fijisolutions.net/el/portfolio',
  },
  openGraph: {
    url: 'https://www.fijisolutions.net/el/portfolio',
    title: 'Η Δουλειά μας & Έργα | Fiji Solutions | Τα Έργα μας στη Θεσσαλονίκη',
    description: 'Δείτε το portfolio της Fiji Solutions που παρουσιάζει τις καινοτόμες λύσεις web development, AI, cloud υπηρεσίες, mobile εφαρμογές και blockchain τεχνολογία από την ομάδα μας στη Θεσσαλονίκη.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions Portfolio - Καινοτόμα έργα ανάπτυξης λογισμικού από τη Θεσσαλονίκη που ειδικεύεται σε web development, λύσεις AI και blockchain τεχνολογία',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Η Δουλειά μας & Έργα | Fiji Solutions | Τα Έργα μας στη Θεσσαλονίκη',
    description: 'Δείτε το portfolio της Fiji Solutions που παρουσιάζει τις καινοτόμες λύσεις web development, AI, cloud υπηρεσίες, mobile εφαρμογές και blockchain τεχνολογία από την ομάδα μας στη Θεσσαλονίκη.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function GreekPortfolioPage() {
  const language = 'el';
  const t = createTranslationFunction(language);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Services t={t}/>
      <Technologies t={t}/>
      <Industries t={t}/>
      <Projects t={t}/>
      <Footer t={t}/>
    </div>
  );
}