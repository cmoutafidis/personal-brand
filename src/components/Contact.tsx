import ContactContent from './ContactContent';
import ContactForm from './ContactForm';
import {Language} from '@/types/language';

// 2026-10-08 (F16, F-D141): the Contact form's message box asked for the column headers. 2026-10-22
// (offer-os broad home BR-G07): the page is broad, so the box shows `contact.form.message.placeholder`,
// "What do you want to build?", from offer-os companies/fiji-solutions/site/03-copy-home.md, "Contact".

interface ContactProps {
  t: (key: string) => string;
  element: string;
  lang: Language;
}

export default function Contact({t, element}: ContactProps) {
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
          {/* 2026-10-22 (offer-os broad home BR-G07): the form sends no offer_slug, since the page is
              broad; form_location stays 'contact'. (2026-10-08 to 2026-10-22 it sent sheet-to-app, F-D135.) */}
          <ContactForm/>
        </div>
      </div>
    </section>
  );
}