import React from 'react';
import { motion } from 'framer-motion';

const Technologies: React.FC = () => {
  const techCategories = [
    {
      name: 'Frontend',
      technologies: ['React', 'Angular', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      name: 'Backend',
      technologies: ['Java', 'Rust', 'Python', 'Node.js', 'Express', 'Spring Boot']
    },
    {
      name: 'Cloud & DevOps',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
    },
    {
      name: 'AI & Data',
      technologies: ['Voiceflow', 'Salesforce', 'OpenAI', 'Make', 'Bolt', 'Vapi']
    },
    {
      name: 'Blockchain',
      technologies: ['Solana', 'Web3.js', 'Smart Contracts', 'DeFi Protocols', 'Token Standards']
    },
    {
      name: 'Trading',
      technologies: ['PineScript', 'Technical Analysis', 'Trading View', 'Market Data Integration']
    }
  ];

  return (
    <section id="technologies" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-2">Technology Stack</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Leveraging the power of technologies to deliver exceptional solutions
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
              className="card p-6"
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
