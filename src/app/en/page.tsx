import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Hero from '../../components/Hero';
import Challenges from '../../components/Challenges';
import Solutions from '../../components/Solutions';
import Contact from '../../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Custom Software Development Company Thessaloniki',
  description: 'Premier custom software development company in Thessaloniki, Greece. Web development, mobile app development, IT consulting & managed IT services.',
  keywords: 'custom software development company Thessaloniki, software development services Greece, web development company Thessaloniki, mobile app development Greece, IT consulting Thessaloniki, managed IT services Greece, software company Thessaloniki, top software companies in Thessaloniki, software developers Greece, custom software, ERP software, CRM software',
  alternates: {
    canonical: 'https://www.fijisolutions.net/en',
  },
  openGraph: {
    type: 'website',
    title: 'Software Company Thessaloniki Greece',
    description: 'Fiji Solutions: Snowflake AI Data Cloud partner for data engineering & custom software development in Thessaloniki. Web development, AI solutions, cloud services & advanced analytics.',
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
    title: 'Software Company Thessaloniki Greece',
    description: 'Fiji Solutions: Snowflake AI Data Cloud partner for data engineering & custom software development in Thessaloniki. Web development, AI solutions, cloud services & advanced analytics.',
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