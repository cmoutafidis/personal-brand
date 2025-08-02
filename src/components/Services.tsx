import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Bot, CreditCard, Cpu, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: t('services.software.title'),
      description: t('services.software.description'),
      features: [t('services.software.feature1'), t('services.software.feature2'), t('services.software.feature3'), t('services.software.feature4')]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: t('services.enterprise.title'),
      description: t('services.enterprise.description'),
      features: [t('services.enterprise.feature1'), t('services.enterprise.feature2'), t('services.enterprise.feature3'), t('services.enterprise.feature4')]
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      features: [t('services.ai.feature1'), t('services.ai.feature2'), t('services.ai.feature3'), t('services.ai.feature4')]
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: t('services.payment.title'),
      description: t('services.payment.description'),
      features: [t('services.payment.feature1'), t('services.payment.feature2'), t('services.payment.feature3'), t('services.payment.feature4')]
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: t('services.blockchain.title'),
      description: t('services.blockchain.description'),
      features: [t('services.blockchain.feature1'), t('services.blockchain.feature2'), t('services.blockchain.feature3')]
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: [t('services.consulting.feature1'), t('services.consulting.feature2'), t('services.consulting.feature3'), t('services.consulting.feature4')]
    }
  ];

  return (
    <section id="services" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-2">{t('services.title')}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
