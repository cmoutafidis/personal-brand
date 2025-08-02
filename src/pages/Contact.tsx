import React from 'react';
import SEOHead from '../components/SEOHead';
import ContactComponent from '../components/Contact';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { language, t } = useLanguage();

  const canonicalUrl = language === 'en' ? 'https://fijisolutions.net/contact' : 'https://fijisolutions.net/el/contact';

  return (
    <>
      <SEOHead
        title={t('seo.contact.title')}
        description={t('seo.contact.description')}
        keywords={t('seo.contact.keywords')}
        canonicalUrl={canonicalUrl}
      />
      <ContactComponent />
    </>
  );
};

export default Contact;
