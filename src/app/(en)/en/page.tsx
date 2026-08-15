import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';
import Hero from '@/components/Hero';
import Challenges from '@/components/Challenges';
import Solutions from '@/components/Solutions';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'One process automated in 30 days | Fiji Solutions',
  description: 'We map how your business runs, put a euro figure on the three bottlenecks costing you most, and automate the first one within 30 days of the build starting.',
  keywords: 'operational software Greece, business process automation Greece, custom software development Greece, workflow automation Greece, data analysis services Greece, Snowflake consulting Greece, software company Thessaloniki, business intelligence Greece',
  alternates: buildAlternates(''),
  openGraph: {
    type: 'website',
    title: 'One process automated in 30 days | Fiji Solutions',
    description: 'Custom software, automations, reporting tools, and Snowflake data systems that remove operational bottlenecks for businesses in Greece.',
    url: 'https://www.fijisolutions.net/en',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions, Thessaloniki',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'One process automated in 30 days | Fiji Solutions',
    description: 'Custom software, automations, reporting tools, and Snowflake data systems that remove operational bottlenecks for businesses in Greece.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function EnglishHomePage() {
  const language = 'en';
  const t = createTranslationFunction(language);

  return (
    <>
      <Hero t={t}/>
      <Challenges t={t}/>
      <Solutions t={t}/>
      <Footer t={t}/>
    </>
  );
}
