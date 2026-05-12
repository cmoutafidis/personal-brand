import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Services from '../../../components/Services';
import Technologies from '../../../components/Technologies';
import Industries from '../../../components/Industries';
import Projects from '../../../components/Projects';
import Contact from '../../../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Services - Custom Software, Data Analysis & Snowflake Greece',
  description: 'Fiji Solutions services for Greek businesses: custom software development, data analysis, BI dashboards, Snowflake consulting, AI automation, and systems integration.',
  keywords: 'custom software services Greece, data analysis services Greece, Snowflake consulting Greece, business intelligence Greece, software company Thessaloniki, data engineering Greece',
  alternates: {
    canonical: 'https://www.fijisolutions.net/en/portfolio',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/en/portfolio',
    title: 'Services - Fiji Solutions',
    description: 'Custom software, data analysis, BI dashboards, Snowflake consulting, and data engineering services in Greece.',
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
    description: 'Custom software, data analysis, BI dashboards, Snowflake consulting, and data engineering services in Greece.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function EnglishPortfolioPage() {
  const language = 'en';
  const t = createTranslationFunction(language);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <Services t={t}/>
      <Technologies t={t}/>
      <Industries t={t}/>
      <Projects t={t}/>
      <Contact t={t} element={"h2"}/>
      <Footer t={t} minimal/>
    </div>
  );
}
