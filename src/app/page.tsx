import type { Metadata } from 'next';
import Hero from '../components/Hero';
import Challenges from '../components/Challenges';
import Solutions from '../components/Solutions';
import Contact from '../components/Contact';

export const metadata: Metadata = {
  title: 'Fiji Solutions | We help your business grow online',
  description: 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development.',
  alternates: {
    canonical: 'https://fijisolutions.net/',
  },
  openGraph: {
    url: 'https://fijisolutions.net/',
    images: [
      {
        url: 'https://fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions',
      },
    ],
  },
  twitter: {
    site: '@fiji_solutions',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Challenges />
      <Solutions />
      <Contact />
    </>
  );
}