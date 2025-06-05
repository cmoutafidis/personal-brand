import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Twitter, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-20 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 font-medium text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              Web2 & Web3 Developer
            </motion.div>
            <motion.h1 
              className="mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Hello, I'm Fiji <span className="inline-block animate-wave">👋</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-400 dark:to-secondary-300">
                Software Engineer
              </span>
            </motion.h1>
            <motion.p 
              className="mb-8 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              DevRel at Jupiter Exchange. Building innovative solutions across web2 and web3. 
              Creating impactful projects and tools for the blockchain ecosystem.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                to="contact"
                smooth={true}
                offset={-70}
                duration={800}
                className="btn btn-primary"
              >
                Get in Touch
              </Link>
              <Link
                to="projects"
                smooth={true}
                offset={-70}
                duration={800}
                className="btn btn-secondary"
              >
                View My Work
              </Link>
            </motion.div>
            <motion.div 
              className="mt-8 flex justify-center lg:justify-start space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a 
                href="https://github.com/fiji" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://x.com/fiji_solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/charalampos-moutafidis-71330414a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-lg opacity-30 dark:opacity-40 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Code visualization" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            to="about"
            smooth={true}
            offset={-70}
            duration={800}
            className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md cursor-pointer"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-6 w-6 text-primary-600 dark:text-primary-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;