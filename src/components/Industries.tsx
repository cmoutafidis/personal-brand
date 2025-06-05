import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, Rocket, Plane, Link, Buildings } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: <Building2 className="h-12 w-12" />,
      name: 'Telecommunications',
      description: 'Advanced solutions for modern communication infrastructure and services.'
    },
    {
      icon: <Landmark className="h-12 w-12" />,
      name: 'Banking & Finance',
      description: 'Secure and efficient systems for financial institutions and services.'
    },
    {
      icon: <Buildings className="h-12 w-12" />,
      name: 'Consulting',
      description: 'Strategic technology consulting for business transformation.'
    },
    {
      icon: <Plane className="h-12 w-12" />,
      name: 'Travel & Tourism',
      description: 'Digital solutions for enhanced travel experiences and operations.'
    },
    {
      icon: <Rocket className="h-12 w-12" />,
      name: 'Startups',
      description: 'Innovative solutions to drive startup growth and success.'
    },
    {
      icon: <Link className="h-12 w-12" />,
      name: 'Blockchain',
      description: 'Cutting-edge blockchain solutions for various industries.'
    }
  ];

  return (
    <section id="industries" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-2">Industries We Serve</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Delivering expertise across diverse sectors
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