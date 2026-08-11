"use client";

import React, {useEffect, useRef, useState} from 'react';
import {AlertCircle, CheckCircle, Send} from 'lucide-react';
import {useLanguage} from '@/context/LanguageContext';
import {createTranslationFunction} from "@/translations";
import { reportConversion } from '@/utils/gtag';
import {Language} from '@/types/language';

interface ContactFormProps {
  languageOverride?: Language;
  hideTitle?: boolean;
  /** When set, the question field is hidden and this value is sent as `question` (lead-source marker). */
  presetQuestion?: string;
  /** When true, the message field is optional and skipped during validation. */
  messageOptional?: boolean;
  messageLabelOverride?: string;
  messagePlaceholderOverride?: string;
  submitLabelOverride?: string;
  successMessageOverride?: string;
}

export default function ContactForm({
  languageOverride,
  hideTitle = false,
  presetQuestion,
  messageOptional = false,
  messageLabelOverride,
  messagePlaceholderOverride,
  submitLabelOverride,
  successMessageOverride
}: ContactFormProps = {}) {
  const {language: contextLanguage} = useLanguage();
  const language = languageOverride ?? contextLanguage;

  const t = createTranslationFunction(language);

  // Form state.
  //
  // `heardAbout` is state only and is NOT a sixth key in the request body. The endpoint accepts
  // exactly name, email, company, question and message and 500s on anything else, so the answer
  // rides at the end of `message`. It is asked because roughly 70-80% of B2B journeys strip
  // referrer data: someone who sees a post, searches the name days later and fills this form
  // arrives in analytics as "direct", and the content programme then gets judged on numbers that
  // cannot tell it apart from luck.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    question: '',
    message: '',
    heardAbout: ''
  });

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }
  }, []);

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
    const {name, email, company, question, message, heardAbout} = formData;

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

    if (!presetQuestion && !question.trim()) {
      setSubmitError(t('contact.form.question') + ' ' + t('contact.form.error.required'));
      return false;
    }

    if (!messageOptional && !message.trim()) {
      setSubmitError(t('contact.form.message') + ' ' + t('contact.form.error.required'));
      return false;
    }

    // Required on every caller, including the ones that relax `message` and preset `question`.
    // There is deliberately no prop to switch it off: an opt-out is the hole through which this
    // measurement quietly stops covering the surfaces that matter most.
    if (!heardAbout.trim()) {
      setSubmitError(t('contact.form.heardAbout.error'));
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

    // The attribution answer is appended to `message` rather than sent as its own key, and the
    // label is English on both locales so every submission reads the same way in one inbox.
    // Joined through filter(Boolean) because `messageOptional` callers can leave the message
    // empty, and a body that opens with two blank lines is a worse record than a short one.
    const messageWithAttribution = [
      formData.message.trim(),
      `How did you hear about us: ${formData.heardAbout.trim()}`
    ].filter(Boolean).join('\n\n');

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
          message: messageWithAttribution,
          question: presetQuestion || formData.question.trim()
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Success
      setSubmitSuccess(true);
      reportConversion();
      setFormData({
        name: '',
        email: '',
        company: '',
        question: '',
        message: '',
        heardAbout: ''
      });

      // Auto-hide success message after 5 seconds
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
      hideTimer.current = setTimeout(() => {
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
        {!hideTitle && (
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">{t('contact.form.title')}</h3>
        )}

        {/* Success Message */}
        {submitSuccess && (
          <div
            role="status"
            className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0"/>
            <p className="text-green-800 dark:text-green-200">
              {successMessageOverride ?? t('contact.form.success')}
            </p>
          </div>
        )}

        {/* Error Message */}
        {submitError && (
          <div
            role="alert"
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

          {!presetQuestion && (
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
          )}

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {messageLabelOverride ?? t('contact.form.message')}{!messageOptional && ' *'}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder={messagePlaceholderOverride ?? t('contact.form.message.placeholder')}
              disabled={isSubmitting}
            ></textarea>
          </div>

          {/* Last on the form on purpose. It is the one question here that serves us rather than
              the reader, so it does not stand between them and the message they came to write.
              Free text rather than a dropdown: a fixed list of channels only ever answers which
              of the ones we thought of it was, and this exists to catch the ones we did not. */}
          <div>
            <label htmlFor="heardAbout" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('contact.form.heardAbout')} *
            </label>
            <input
              type="text"
              id="heardAbout"
              name="heardAbout"
              value={formData.heardAbout}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder={t('contact.form.heardAbout.placeholder')}
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                {t('contact.form.sending')}
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2"/>
                {submitLabelOverride ?? t('contact.form.send')}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
