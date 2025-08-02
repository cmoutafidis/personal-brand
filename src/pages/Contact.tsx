import React from 'react';
import SEOHead from '../components/SEOHead';
import ContactComponent from '../components/Contact';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();

  const seoData = {
    en: {
      title: "Contact Us for Free IT Consultation | Fiji Solutions",
      description: "Contact Fiji Solutions in Thessaloniki, Greece for expert IT consulting and custom software development. Fill out our form for a free consultation.",
      keywords: "contact, free consultation, IT consulting, software development consultation, mobile app development, big data consulting, Thessaloniki Greece",
      canonicalUrl: "https://fijisolutions.net/en/contact"
    },
    el: {
      title: "Επικοινωνήστε μαζί μας για Δωρεάν Συμβουλευτική IT | Fiji Solutions",
      description: "Επικοινωνήστε με τη Fiji Solutions στη Θεσσαλονίκη, Ελλάδα για εξειδικευμένες συμβουλευτικές υπηρεσίες IT και ανάπτυξη προσαρμοσμένου λογισμικού. Συμπληρώστε τη φόρμα μας για δωρεάν συμβουλευτική.",
      keywords: "επικοινωνία, δωρεάν συμβουλευτική, συμβουλευτικές υπηρεσίες IT, συμβουλευτική ανάπτυξης λογισμικού, ανάπτυξη εφαρμογών κινητών, συμβουλευτική big data, Θεσσαλονίκη Ελλάδα",
      canonicalUrl: "https://fijisolutions.net/el/contact"
    }
  };

  return (
    <>
      <SEOHead
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        canonicalUrl={seoData[language].canonicalUrl}
      />
      <ContactComponent />
    </>
  );
};

export default Contact;
