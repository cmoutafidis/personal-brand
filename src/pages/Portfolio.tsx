import React from 'react';
import SEOHead from '../components/SEOHead';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';

const Portfolio: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Portfolio - Fiji Solutions Projects and Services",
    "description": "Explore our portfolio of successful projects including Finance Analytics, Catalytics Pro, and comprehensive IT services across multiple industries.",
    "url": "https://fijisolutions.net/portfolio",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "CreativeWork",
          "name": "Finance Analytics Platform",
          "description": "Platform for tracking Fed net liquidity and Toros leverage tokens performance",
          "url": "https://tlx.fijisolutions.net/"
        },
        {
          "@type": "CreativeWork",
          "name": "Catalytics Pro",
          "description": "Community project for Jupiter Exchange providing real-time analytics and insights",
          "url": "https://catalytics.pro/"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Portfolio | Fiji Solutions - Our Projects and Services"
        description="Explore our portfolio of successful projects including Finance Analytics, Catalytics Pro, and comprehensive IT services across telecommunications, banking, consulting, and blockchain industries."
        keywords="portfolio, projects, finance analytics, catalytics pro, web development projects, blockchain applications, IT services, custom software development"
        canonicalUrl="https://fijisolutions.net/portfolio"
        structuredData={structuredData}
      />
      <Services />
      <Technologies />
      <Industries />
      <Projects />
    </>
  );
};

export default Portfolio;