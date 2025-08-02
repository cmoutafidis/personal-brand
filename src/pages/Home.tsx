import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import Challenges from '../components/Challenges';
import Solutions from '../components/Solutions';
import Contact from '../components/Contact';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();

  const seoData = {
    en: {
      title: "We help your business grow online | Fiji Solutions",
      description: "Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development. We deliver innovative web development, AI solutions, cloud services, mobile app development, and blockchain technology to help businesses grow online.",
      keywords: "software development, IT consulting, custom software development, mobile app development, big data consulting, enterprise software development, solution consulting, software consulting, Thessaloniki Greece",
      canonicalUrl: "https://fijisolutions.net/en"
    },
    el: {
      title: "Βοηθάμε την επιχείρησή σας να αναπτυχθεί διαδικτυακά | Fiji Solutions",
      description: "Η Fiji Solutions είναι μια εταιρεία λογισμικού στη Θεσσαλονίκη, Ελλάδα, που ειδικεύεται σε συμβουλευτικές υπηρεσίες IT και ανάπτυξη προσαρμοσμένου λογισμικού. Παραδίδουμε καινοτόμες λύσεις ανάπτυξης ιστού, λύσεις AI, υπηρεσίες cloud, ανάπτυξη εφαρμογών κινητών και τεχνολογία blockchain για να βοηθήσουμε τις επιχειρήσεις να αναπτυχθούν διαδικτυακά.",
      keywords: "ανάπτυξη λογισμικού Θεσσαλονίκη, συμβουλευτικές υπηρεσίες IT, ανάπτυξη προσαρμοσμένου λογισμικού, ανάπτυξη εφαρμογών κινητών, συμβουλευτική big data, ανάπτυξη εταιρικού λογισμικού, συμβουλευτική λύσεων, συμβουλευτική λογισμικού, Θεσσαλονίκη Ελλάδα, εταιρεία τεχνολογίας Θεσσαλονίκη",
      canonicalUrl: "https://fijisolutions.net/el"
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
      <Hero />
      <Challenges />
      <Solutions />
      <Contact />
    </>
  );
};

export default Home;
