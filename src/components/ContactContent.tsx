import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Facebook, Linkedin } from 'lucide-react';

const XIcon = (props: {className?: string | undefined}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      stroke="none"
      fill="currentColor"
    />
  </svg>
);

interface ContactContentProps {
  t: (key: string) => string;
}

export default function ContactContent({ t }: ContactContentProps) {

  return (
    <>
      <div className="text-center mb-12 md:mb-16 md:col-span-2">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary-600 dark:text-primary-400">
          {t('contact.title')}
        </h2>
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

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">{t('contact.info.title')}</h3>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
              <Mail className="h-6 w-6" />
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
            <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{t('contact.location')}</h4>
              <p className="text-gray-700 dark:text-gray-300">
                {t('contact.address.street')}<br />
                {t('contact.address.city')}
              </p>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.7687006238666!2d22.981762299999996!3d40.568784799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a83f09c19d1e8b%3A0x12d99215fbf8399e!2sFiji%20Solutions!5e0!3m2!1sen!2sgr!4v1753898022338!5m2!1sen!2sgr"
                  width="400"
                  height="300"
                  style={{"border": "0"}}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">{t('contact.connect')}</h4>
          <div className="flex space-x-4">
            <a
              href="https://github.com/cmoutafidis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/fiji_solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <XIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61578271845868"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/company/fijisolutionsnet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}