import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {Mail, MapPin, Send, Github, CheckCircle, AlertCircle, Facebook, Linkedin} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    question: '',
    message: ''
  });

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const XIcon = (props) => (
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
      {...props}
    >
      <path
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
        stroke="none"
        fill="currentColor"
      />
    </svg>
  );

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (submitError) {
      setSubmitError('');
    }
  };

  // Validate form
  const validateForm = () => {
    const { name, email, company, question, message } = formData;

    if (!name.trim()) {
      setSubmitError(t('contact.form.name') + ' ' + t('contact.form.error.required'));
      return false;
    }

    if (!email.trim()) {
      setSubmitError(t('contact.form.email') + ' ' + t('contact.form.error.required'));
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitError(t('contact.form.error.email'));
      return false;
    }

    if (!company.trim()) {
      setSubmitError(t('contact.form.company') + ' ' + t('contact.form.error.required'));
      return false;
    }

    if (!question.trim()) {
      setSubmitError(t('contact.form.question') + ' ' + t('contact.form.error.required'));
      return false;
    }

    if (!message.trim()) {
      setSubmitError(t('contact.form.message') + ' ' + t('contact.form.error.required'));
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset states
    setSubmitError('');
    setSubmitSuccess(false);

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // API call - replace with your actual endpoint
      const response = await fetch('https://np40nkw6be.execute-api.us-east-1.amazonaws.com/Prod/personal-brand/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.json();

      // Success
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        question: '',
        message: ''
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(t('contact.form.error.failed'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-white dark:bg-gray-900 relative overflow-hidden" itemScope itemType="https://schema.org/ContactPage">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-secondary-100 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="section-title">
          <h2 className="mb-2" itemProp="name">{t('contact.title')}</h2>
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

        <div className="grid md:grid-cols-2 gap-12">
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
                    itemProp="email"
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
                  <div className="text-gray-700 dark:text-gray-300">
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
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                      </iframe>
                    </div>
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">{t('contact.form.title')}</h3>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <p className="text-green-800 dark:text-green-200">
                    {t('contact.form.success')}
                  </p>
                </motion.div>
              )}

              {/* Error Message */}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3"
                >
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <p className="text-red-800 dark:text-red-200">{submitError}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder={t('contact.form.name.placeholder')}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder={t('contact.form.email.placeholder')}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.form.company')} *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder={t('contact.form.company.placeholder')}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="question" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.form.question')} *
                  </label>
                  <textarea
                    id="question"
                    name="question"
                    rows={1}
                    value={formData.question}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder={t('contact.form.question.placeholder')}
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder={t('contact.form.message.placeholder')}
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {t('contact.form.send')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
