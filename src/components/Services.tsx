import React from 'react';
import {BarChart3, Code2, Snowflake} from 'lucide-react';

interface ServicesProps {
  t: (key: string) => string;
}

const Services: React.FC<ServicesProps> = ({t}) => {

  // Three, not six. The six-card grid (custom software / enterprise / AI / payments /
  // Snowflake / IT consulting) was the "belly shop" the audit flagged: it read as a list of
  // categories rather than one thing worth buying. Each card now names the manual work it removes.
  const services = [
    {
      icon: <Code2 className="h-8 w-8"/>,
      title: t('services.software.title'),
      description: t('services.software.description'),
      features: [t('services.software.feature1'), t('services.software.feature2'), t('services.software.feature3'), t('services.software.feature4')]
    },
    {
      icon: <BarChart3 className="h-8 w-8"/>,
      title: t('services.data.title'),
      description: t('services.data.description'),
      features: [t('services.data.feature1'), t('services.data.feature2'), t('services.data.feature3'), t('services.data.feature4')]
    },
    {
      icon: <Snowflake className="h-8 w-8"/>,
      title: t('services.snowflake.title'),
      description: t('services.snowflake.description'),
      features: [t('services.snowflake.feature1'), t('services.snowflake.feature2'), t('services.snowflake.feature3'), t('services.snowflake.feature4')]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary-600 dark:text-primary-400">
            {t('services.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index}
                 className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden duration-300 p-6 hover:shadow-xl transition-shadow">
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {service.title}
              </h2>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;