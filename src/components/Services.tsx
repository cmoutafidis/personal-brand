import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, Bot, CreditCard, Cpu, Lightbulb } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Software Development',
      description: 'End-to-end development of web applications, mobile solutions, and enterprise software that fit to specific business needs.',
      features: ['Custom Software Applications', 'Web Applications', 'Desktop Applications', 'System Integration']
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Enterprise Software Development',
      description: 'Expert consulting and implementation of cloud solutions across major platforms.',
      features: ['Large-scale Software Systems', 'Business Process Integration', 'Scalable Architecture', 'Enterprise Solutions']
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'AI Solutions',
      description: 'AI implementations and Integrations that save you money and will bring you more customers.',
      features: ['AI Chat Agents', 'AI Voice Assistants', 'AI-Powered Service Desk', 'Process Automations']
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: 'Payment Integration',
      description: 'Money is the oxygen of your company. We make the process simple, and allow your customers to pay you with a variety of payment methods.',
      features: ['Credit Card Processing', 'Payment Gateway Integration', 'Digital Wallets', 'Crypto Payments']
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Mobile App Development',
      description: 'Expert consulting and implementation of cloud solutions across major platforms.',
      features: ['iOS Applications', 'Android Applications', 'Cross-platform Development', 'Mobile UI/UX Design']
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'IT Consulting',
      description: 'We make sure that your business is running smoothly and efficiently. This is very important for your business to grow.',
      features: ['Technology Strategy', 'Infrastructure Optimization', 'Digital Transformation', 'IT Strategy Alignment']
    }
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Blockchain Development',
      description: 'Modern blockchain solutions for various industries and use cases.',
      features: ['Smart Contract Development', 'DeFi Applications', 'Token Development', 'Blockchain Integration']
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
