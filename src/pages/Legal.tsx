import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { Building, MapPin, Hash, Euro, User, Shield } from 'lucide-react';

const Legal: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Legal Information - Fiji Solutions Company Details",
    "description": "Legal information and company registration details for Fiji Solutions SINGLE MEMBER PRIVATE COMPANY (IKE).",
    "url": "https://fijisolutions.net/legal"
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <SEOHead
        title="Legal Information | Fiji Solutions Company Details"
        description="Legal information and company registration details for Fiji Solutions SINGLE MEMBER PRIVATE COMPANY (IKE). GEMI Number: 185101306000, based in Thessaloniki, Greece."
        keywords="legal information, company registration, GEMI number, Fiji Solutions IKE, Thessaloniki Greece, business registration"
        canonicalUrl="https://fijisolutions.net/legal"
        structuredData={structuredData}
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
                Legal Information
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Company registration and legal details
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                  <Shield className="h-12 w-12 text-primary-600 dark:text-primary-400" />
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
                WEBSITE PUBLICITY INFORMATION
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
                          Company Name
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
                          Address
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          MARINOU ANTYPA 40, 57001, PYLAIA, THESSALONIKI
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                        <Hash className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          GEMI Number
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
                          Corporate Capital
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
                          Corporate Shares
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          2.000 capital corporate shares with a nominal value of 1.00 euro each
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
                          Partner
                        </h3>
                      </div>
                      <div className="space-y-2 text-gray-700 dark:text-gray-300">
                        <p><strong>Name:</strong> CHARALAMPOS MOUTAFIDIS</p>
                        <p><strong>Father’s Name:</strong> CHRISTOS</p>
                        <p><strong>Tax Identification Number:</strong> 167515853</p>
                        <p><strong>Address:</strong> ELLIS 5, 56625, SIKIES</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Shield className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Administrator
                        </h3>
                      </div>
                      <div className="space-y-2 text-gray-700 dark:text-gray-300">
                        <p><strong>Name:</strong> CHARALAMPOS MOUTAFIDIS</p>
                        <p><strong>Identity Card Number:</strong> ΑΟ1277016</p>
                        <p><strong>Tax Identification Number:</strong> 167515853</p>
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
