'use client';

import React from 'react';
import { ArrowDown } from 'lucide-react';
import { getTranslations, Language } from '@/lib/translations';
import VapiWidget from './VapiWidget';
import MotionDiv from './MotionDiv';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = getTranslations(lang);
  const assistantId = "d6683411-62fe-42cb-ad6f-54dc1eb9eeb7";
  const vapiApiKey = "4fb313ff-b3ca-4e50-869f-2a28d0939c6f";

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center" itemScope itemType="https://schema.org/Organization">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="container-custom pt-10 md:pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <MotionDiv
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            itemProp="name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>{t('hero.title')}</h1>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToContact}
              className="btn btn-primary text-lg px-8 py-4 cursor-pointer"
            >
              {t('hero.cta')}
              <ArrowDown className="ml-2 h-5 w-5" />
            </button>
            <VapiWidget
              apiKey={vapiApiKey}
              assistantId={assistantId}
              className="text-lg px-8 py-4"
              buttonText={t('hero.talk')}
              lang={lang}
            />
          </MotionDiv>

          <MotionDiv
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-2"
            itemProp="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p>{t('hero.description1')}</p>
          </MotionDiv>

          <MotionDiv
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            itemProp="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p>{t('hero.description2')}</p>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default Hero;