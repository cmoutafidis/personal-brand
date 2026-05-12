import {Mail, MapPin, Phone} from 'lucide-react';
import {JSX} from "react";

interface ContactContentProps {
  t: (key: string) => string;
  element: string;
}

export default function ContactContent({t, element}: ContactContentProps) {
  const Tag = element as keyof JSX.IntrinsicElements;

  return (
    <>
      <div className="text-center mb-12 md:mb-16 md:col-span-2">
        <Tag className="text-3xl md:text-4xl font-bold mb-2 text-primary-600 dark:text-primary-400">
          {t('contact.title')}
        </Tag>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t('contact.subtitle1')}
        </p>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t('contact.subtitle2')}
        </p>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t('contact.subtitle3')}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">{t('contact.info.title')}</h2>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div
              className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
              <Mail className="h-6 w-6"/>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Email</h4>
              <a
                href="mailto:info@fijisolutions.net"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                info@fijisolutions.net
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div
              className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
              <Phone className="h-6 w-6"/>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{t('contact.phone')}</h4>
              <a
                href="tel:+302311070108"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                +30 231 107 0108
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div
              className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
              <MapPin className="h-6 w-6"/>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{t('contact.location')}</h4>
              <p className="text-gray-700 dark:text-gray-300">
                {t('contact.address.street')}<br/>
                {t('contact.address.city')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
