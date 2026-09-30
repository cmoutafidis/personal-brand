'use client';

import React from 'react';
import {ArrowRight} from 'lucide-react';
import {useLanguage} from '@/context/LanguageContext';
import TrackedLink from '@/components/TrackedLink';
import {CTA_CLICK_EVENT} from '@/utils/gtag';

interface ContactButtonProps {
  label: string;
}

// The hero button of both homepages. 2026-09-30 (G20, offer-os gtm/sheet-to-app-rollout/PLAN.md
// D5): the homepage is the hook for the 7-Day Sheet-to-App Prototype, so this button scrolls to
// the homepage's own sheet-to-app form (#sheet-to-app-form, SheetToAppFormSection.tsx). Until
// that date it went to /[locale]/business-process-audit. The click is the G19 `cta_click` event,
// with `cta_location` 'home-hero' so GA4 tells it apart from the landing page's buttons.
const ContactButton: React.FC<ContactButtonProps> = ({label}) => {
  const {language} = useLanguage();

  return (
    <TrackedLink
      event={CTA_CLICK_EVENT}
      params={{cta_location: 'home-hero', locale: language, offer_slug: 'sheet-to-app'}}
      href="#sheet-to-app-form"
      className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 text-lg cursor-pointer"
    >
      {label}
      <ArrowRight className="ml-2 h-5 w-5"/>
    </TrackedLink>
  );
};

export default ContactButton;
