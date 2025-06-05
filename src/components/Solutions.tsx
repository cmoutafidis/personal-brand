import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Building as Buildings } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Cutting-Edge Expertise",
      description: "Our engineers and consultants stay ahead of market trends, specializing in the latest technologies and AI products."
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Rapid, Quality Delivery",
      description: "We pride ourselves on swift implementation without compromising on quality - that's our unique advantage."
    },
    {
      icon: <Buildings className="h-12 w-12" />,
      title: "Industry Experience",
      description: "With experience across multiple sectors, we understand your market and deliver solutions that address specific industry needs."
    }
  ];

  return (
    <section className="section bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-2">How We Help</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transform your business with our expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
              Don't Let Your Competition Get Ahead
            </h3>
            <p className="mb-6">
              The AI revolution is happening now. Companies that adapt early will lead their industries.
              Don't wait until it's too late - start your transformation today.
            </p>
            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={800}
              className="btn bg-white text-primary-600 hover:bg-gray-100"
            >
              Contact Us Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;