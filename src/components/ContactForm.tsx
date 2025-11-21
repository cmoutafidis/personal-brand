"use client";

import React, {useState} from 'react';
import {AlertCircle, CheckCircle, Send} from 'lucide-react';
import {useLanguage} from '@/context/LanguageContext';
import {createTranslationFunction} from "@/translations";

export default function ContactForm() {
  const {language} = useLanguage();

  const t = createTranslationFunction(language);

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

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
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
    const {name, email, company, question, message} = formData;

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
      const response = await fetch('https://np40nkw6be.execute-api.us-east-1.amazonaws.com/Prod/personal-brand/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          message: formData.message.trim(),
          question: formData.question.trim()
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

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
      if (error instanceof Error) {
        setSubmitError(`${t('contact.form.error.failed')}: ${error.message}`);
      } else {
        setSubmitError(t('contact.form.error.failed'));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">{t('contact.form.title')}</h3>

        {/* Success Message */}
        {submitSuccess && (
          <div
            className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0"/>
            <p className="text-green-800 dark:text-green-200">
              {t('contact.form.success')}
            </p>
          </div>
        )}

        {/* Error Message */}
        {submitError && (
          <div
            className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0"/>
            <p className="text-red-800 dark:text-red-200">{submitError}</p>
          </div>
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
            className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {t('contact.form.sending')}
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2"/>
                {t('contact.form.send')}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}