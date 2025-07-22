import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import Challenges from '../components/Challenges';
import Solutions from '../components/Solutions';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Fiji Solutions - IT Solutions for Business Growth",
    "description": "We help your business grow online with expert IT solutions, AI integration, cloud services, and custom development.",
    "url": "https://fijisolutions.net",
    "mainEntity": {
      "@type": "Organization",
      "name": "Fiji Solutions",
      "description": "IT solutions that fit to your business needs, designed to guarantee your business success.",
      "offers": [
        {
          "@type": "Service",
          "name": "Custom Development",
          "description": "End-to-end development of web applications, mobile solutions, and enterprise software"
        },
        {
          "@type": "Service",
          "name": "AI Solutions",
          "description": "AI implementations and integrations that save money and bring more customers"
        },
        {
          "@type": "Service",
          "name": "Cloud Services",
          "description": "Expert consulting and implementation of cloud solutions across major platforms"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Fiji Solutions | We help your business grow online"
        description="IT solutions that fit to your business needs, designed to guarantee your business success. Expert web development, AI integration, cloud services, and blockchain solutions in Greece and Switzerland."
        keywords="web development, AI solutions, cloud services, blockchain development, IT consulting, business automation, custom software, payment integration, Thessaloniki Greece, Aarau Switzerland"
        canonicalUrl="https://fijisolutions.net"
        structuredData={structuredData}
      />
      <Hero />
      <Challenges />
      <Solutions />
      <Contact />
    </>
  );
};

export default Home;