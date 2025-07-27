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
        description="IT solutions that fit to your business needs, designed to guarantee your business success. Expert web development, AI integration, cloud services, and blockchain solutions in Greece and Switzerland."
        keywords="web development, AI solutions, cloud services, blockchain development, IT consulting, business automation, custom software, software company, payment integration, Thessaloniki Greece, Aarau Switzerland"
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
