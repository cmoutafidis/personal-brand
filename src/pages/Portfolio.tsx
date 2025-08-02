import React from 'react';
import SEOHead from '../components/SEOHead';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';
import { useLanguage } from '../context/LanguageContext';

const Portfolio: React.FC = () => {
  const { language } = useLanguage();

  const seoData = {
    en: {
      title: "Our Portfolio | Fiji Solutions",
      description: "Explore Fiji Solutions' portfolio showcasing our software development, IT consulting, mobile app development, and enterprise software solutions for clients in Thessaloniki, Greece.",
      keywords: "portfolio, software development projects, IT consulting projects, mobile app development, enterprise software development, custom software solutions, Thessaloniki Greece",
      canonicalUrl: "https://fijisolutions.net/en/portfolio"
    },
    el: {
      title: "Το Χαρτοφυλάκιό μας | Fiji Solutions",
      description: "Εξερευνήστε το χαρτοφυλάκιο της Fiji Solutions που παρουσιάζει την ανάπτυξη λογισμικού, τις συμβουλευτικές υπηρεσίες IT, την ανάπτυξη εφαρμογών κινητών και τις λύσεις εταιρικού λογισμικού για πελάτες στη Θεσσαλονίκη, Ελλάδα.",
      keywords: "χαρτοφυλάκιο, έργα ανάπτυξης λογισμικού, έργα συμβουλευτικής IT, ανάπτυξη εφαρμογών κινητών, ανάπτυξη εταιρικού λογισμικού, προσαρμοσμένες λύσεις λογισμικού, Θεσσαλονίκη Ελλάδα",
      canonicalUrl: "https://fijisolutions.net/el/portfolio"
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
      <Services />
      <Technologies />
      <Industries />
      <Projects />
    </>
  );
};

export default Portfolio;
