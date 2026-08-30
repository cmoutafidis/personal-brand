import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Υπηρεσίες - Λογισμικό, Ανάλυση Δεδομένων & Snowflake Ελλάδα',
  description: 'Τι φτιάχνουμε μόλις ετοιμαστεί το πλάνο: αυτοματοποίηση διαδικασιών και εσωτερικά εργαλεία, αναφορές και ανάλυση δεδομένων, πλατφόρμα δεδομένων Snowflake.',
  keywords: 'υπηρεσίες λογισμικού Ελλάδα, ανάλυση δεδομένων Ελλάδα, Snowflake consulting Ελλάδα, business intelligence Ελλάδα, εταιρεία λογισμικού Θεσσαλονίκη, data engineering Ελλάδα',
  alternates: buildAlternates('/portfolio', 'el'),
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/el/portfolio',
    title: 'Υπηρεσίες - Fiji Solutions',
    description: 'Αυτοματοποίηση διαδικασιών, αναφορές και ανάλυση δεδομένων, πλατφόρμα Snowflake.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions Portfolio - Καινοτόμα έργα ανάπτυξης λογισμικού από τη Θεσσαλονίκη που ειδικεύεται σε web development, λύσεις AI και Snowflake AI Data Cloud data engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Υπηρεσίες - Fiji Solutions',
    description: 'Αυτοματοποίηση διαδικασιών, αναφορές και ανάλυση δεδομένων, πλατφόρμα Snowflake.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function GreekPortfolioPage() {
  const language = 'el';
  const t = createTranslationFunction(language);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Services t={t} lang="el"/>
      <Projects t={t}/>
      <Footer t={t}/>
    </div>
  );
}
