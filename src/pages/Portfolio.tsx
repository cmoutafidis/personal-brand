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
        description="Here you can see the projects we have done for our existing clients and all the services that we can offer you."
        keywords="portfolio, projects, finance analytics, catalytics pro, web development projects, blockchain applications, IT services, custom software development"
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
