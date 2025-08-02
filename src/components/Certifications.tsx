import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface Certification {
  name: string;
  organization: string;
  category: string;
  icon: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      name: 'SnowPro Associate: Platform Certification',
      organization: 'Snowflake',
      category: 'Data',
      icon: '❄️'
    },
    {
      name: 'Certified Kubernetes Application Developer',
      organization: 'Cloud Native Computing Foundation',
      category: 'Cloud',
      icon: '🚢'
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      organization: 'Microsoft',
      category: 'Cloud',
      icon: '☁️'
    },
    {
      name: 'Professional Scrum Master™ I (PSM I)',
      organization: 'Scrum.org',
      category: 'Methodology',
      icon: '🔄'
    },
    {
      name: 'Certified Magnolia Associate Developer',
      organization: 'Magnolia',
      category: 'Development',
      icon: '💻'
    },
    {
      name: 'Salesforce Certified Platform App Builder',
      organization: 'Salesforce',
      category: 'Development',
      icon: '⚡'
    },
    {
      name: 'Salesforce Certified Administrator (SCA)',
      organization: 'Salesforce',
      category: 'Administration',
      icon: '⚙️'
    },
    {
      name: 'Salesforce Certified Platform Developer I',
      organization: 'Salesforce',
      category: 'Development',
      icon: '🔧'
    },
    {
      name: 'Microsoft Certified: Azure Developer Associate',
      organization: 'Microsoft',
      category: 'Cloud',
      icon: '☁️'
    }
  ];

  return (
    <section id="certifications" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-2">Certifications</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional qualifications and credentials
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="card p-6 flex items-start space-x-4"
            >
              <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                <span className="text-2xl" role="img" aria-label={cert.category}>
                  {cert.icon}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{cert.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{cert.organization}</p>
                <span className="inline-block px-2 py-1 text-xs rounded-md bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">
                  {cert.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
            <Award className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Continuous Learning</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Always expanding my knowledge and skills through professional development and certifications.
            Currently exploring advanced blockchain development and cloud architecture.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
