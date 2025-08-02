import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import Challenges from '../components/Challenges';
import Solutions from '../components/Solutions';
import Contact from '../components/Contact';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { language, t } = useLanguage();

  const canonicalUrl = language === 'en' ? 'https://fijisolutions.net/en' : 'https://fijisolutions.net/el';

  return (
    <>
      <SEOHead
        title={t('seo.home.title')}
        description={t('seo.home.description')}
        keywords={t('seo.home.keywords')}
        canonicalUrl={canonicalUrl}
      />
      <Hero />
      <Challenges />
      <Solutions />
      <Contact />
    </>
  );
};

export default Home;
