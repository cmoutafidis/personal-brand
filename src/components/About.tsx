import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Rocket, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-2">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Software engineer with expertise in both web2 and web3 technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl mb-4 text-gray-900 dark:text-white">
              Charis Moutafidis
              <span className="text-primary-600 dark:text-primary-400"> (Fiji)</span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate software engineer currently working as a DevRel at Jupiter Exchange. 
              With experience spanning both traditional web development and blockchain technologies, 
              I specialize in creating innovative, user-focused solutions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My journey in tech has led me through various roles and projects, from developing 
              financial tracking tools to creating community resources for blockchain enthusiasts. 
              I'm particularly interested in the intersection of traditional finance and 
              decentralized technologies.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-primary-600 dark:text-primary-400">•</span>
                <span className="text-gray-700 dark:text-gray-300">Web2 & Web3 Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary-600 dark:text-primary-400">•</span>
                <span className="text-gray-700 dark:text-gray-300">DevRel & Community Building</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary-600 dark:text-primary-400">•</span>
                <span className="text-gray-700 dark:text-gray-300">DeFi & Financial Tools</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary-600 dark:text-primary-400">•</span>
                <span className="text-gray-700 dark:text-gray-300">Cloud Technologies</span>
              </div>
            </div>

            <a 
              href="https://www.linkedin.com/in/charalampos-moutafidis-71330414a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
            >
              View LinkedIn Profile
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div 
              className="card p-6"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Code className="h-10 w-10 text-primary-600 dark:text-primary-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Experienced in modern frontend frameworks and backend technologies
              </p>
            </motion.div>

            <motion.div 
              className="card p-6"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Rocket className="h-10 w-10 text-accent-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building decentralized applications and Web3 solutions
              </p>
            </motion.div>

            <motion.div 
              className="card p-6"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Zap className="h-10 w-10 text-secondary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">DevRel</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connecting developers with the tools and resources they need
              </p>
            </motion.div>

            <motion.div 
              className="card p-6"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Award className="h-10 w-10 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certified</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Multiple professional certifications across cloud and dev
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;