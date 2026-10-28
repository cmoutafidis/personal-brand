import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';
import Services from '@/components/Services';
import PortfolioProjectsLink from '@/components/PortfolioProjectsLink';
import PortfolioOfferLink from '@/components/PortfolioOfferLink';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  // 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G07, PLAN.md §4.2): the six categories, copy from offer-os
  // companies/fiji-solutions/site/03-copy-home.md, "Portfolio". The og and twitter titles are unchanged.
  title: 'Services: Custom Software, Apps, AI and Snowflake | Fiji',
  description: 'What Fiji Solutions builds: custom software, web and mobile apps, process automation, AI agents, websites, and data platforms on Snowflake.',
  keywords: 'custom software Greece, web and mobile apps, process automation, AI agents, website development, Snowflake consulting Greece',
  alternates: buildAlternates('/portfolio'),
  openGraph: {
    locale: 'en_US',
    type: 'website',
    url: 'https://www.fijisolutions.net/en/portfolio',
    title: 'Services | Fiji Solutions',
    description: 'What Fiji Solutions builds: custom software, web and mobile apps, process automation, AI agents, websites, and data platforms on Snowflake.',
    images: [
      {
        url: 'https://www.fijisolutions.net/og/fiji-solutions-en.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions Portfolio: Innovative software development projects from Thessaloniki specializing in web development, AI solutions, and Snowflake AI Data Cloud data engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Services | Fiji Solutions',
    description: 'What Fiji Solutions builds: custom software, web and mobile apps, process automation, AI agents, websites, and data platforms on Snowflake.',
    images: ['https://www.fijisolutions.net/og/fiji-solutions-en.png'],
  },
};

export default function EnglishPortfolioPage() {
  const language = 'en';
  const t = createTranslationFunction(language);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Services t={t} lang="en"/>
      <PortfolioOfferLink lang="en"/>
      <PortfolioProjectsLink lang="en"/>
      <Footer t={t}/>
    </div>
  );
}
