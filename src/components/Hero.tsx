import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="container-custom pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transform Your Business with Modern Technology Solutions
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={100}
              className="btn btn-primary text-lg px-8 py-4 cursor-pointer"
            >
              Yes, I Want That
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Your business needs AI and modern technologies to outperform the competition
            and reduce its operational costs.
          </motion.p>

          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            However, even with the promise of innovation, many companies encounter persistent obstacles when trying to adopt new solutions. Understanding the root causes of these challenges is the first step toward transforming your organization and unlocking its full potential.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
