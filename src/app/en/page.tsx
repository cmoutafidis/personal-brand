import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Hero from '../../components/Hero';
import Challenges from '../../components/Challenges';
import Solutions from '../../components/Solutions';
import Contact from '../../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Fiji Solutions | Software Company Thessaloniki Greece',
  description: 'Fiji Solutions: IT consulting & custom software development in Thessaloniki. Web development, AI solutions, cloud services & blockchain technology.',
  keywords: 'Fiji Solutions, Fiji Solutions Thessaloniki, Fiji Solutions Greece, software company Thessaloniki, IT consulting Greece, custom software development, web development, AI solutions, cloud services, mobile app development, blockchain technology, process automation, payment systems, digital success, free consultation',
  alternates: {
    canonical: 'https://www.fijisolutions.net/en',
  },
  openGraph: {
    type: 'website',
    title: 'Fiji Solutions | Software Company Thessaloniki Greece',
    description: 'Fiji Solutions: IT consulting & custom software development in Thessaloniki. Web development, AI solutions, cloud services & blockchain.',
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
    title: 'Fiji Solutions | Software Company Thessaloniki Greece',
    description: 'Fiji Solutions: IT consulting & custom software development in Thessaloniki. Web development, AI solutions, cloud services & blockchain.',
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