import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Hero from '../components/Hero';
import Challenges from '../components/Challenges';
import Solutions from '../components/Solutions';
import Contact from '../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Fiji Solutions | Software Company in Thessaloniki, Greece | IT Consulting & Custom Software Development',
  description: 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development. We deliver innovative web development, AI solutions, cloud services, mobile app development, and blockchain technology to help businesses grow online.',
  keywords: 'Fiji Solutions, Fiji Solutions Thessaloniki, Fiji Solutions Greece, software company Thessaloniki, IT consulting Greece, custom software development, web development, AI solutions, cloud services, mobile app development, blockchain technology, process automation, payment systems, digital success, free consultation',
  alternates: {
    canonical: 'https://www.fijisolutions.net/',
  },
  openGraph: {
    title: 'Fiji Solutions | Software Company in Thessaloniki, Greece',
    description: 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development. We deliver innovative solutions to help businesses grow online.',
    url: 'https://www.fijisolutions.net/',
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
    title: 'Fiji Solutions | Software Company in Thessaloniki, Greece',
    description: 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development. We deliver innovative solutions to help businesses grow online.',
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