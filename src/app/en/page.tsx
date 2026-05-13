import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Hero from '../../components/Hero';
import Challenges from '../../components/Challenges';
import Solutions from '../../components/Solutions';
import Contact from '../../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Operational Software, Automation & Snowflake Greece | Fiji Solutions',
  description: 'We help businesses in Greece find slow manual processes and build custom software, automations, reporting tools, data analysis workflows, and Snowflake data systems.',
  keywords: 'operational software Greece, business process automation Greece, custom software development Greece, workflow automation Greece, data analysis services Greece, Snowflake consulting Greece, software company Thessaloniki, business intelligence Greece',
  alternates: {
    canonical: 'https://www.fijisolutions.net/en',
  },
  openGraph: {
    type: 'website',
    title: 'Operational Software, Automation & Snowflake Greece | Fiji Solutions',
    description: 'Custom software, automations, reporting tools, and Snowflake data systems that remove operational bottlenecks for businesses in Greece.',
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
    title: 'Operational Software, Automation & Snowflake Greece | Fiji Solutions',
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
      <Contact t={t} element={"h2"}/>
      <Footer t={t}/>
    </>
  );
}
