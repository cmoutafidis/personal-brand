import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Building2, CreditCard } from 'lucide-react';

interface SolutionsProps {
  t: (key: string) => string;
}

const Solutions: React.FC<SolutionsProps> = ({ t }) => {

  const solutions = [
    {
      icon: <Zap className="h-12 w-12" />,
      title: t('solutions.experts.title'),
      description: t('solutions.experts.description')
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: t('solutions.fast.title'),
      description: t('solutions.fast.description')
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: t('solutions.industry.title'),
      description: t('solutions.industry.description')
    },
    {
      icon: <CreditCard className="h-12 w-12" />,
      title: t('solutions.payment.title'),
      description: t('solutions.payment.description')
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary-600 dark:text-primary-400">
            {t('solutions.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg p-6 text-center"
            >
              <div className="inline-block p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {solution.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="max-w-2xl mx-auto bg-primary-600 dark:bg-primary-700 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              {t('solutions.cta.title')}
            </h3>
            <p className="mb-6">
              {t('solutions.cta.description')}
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 hover:bg-gray-100 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
            >
              {t('solutions.cta.button')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;