import ContactContent from './ContactContent';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-secondary-100 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          <ContactContent />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}