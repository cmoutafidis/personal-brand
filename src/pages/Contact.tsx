import React from 'react';
import SEOHead from '../components/SEOHead';
import ContactComponent from '../components/Contact';

const Contact: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Contact Us for Free IT Consultation | Fiji Solutions"
        description="Fill out the form below and we will contact you within 48 hours for a free consultation. No costs, no obligations, no annoying sales pitch."
        keywords="contact, free consultation, IT consultation, web development consultation, AI solutions consultation, cloud services, business automation"
        canonicalUrl="https://fijisolutions.net/contact"
      />
      <ContactComponent />
    </>
  );
};

export default Contact;
