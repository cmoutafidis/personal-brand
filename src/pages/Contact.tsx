import React from 'react';
import SEOHead from '../components/SEOHead';
import ContactComponent from '../components/Contact';

const Contact: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Fiji Solutions - Free IT Consultation",
    "description": "Get a free consultation for your IT needs. Contact us for web development, AI solutions, cloud services, and business automation.",
    "url": "https://fijisolutions.net/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Fiji Solutions",
      "email": "info@fijisolutions.net",
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "Aarau",
          "addressCountry": "Switzerland"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "MARINOU ANTYPA 40",
          "addressLocality": "PYLAIA",
          "addressRegion": "THESSALONIKI",
          "postalCode": "57001",
          "addressCountry": "Greece"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us | Fiji Solutions - Free IT Consultation"
        description="Get a free consultation for your IT needs. Contact Fiji Solutions for web development, AI solutions, cloud services, and business automation. No costs, no obligations."
        keywords="contact, free consultation, IT consultation, web development consultation, AI solutions consultation, cloud services, business automation"
        canonicalUrl="https://fijisolutions.net/contact"
        structuredData={structuredData}
      />
      <ContactComponent />
    </>
  );
};

export default Contact;
