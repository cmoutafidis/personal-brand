import React from 'react';
import VapiWidget from './VapiWidget';
import ContactButton from "@/components/ContactButton";
import {assistantId, vapiApiKey} from "@/types/language";

interface HeroProps {
  t: (key: string) => string;
}

const Hero: React.FC<HeroProps> = ({t}) => {

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white" style={{lineHeight: "1.1"}}>
            {t('hero.title')}
          </h1>

          <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ContactButton label={t('hero.cta')}/>
            <VapiWidget
              apiKey={vapiApiKey}
              assistantId={assistantId}
              className="text-lg px-8 py-4"
              buttonText={t('hero.talk')}
            />
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-2">
            {t('hero.description1')}
          </p>

          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {t('hero.description2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;