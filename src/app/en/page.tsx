import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Hero from '../../components/Hero';
import Challenges from '../../components/Challenges';
import Solutions from '../../components/Solutions';
import Contact from '../../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Fiji Solutions | Premier Software Company in Thessaloniki, Greece | Custom Development & IT Consulting',
  description: 'Fiji Solutions is a premier software company based in Thessaloniki, Greece. We deliver cutting-edge custom software development, AI solutions, mobile applications, web development, and comprehensive IT consulting services to businesses throughout Greece and beyond.',
  keywords: 'Fiji Solutions, Fiji Solutions Thessaloniki, Fiji Solutions Greece, software company Thessaloniki, IT consulting Greece, custom software development, mobile app development Thessaloniki, web development Greece, AI solutions, enterprise software development, blockchain development Greece, payment integration, digital transformation, software consulting Thessaloniki',
  alternates: {
    canonical: 'https://www.fijisolutions.net/en',
  },
  openGraph: {
    title: 'Fiji Solutions | Premier Software Company in Thessaloniki, Greece',
    description: 'Premier software company in Thessaloniki delivering custom development, AI solutions, and IT consulting services across Greece.',
    url: 'https://www.fijisolutions.net/en',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions - Premier Software Company in Thessaloniki, Greece',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Fiji Solutions | Premier Software Company in Thessaloniki, Greece',
    description: 'Premier software company in Thessaloniki delivering custom development, AI solutions, and IT consulting services across Greece.',
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
      <Contact t={t}/>
      <Footer t={t}/>
    </>
  );
}