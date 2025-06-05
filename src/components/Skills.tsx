import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'blockchain' | 'cloud';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Solidity', level: 75, category: 'blockchain' },
    { name: 'Web3.js/Ethers.js', level: 80, category: 'blockchain' },
    { name: 'Kubernetes', level: 70, category: 'cloud' },
    { name: 'AWS', level: 75, category: 'cloud' },
    { name: 'Azure', level: 85, category: 'cloud' },
    { name: 'GraphQL', level: 70, category: 'backend' },
    { name: 'Tailwind CSS', level: 85, category: 'frontend' },
    { name: 'Docker', level: 80, category: 'cloud' },
    { name: 'SQL/NoSQL', level: 75, category: 'backend' },
  ];

  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'cloud', name: 'Cloud & DevOps' },
  ];

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-2">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Expertise across web2 and web3 technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Technical Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        skill.category === 'frontend' ? 'bg-primary-500' : 
                        skill.category === 'backend' ? 'bg-secondary-500' : 
                        skill.category === 'blockchain' ? 'bg-accent-500' : 
                        'bg-yellow-500'
                      }`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter(skill => skill.category === category.id)
                    .map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          category.id === 'frontend' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300' : 
                          category.id === 'backend' ? 'bg-secondary-100 text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-300' : 
                          category.id === 'blockchain' ? 'bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300' : 
                          'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                        }`}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;