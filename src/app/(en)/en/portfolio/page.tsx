import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Services - Custom Software, Data Analysis & Snowflake Greece',
  description: 'What we build once the map is done: process automation and internal tools, reporting and data analysis, and the Snowflake data platform.',
  keywords: 'custom software services Greece, data analysis services Greece, Snowflake consulting Greece, business intelligence Greece, software company Thessaloniki, data engineering Greece',
  alternates: buildAlternates('/portfolio'),
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/en/portfolio',
    title: 'Services - Fiji Solutions',
    description: 'Process automation and internal tools, reporting and data analysis, and the Snowflake data platform.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions Portfolio - Innovative software development projects from Thessaloniki specializing in web development, AI solutions, and Snowflake AI Data Cloud data engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Services - Fiji Solutions',
    description: 'Process automation and internal tools, reporting and data analysis, and the Snowflake data platform.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function EnglishPortfolioPage() {
  const language = 'en';
  const t = createTranslationFunction(language);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Services t={t} lang="en"/>
      <Projects t={t}/>
      <Footer t={t}/>
    </div>
  );
}
