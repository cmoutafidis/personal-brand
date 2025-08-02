import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { Building, MapPin, Hash, Euro, User, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Legal: React.FC = () => {
  const { language, t } = useLanguage();

  const canonicalUrl = language === 'en' ? 'https://fijisolutions.net/en/legal' : 'https://fijisolutions.net/el/legal';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <SEOHead
        title={t('seo.legal.title')}
        description={t('seo.legal.description')}
        keywords={t('seo.legal.keywords')}
        canonicalUrl={canonicalUrl}
      />
      <section className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('legal.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {t('legal.subtitle')}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                  <Shield className="h-12 w-12 text-primary-600 dark:text-primary-400" />
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
                {t('legal.website_publicity')}
              </h2>

              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                        <Building className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {t('legal.company_name')}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          Fiji Solutions SINGLE MEMBER PRIVATE COMPANY (IKE)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                        <MapPin className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {t('legal.address')}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          MARINOU ANTIPA 40, 570 01, PILEA, THESSALONIKI
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                        <Hash className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {t('legal.gemi_number')}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          185101306000
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                        <Euro className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {t('legal.corporate_capital')}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          2.000 euro
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                        <Building className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {t('legal.corporate_shares')}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {t('legal.corporate_shares_description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <User className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {t('legal.partner')}
                        </h3>
                      </div>
                      <div className="space-y-2 text-gray-700 dark:text-gray-300">
                        <p><strong>{t('legal.name')}:</strong> CHARALAMPOS MOUTAFIDIS</p>
                        <p><strong>{t('legal.fathers_name')}:</strong> CHRISTOS</p>
                        <p><strong>{t('legal.tax_id')}:</strong> 167515853</p>
                        <p><strong>{t('legal.address')}:</strong> ELLIS 5, 56625, SIKIES</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Shield className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {t('legal.administrator')}
                        </h3>
                      </div>
                      <div className="space-y-2 text-gray-700 dark:text-gray-300">
                        <p><strong>{t('legal.name')}:</strong> CHARALAMPOS MOUTAFIDIS</p>
                        <p><strong>{t('legal.identity_card')}:</strong> ΑΟ1277016</p>
                        <p><strong>{t('legal.tax_id')}:</strong> 167515853</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Legal;