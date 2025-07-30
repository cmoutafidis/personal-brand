import React from 'react';
import SEOHead from '../components/SEOHead';
import ContactComponent from '../components/Contact';

const Contact: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Contact Us for Free IT Consultation | Fiji Solutions"
        description="Contact Fiji Solutions in Thessaloniki, Greece for expert IT consulting and custom software development. Fill out our form for a free consultation."
        keywords="contact, free consultation, IT consulting, software development consultation, mobile app development, big data consulting, Thessaloniki Greece"
        canonicalUrl="https://fijisolutions.net/contact"
      />
      <ContactComponent />
    </>
  );
};

export default Contact;
