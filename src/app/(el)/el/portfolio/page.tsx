import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';
import Services from '@/components/Services';
import PortfolioProjectsLink from '@/components/PortfolioProjectsLink';
import PortfolioOfferLink from '@/components/PortfolioOfferLink';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  // 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G07, PLAN.md §4.2, BR-D7): the title is his pick of
  // 2026-10-22, since this page holds Bing #1 for «εταιρεία λογισμικού Θεσσαλονίκη». The six categories,
  // copy from offer-os companies/fiji-solutions/site/03-copy-home.md, "Portfolio". The og and twitter titles
  // are unchanged.
  title: 'Υπηρεσίες | Εταιρεία λογισμικού Θεσσαλονίκη | Fiji Solutions',
  description: 'Τι φτιάχνει η Fiji Solutions: λογισμικό κατά παραγγελία, διαδικτυακές εφαρμογές και εφαρμογές για κινητά, αυτοματοποίηση διαδικασιών, AI agents, ιστοσελίδες και πλατφόρμες δεδομένων στη Snowflake.',
  keywords: 'λογισμικό κατά παραγγελία, εταιρεία λογισμικού Θεσσαλονίκη, εφαρμογές για κινητά, αυτοματοποίηση διαδικασιών, AI agents, κατασκευή ιστοσελίδων, Snowflake',
  alternates: buildAlternates('/portfolio', 'el'),
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/el/portfolio',
    title: 'Υπηρεσίες | Fiji Solutions',
    description: 'Τι φτιάχνει η Fiji Solutions: λογισμικό κατά παραγγελία, διαδικτυακές εφαρμογές και εφαρμογές για κινητά, αυτοματοποίηση διαδικασιών, AI agents, ιστοσελίδες και πλατφόρμες δεδομένων στη Snowflake.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions Portfolio: Καινοτόμα έργα ανάπτυξης λογισμικού από τη Θεσσαλονίκη που ειδικεύεται σε web development, λύσεις AI και Snowflake AI Data Cloud data engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Υπηρεσίες | Fiji Solutions',
    description: 'Τι φτιάχνει η Fiji Solutions: λογισμικό κατά παραγγελία, διαδικτυακές εφαρμογές και εφαρμογές για κινητά, αυτοματοποίηση διαδικασιών, AI agents, ιστοσελίδες και πλατφόρμες δεδομένων στη Snowflake.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function GreekPortfolioPage() {
  const language = 'el';
  const t = createTranslationFunction(language);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Services t={t} lang="el"/>
      <PortfolioOfferLink lang="el"/>
      <PortfolioProjectsLink lang="el"/>
      <Footer t={t}/>
    </div>
  );
}
