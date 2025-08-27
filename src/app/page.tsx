import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Hero from '../components/Hero';
import Challenges from '../components/Challenges';
import Solutions from '../components/Solutions';
import Contact from '../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Fiji Solutions | Software Company in Thessaloniki, Greece | Custom Development & IT Consulting',
  description: 'Fiji Solutions is a leading software company in Thessaloniki, Greece. We specialize in custom software development, AI solutions, mobile apps, web applications, and IT consulting services for businesses across Greece.',
  keywords: 'Fiji Solutions, software company Thessaloniki, IT consulting Greece, custom software development, mobile app development, web development Thessaloniki, AI solutions Greece, software development company, IT services Thessaloniki, enterprise software Greece, blockchain development, payment integration, digital transformation Greece',
  alternates: {
    canonical: 'https://www.fijisolutions.net/',
  },
  openGraph: {
    title: 'Fiji Solutions | Software Company in Thessaloniki, Greece',
    description: 'Leading software company in Thessaloniki specializing in custom development, AI solutions, and IT consulting for Greek businesses.',
    url: 'https://www.fijisolutions.net/',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions - Software Company in Thessaloniki, Greece',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Fiji Solutions | Software Company in Thessaloniki, Greece',
    description: 'Leading software company in Thessaloniki specializing in custom development, AI solutions, and IT consulting for Greek businesses.',
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
      <Contact t={t}/>
      <Footer t={t}/>
    </>
  );
}