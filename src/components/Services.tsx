import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Bot, CreditCard, Cpu, Lightbulb } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Software Development',
      description: 'Building custom software solutions, including applications and systems, to address specific business challenges, enhance operations, or deliver innovative products.',
      features: ['Application Development', 'Enterprise Software Development', 'Mobile App Development', 'Custom Software Solutions']
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Big Data Consulting & Implementation',
      description: 'Providing expert guidance and solutions for managing, analyzing, and leveraging large datasets to drive business insights, including data architecture design and implementation.',
      features: ['Data Architecture Design', 'Data Quality Management', 'Business Intelligence', 'Analytics Solutions']
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'IT Consulting',
      description: 'Offering strategic advice on technology adoption, infrastructure optimization, and IT strategy to improve business efficiency and align technology with organizational goals.',
      features: ['Technology Strategy', 'Infrastructure Optimization', 'Digital Transformation', 'IT Strategy Alignment']
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Solution Consulting',
      description: 'Offering tailored guidance to identify, design, and implement technology solutions that address specific business problems, ensuring alignment with client goals and operational needs.',
      features: ['Business Analysis', 'Solution Design', 'Implementation Planning', 'Technology Alignment']
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Software Consulting',
      description: 'Providing expert advice on software selection, development methodologies, and technology strategies to help businesses optimize their software solutions and workflows.',
      features: ['Software Selection', 'Development Methodologies', 'Technology Strategies', 'Workflow Optimization']
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Mobile App Development',
      description: 'Creating applications specifically for mobile devices, such as smartphones and tablets, with a focus on performance, usability, and platform-specific features (e.g., iOS, Android).',
      features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'Mobile UI/UX Design']
    }
  ];

  return (
    <section id="services" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-2">Our Work</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Projects we have done with our existing clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="mr-2 text-primary-600 dark:text-primary-400">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
