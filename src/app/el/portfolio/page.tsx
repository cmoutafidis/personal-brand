import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Services from '../../../components/Services';
import Technologies from '../../../components/Technologies';
import Industries from '../../../components/Industries';
import Projects from '../../../components/Projects';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Η Δουλειά μας & Έργα | Fiji Solutions | Ανάπτυξη Λογισμικού στη Θεσσαλονίκη',
  description: 'Δείτε το portfolio της Fiji Solutions με επιτυχημένα έργα ανάπτυξης λογισμικού στη Θεσσαλονίκη, Ελλάδα. Προσαρμοσμένες εφαρμογές λογισμικού, λύσεις AI, mobile εφαρμογές, web ανάπτυξη και εταιρική συμβουλευτική για πελάτες σε διάφορους κλάδους.',
  keywords: 'Fiji Solutions portfolio, Fiji Solutions έργα, portfolio ανάπτυξης λογισμικού Θεσσαλονίκη, έργα προσαρμοσμένου λογισμικού Ελλάδα, portfolio λύσεων AI, έργα mobile εφαρμογών, web ανάπτυξη Θεσσαλονίκη, εταιρικά έργα λογισμικού, blockchain ανάπτυξη portfolio, IT συμβουλευτική case studies',
  alternates: {
    canonical: 'https://www.fijisolutions.net/el/portfolio',
  },
  openGraph: {
    url: 'https://www.fijisolutions.net/el/portfolio',
    title: 'Η Δουλειά μας & Έργα | Fiji Solutions | Ανάπτυξη Λογισμικού στη Θεσσαλονίκη',
    description: 'Δείτε το portfolio μας με επιτυχημένα έργα ανάπτυξης λογισμικού, λύσεις AI και IT συμβουλευτική από τη Θεσσαλονίκη.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions Portfolio - Έργα Ανάπτυξης Λογισμικού από τη Θεσσαλονίκη',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Η Δουλειά μας & Έργα | Fiji Solutions | Ανάπτυξη Λογισμικού στη Θεσσαλονίκη',
    description: 'Δείτε το portfolio μας με επιτυχημένα έργα ανάπτυξης λογισμικού, λύσεις AI και IT συμβουλευτική από τη Θεσσαλονίκη.',
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