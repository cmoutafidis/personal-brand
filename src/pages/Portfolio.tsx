import React from 'react';
import SEOHead from '../components/SEOHead';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';

const Portfolio: React.FC = () => {

  return (
    <>
      <SEOHead
        title="Our Portfolio | Fiji Solutions"
        description="Explore Fiji Solutions' portfolio showcasing our software development, IT consulting, mobile app development, and enterprise software solutions for clients in Thessaloniki, Greece."
        keywords="portfolio, software development projects, IT consulting projects, mobile app development, enterprise software development, custom software solutions, Thessaloniki Greece"
        canonicalUrl="https://fijisolutions.net/portfolio"
      />
      <Services />
      <Technologies />
      <Industries />
      <Projects />
    </>
  );
};

export default Portfolio;
