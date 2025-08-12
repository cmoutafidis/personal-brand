'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, Rocket, Plane, Link, Building } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Industries: React.FC = () => {
  const { t } = useLanguage();

  const industries = [
    {
      icon: <Building2 className="h-12 w-12" />,
      name: t('industries.telecom.title'),
      description: t('industries.telecom.description')
    },
    {
      icon: <Landmark className="h-12 w-12" />,
      name: t('industries.banking.title'),
      description: t('industries.banking.description')
    },
    {
      icon: <Building className="h-12 w-12" />,
      name: t('industries.consulting.title'),
      description: t('industries.consulting.description')
    },
    {
      icon: <Plane className="h-12 w-12" />,
      name: t('industries.travel.title'),
      description: t('industries.travel.description')
    },
    {
      icon: <Rocket className="h-12 w-12" />,
      name: t('industries.startups.title'),
      description: t('industries.startups.description')
    },
    {
      icon: <Link className="h-12 w-12" />,
      name: t('industries.blockchain.title'),
      description: t('industries.blockchain.description')
    }
  ];

  return (
    <section id="industries" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary-600 dark:text-primary-400">
            {t('industries.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('industries.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-block p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {industry.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;