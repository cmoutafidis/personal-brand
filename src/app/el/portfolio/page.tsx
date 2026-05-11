import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Services from '../../../components/Services';
import Technologies from '../../../components/Technologies';
import Industries from '../../../components/Industries';
import Projects from '../../../components/Projects';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Υπηρεσίες - Λογισμικό, Ανάλυση Δεδομένων & Snowflake Ελλάδα',
  description: 'Υπηρεσίες Fiji Solutions για ελληνικές επιχειρήσεις: εξατομικευμένο λογισμικό, ανάλυση δεδομένων, BI dashboards, Snowflake consulting, AI αυτοματοποίηση και integrations.',
  keywords: 'υπηρεσίες λογισμικού Ελλάδα, ανάλυση δεδομένων Ελλάδα, Snowflake consulting Ελλάδα, business intelligence Ελλάδα, εταιρεία λογισμικού Θεσσαλονίκη, data engineering Ελλάδα',
  alternates: {
    canonical: 'https://www.fijisolutions.net/el/portfolio',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/el/portfolio',
    title: 'Υπηρεσίες - Fiji Solutions',
    description: 'Εξατομικευμένο λογισμικό, ανάλυση δεδομένων, BI dashboards, Snowflake consulting και data engineering στην Ελλάδα.',
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
    description: 'Εξατομικευμένο λογισμικό, ανάλυση δεδομένων, BI dashboards, Snowflake consulting και data engineering στην Ελλάδα.',
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
