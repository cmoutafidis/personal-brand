import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Services from '../../../components/Services';
import Technologies from '../../../components/Technologies';
import Industries from '../../../components/Industries';
import Projects from '../../../components/Projects';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Portfolio Εταιρεία Λογισμικού Θεσσαλονίκη | Έργα Ανάπτυξης',
  description: 'Δείτε το portfolio της Fiji Solutions, εταιρεία λογισμικού στη Θεσσαλονίκη: custom software, κατασκευή ιστοσελίδων, ανάπτυξη εφαρμογών από κορυφαία εταιρεία λογισμικού.',
  keywords: 'εταιρεία λογισμικού portfolio, εταιρεία λογισμικού Θεσσαλονίκη portfolio, εταιρεία ανάπτυξης λογισμικού Θεσσαλονίκη, custom software Ελλάδα, εταιρεία κατασκευής ιστοσελίδων Θεσσαλονίκη, mobile apps Ελλάδα, εταιρείες λογισμικού Θεσσαλονίκη, εγκατάσταση ERP Θεσσαλονίκη, custom CRM λύσεις Ελλάδα, προγραμματιστές λογισμικού Ελλάδα',
  alternates: {
    canonical: 'https://www.fijisolutions.net/el/portfolio',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/el/portfolio',
    title: 'Η Δουλειά μας & Έργα',
    description: 'Δείτε το portfolio της Fiji Solutions: καινοτόμες λύσεις web development, AI, cloud υπηρεσίες & Snowflake AI Data Cloud data engineering από την ομάδα μας στη Θεσσαλονίκη.',
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
    title: 'Η Δουλειά μας & Έργα',
    description: 'Δείτε το portfolio της Fiji Solutions: καινοτόμες λύσεις web development, AI, cloud υπηρεσίες & Snowflake AI Data Cloud data engineering από την ομάδα μας στη Θεσσαλονίκη.',
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