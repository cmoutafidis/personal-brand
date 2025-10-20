import React from 'react';
import {Shield, FileText, Lock, Users, Eye, Globe, Mail, MapPin} from 'lucide-react';

export default function PrivacyPolicyContent() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Last updated: October 20, 2025
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
              <div className="flex items-center justify-center mb-8">
                <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                  <Shield className="h-12 w-12 text-primary-600 dark:text-primary-400"/>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <FileText className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Introduction
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    This Privacy Policy explains how Fiji Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) handles information in connection with our mobile applications (&quot;Apps&quot;) available on the Google Play Store and Apple App Store. Our Apps are simple webview applications that display content from our website <a href="http://fijisolutions.net/" className="text-primary-600 dark:text-primary-400 hover:underline">http://fijisolutions.net/</a>. We are committed to protecting your privacy and ensuring transparency about our data practices.
                  </p>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Information We Collect
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Our Apps do not collect, store, or process any personal data from users. The Apps function solely as webviews, meaning they display content directly from our website <a href="http://fijisolutions.net/" className="text-primary-600 dark:text-primary-400 hover:underline">http://fijisolutions.net/</a> without collecting or storing any user information on the device or through the Apps.
                  </p>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Lock className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      How We Use Information
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Since our Apps do not collect any personal data, we do not use or share any personal information about you. The Apps are designed to provide you with access to our website content in a convenient mobile format.
                  </p>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Data Sharing and Disclosure
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We do not collect, share, or disclose any personal data through our Apps. The content displayed in the Apps is sourced directly from our website, and any interactions with the website are governed by the website&apos;s privacy policy, which can be found at <a href="http://fijisolutions.net/privacy-policy" className="text-primary-600 dark:text-primary-400 hover:underline">http://fijisolutions.net/privacy-policy</a>.
                  </p>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Globe className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Third-Party Services
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Our Apps do not integrate with any third-party services that collect personal data. However, since the Apps display content from our website, any third-party services used by the website (such as analytics or advertising, if applicable) are subject to the website&apos;s privacy policy.
                  </p>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Data Security
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    As our Apps do not collect or store personal data, there is no user data at risk within the Apps. We take reasonable measures to ensure the security of our Apps, including keeping them updated and free from vulnerabilities.
                  </p>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Children&apos;s Privacy
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Our Apps are not directed to children under the age of 13, and we do not knowingly collect any personal information from children. If you believe a child under 13 has provided personal information through our website (accessible via the Apps), please contact us at <a href="mailto:charis@fijisolutions.net" className="text-primary-600 dark:text-primary-400 hover:underline">charis@fijisolutions.net</a>, and we will address the issue in accordance with our website&apos;s privacy policy.
                  </p>
                </section>

                <section>
                  <div className="flex items-center space-x-3 mb-4">
                    <FileText className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Changes to This Privacy Policy
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on this page with a revised &quot;Last updated&quot; date. We encourage you to review this policy periodically.
                  </p>
                </section>

                <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="h-6 w-6 text-primary-600 dark:text-primary-400"/>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Contact Us
                    </h2>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    If you have any questions or concerns about this Privacy Policy or our Apps, please contact us at:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p><strong>Fiji Solutions</strong></p>
                      <p>Charalampos Moutafidis</p>
                      <p className="flex items-center space-x-2">
                        <Mail className="h-4 w-4"/>
                        <a href="mailto:charis@fijisolutions.net" className="text-primary-600 dark:text-primary-400 hover:underline">charis@fijisolutions.net</a>
                      </p>
                      <p className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 mt-1"/>
                        <span>Marinou Antipa 40<br/>Thessaloniki 570 01, Greece</span>
                      </p>
                      <p className="flex items-center space-x-2">
                        <Globe className="h-4 w-4"/>
                        <a href="http://fijisolutions.net/" className="text-primary-600 dark:text-primary-400 hover:underline">http://fijisolutions.net/</a>
                      </p>
                    </div>
                  </div>
                </section>

                <section className="text-center pt-4">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    Thank you for using our Apps!
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
