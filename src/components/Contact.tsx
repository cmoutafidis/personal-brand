import ContactContent from './ContactContent';
import ContactForm from './ContactForm';
import {Language} from '@/types/language';

// 2026-10-08 (F16, F-D141): the Contact form's message box asks for the column headers, in the
// words the homepage form already uses (SheetToAppFormSection.tsx), as Charis picked.
const MESSAGE_PLACEHOLDER: Record<Language, string> = {
  en: 'e.g. Order, Customer, Product, Quantity, Due date, Status, Owner',
  el: 'π.χ. Παραγγελία, Πελάτης, Προϊόν, Ποσότητα, Παράδοση, Κατάσταση, Υπεύθυνος'
};

interface ContactProps {
  t: (key: string) => string;
  element: string;
  lang: Language;
}

export default function Contact({t, element, lang}: ContactProps) {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
      <div
        className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-secondary-100 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          <ContactContent t={t} element={element ?? "h1"}/>
          {/* 2026-10-08 (F16, F-D135): the Contact page leads with the 7-day prototype, so its
              leads carry offer_slug sheet-to-app; form_location stays 'contact'. */}
          <ContactForm offerSlug="sheet-to-app" messagePlaceholderOverride={MESSAGE_PLACEHOLDER[lang]}/>
        </div>
      </div>
    </section>
  );
}