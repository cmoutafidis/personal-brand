import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Binary } from 'lucide-react';

const Challenges: React.FC = () => {
  const challenges = [
    {
      icon: <Binary className="h-12 w-12" />,
      title: "Old Technologies",
      description: "It is very hard to compete using old technologies. You are missing opportunities and it is hard to automate processes and scale."
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Everyone is slow",
      description: "Traditional agencies work slow and are very expensive. On the other hand, hiring good stuff is difficult. And even if you find someone good, one day they might leave."
    },
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: "Money wasted",
      description: "A lot of manual tasks that stuff have been doing for years can now be automated. This costs you tons of money and time."
    }
  ];

  return (
    <section className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-2">Common Business Challenges</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            All traditional businesses face the same problems.
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
              className="card p-6 text-center"
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
