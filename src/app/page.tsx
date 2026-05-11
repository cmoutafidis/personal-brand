import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Hero from '../components/Hero';
import Challenges from '../components/Challenges';
import Solutions from '../components/Solutions';
import Contact from '../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Custom Software, Data Analysis & Snowflake Consulting Greece | Fiji Solutions',
  description: 'Fiji Solutions builds custom software and data analysis solutions in Greece, including Snowflake AI Data Cloud consulting, BI dashboards, and business applications.',
  keywords: 'custom software development Greece, data analysis services Greece, Snowflake consulting Greece, software company Thessaloniki, business intelligence Greece, data engineering Greece, custom software solutions Greece',
  alternates: {
    canonical: 'https://www.fijisolutions.net/en',
  },
  openGraph: {
    type: 'website',
    title: 'Custom Software, Data Analysis & Snowflake Consulting Greece | Fiji Solutions',
    description: 'Custom software development, data analysis, BI dashboards, and Snowflake AI Data Cloud consulting for businesses in Greece.',
    url: 'https://www.fijisolutions.net/en',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions - Software Company in Thessaloniki, Greece specializing in IT consulting and custom software development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Custom Software, Data Analysis & Snowflake Consulting Greece | Fiji Solutions',
    description: 'Custom software development, data analysis, BI dashboards, and Snowflake AI Data Cloud consulting for businesses in Greece.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function HomePage() {
  const language = 'en';
  const t = createTranslationFunction(language);

  return (
    <>
      <Hero t={t}/>
      <Challenges t={t}/>
      <Solutions t={t}/>
      <Contact t={t} element={"h2"}/>
      <Footer t={t}/>
    </>
  );
}
