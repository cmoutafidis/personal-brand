import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Building2, CreditCard } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {Link} from "react-scroll";

const Solutions: React.FC = () => {
  const { t } = useLanguage();
  
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

  return (
    <section className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-2">{t('solutions.title')}</h2>
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
              className="card p-6 text-center"
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
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={100}
              className="btn bg-white text-primary-600 hover:bg-gray-100 cursor-pointer"
            >
              {t('solutions.cta.button')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
