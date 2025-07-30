import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import Challenges from '../components/Challenges';
import Solutions from '../components/Solutions';
import Contact from '../components/Contact';

const Home: React.FC = () => {

  return (
    <>
      <SEOHead
        title="We help your business grow online | Fiji Solutions"
        description="Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development. We deliver innovative web development, AI solutions, cloud services, mobile app development, and blockchain technology to help businesses grow online."
        keywords="software development, IT consulting, custom software development, mobile app development, big data consulting, enterprise software development, solution consulting, software consulting, Thessaloniki Greece"
        canonicalUrl="https://fijisolutions.net"
      />
      <Hero />
      <Challenges />
      <Solutions />
      <Contact />
    </>
  );
};

export default Home;
