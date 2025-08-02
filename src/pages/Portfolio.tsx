import React from 'react';
import SEOHead from '../components/SEOHead';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';
import { useLanguage } from '../context/LanguageContext';

const Portfolio: React.FC = () => {
  const { language, t } = useLanguage();

  const canonicalUrl = language === 'en' ? 'https://fijisolutions.net/portfolio' : 'https://fijisolutions.net/el/portfolio';

  return (
    <>
      <SEOHead
        title={t('seo.portfolio.title')}
        description={t('seo.portfolio.description')}
        keywords={t('seo.portfolio.keywords')}
        canonicalUrl={canonicalUrl}
      />
      <Services />
      <Technologies />
      <Industries />
      <Projects />
    </>
  );
};

export default Portfolio;
