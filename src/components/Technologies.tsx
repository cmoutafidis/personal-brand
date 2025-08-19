import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const Technologies: React.FC = () => {
  const { t } = useLanguage();

  const techCategories = [
    {
      name: t('technologies.frontend'),
      technologies: ['React', 'Angular', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      name: t('technologies.backend'),
      technologies: ['Java', 'Rust', 'Python', 'Node.js', 'Express', 'Spring Boot']
    },
    {
      name: t('technologies.cloud'),
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
    },
    {
      name: t('technologies.ai'),
      technologies: ['Voiceflow', 'Salesforce', 'OpenAI', 'Make', 'Bolt', 'Vapi']
    },
    {
      name: t('technologies.blockchain'),
      technologies: ['Solana', 'Web3.js', 'Smart Contracts', 'DeFi Protocols', 'Token Standards']
    },
    {
      name: t('technologies.trading'),
      technologies: ['PineScript', 'Technical Analysis', 'Trading View', 'Market Data Integration']
    }
  ];

  return (
    <section id="technologies" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary-600 dark:text-primary-400">
            {t('technologies.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('technologies.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;