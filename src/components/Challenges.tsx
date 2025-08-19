import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Binary } from 'lucide-react';

interface ChallengesProps {
  t: (key: string) => string;
}

const Challenges: React.FC<ChallengesProps> = ({ t }) => {

  const challenges = [
    {
      icon: <Binary className="h-12 w-12" />,
      title: t('challenges.old_tech.title'),
      description: t('challenges.old_tech.description')
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: t('challenges.slow.title'),
      description: t('challenges.slow.description')
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: t('challenges.money.title'),
      description: t('challenges.money.description')
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary-600 dark:text-primary-400">
            {t('challenges.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('challenges.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg p-6 text-center"
            >
              <div className="inline-block p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 mb-4">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {challenge.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;