import type { Metadata } from 'next';
import Hero from '../../components/Hero';
import Challenges from '../../components/Challenges';
import Solutions from '../../components/Solutions';
import Contact from '../../components/Contact';

export const metadata: Metadata = {
  title: 'Fiji Solutions | We help your business grow online',
  description: 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development.',
  alternates: {
    canonical: 'https://fijisolutions.net/en',
  },
  openGraph: {
    url: 'https://fijisolutions.net/en',
  },
  twitter: {
    site: '@fiji_solutions',
  },
};

export default function EnglishHomePage() {
  return (
    <>
      <Hero />
      <Challenges />
      <Solutions />
      <Contact />
    </>
  );
}