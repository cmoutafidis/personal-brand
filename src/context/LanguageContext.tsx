import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Language } from '../types/language';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check URL path for language
    const path = window.location.pathname;
    if (path.startsWith('/el/') || path === '/el') {
      setLanguageState('el');
    } else {
      setLanguageState('en');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);

    // Update URL without reload
    const currentPath = location.pathname;
    let newPath;

    if (lang === 'el') {
      if (currentPath.startsWith('/el/')) {
        newPath = currentPath;
      } else if (currentPath === '/') {
        newPath = '/el';
      } else {
        newPath = `/el${currentPath}`;
      }
    } else {
      if (currentPath.startsWith('/el/')) {
        newPath = currentPath.replace('/el', '') || '/';
      } else if (currentPath === '/el') {
        newPath = '/';
      } else {
        newPath = currentPath;
      }
    }

    if (newPath !== currentPath) {
      navigate(newPath, { replace: true });
    }
  };

  // Simple translation function - in a real app, you'd use a proper i18n library
  const t = (key: string): string => {
    const translations: Record<Language, Record<string, string>> = {
      en: {
        // Navigation
        'nav.home': 'Home',
        'nav.portfolio': 'Portfolio',
        'nav.contact': 'Contact',
        'nav.legal': 'Legal',

        // Hero Section
        'hero.title': 'We help your business grow online',
        'hero.cta': 'Yes, I Want That',
        'hero.talk': "Let's talk now",
        'hero.description1': 'New technology is very important for your business.',
        'hero.description2': 'However, there are already 101 things on your to-do list. And they are all important!',

        // Challenges
        'challenges.title': 'Common Business Challenges',
        'challenges.subtitle': 'All traditional businesses face the same problems.',
        'challenges.old_tech.title': 'Old Technology',
        'challenges.old_tech.description': 'It is very hard to compete using outdated technology. You are missing opportunities and it is hard to automate processes and scale.',
        'challenges.slow.title': 'Everyone is slow',
        'challenges.slow.description': 'Traditional agencies work slowly and are very expensive. On the other hand, hiring good staff is difficult. And even if you find someone good, one day they might leave.',
        'challenges.money.title': 'Money wasted',
        'challenges.money.description': 'A lot of manual tasks that staff has been doing for years can now be automated. This costs you tons of money and time.',

        // Solutions
        'solutions.title': 'How We Help',
        'solutions.subtitle': 'Here is what we can do for you.',
        'solutions.experts.title': 'We are experts',
        'solutions.experts.description': 'Our engineers and consultants stay ahead of market trends, specializing in the latest technologies and AI products.',
        'solutions.fast.title': 'Fast and Good',
        'solutions.fast.description': 'We deliver high quality products, and we deliver them fast. There is no such thing as "It can either be fast, or it can be good". We do both.',
        'solutions.industry.title': 'Industry Knowledge',
        'solutions.industry.description': 'With experience across multiple sectors, we understand your market and deliver solutions that address specific industry needs.',
        'solutions.payment.title': 'Payment Solutions',
        'solutions.payment.description': 'We help you integrate any payment method into your business, from traditional card payments to even cryptocurrency solutions.',
        'solutions.cta.title': "Don't Let Your Competition Get Ahead",
        'solutions.cta.description': "The AI revolution is happening now. Companies that adapt early will lead their industries. Don't wait until it's too late. Start your transformation today.",
        'solutions.cta.button': 'Contact Us Now',

        // Contact
        'contact.title': 'Get A Free Consultation',
        'contact.subtitle1': 'Would you like to know what we can do for you?',
        'contact.subtitle2': 'Fill out the form below and we will contact you within 48 hours for a free consultation.',
        'contact.subtitle3': 'No costs, no obligations, no annoying sales pitch.',
        'contact.info.title': 'Contact Information',
        'contact.form.title': 'Send a Message',
        'contact.form.name': 'Your Name',
        'contact.form.name.placeholder': 'John Doe',
        'contact.form.email': 'Email Address',
        'contact.form.email.placeholder': 'john.doe@example.com',
        'contact.form.company': 'Company',
        'contact.form.company.placeholder': 'Your Company Name',
        'contact.form.question': 'Question',
        'contact.form.question.placeholder': 'What is your most important question?',
        'contact.form.message': 'Your Message',
        'contact.form.message.placeholder': 'How can we help you?',
        'contact.form.send': 'Send Message',
        'contact.form.sending': 'Sending...',
        'contact.form.success': 'Thank you! Your message has been sent successfully. We\'ll get back to you within 48 hours.',
        'contact.connect': 'Connect With Us',

        // Services
        'services.title': 'Our Work',
        'services.subtitle': 'Projects we have done with our existing clients.',

        // Footer
        'footer.description': 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development.',
        'footer.links': 'Quick Links',
        'footer.projects': 'Projects',
        'footer.rights': 'All rights reserved.',
      },
      el: {
        // Navigation
        'nav.home': 'Αρχική',
        'nav.portfolio': 'Χαρτοφυλάκιο',
        'nav.contact': 'Επικοινωνία',
        'nav.legal': 'Νομικά',

        // Hero Section
        'hero.title': 'Βοηθάμε την επιχείρησή σας να αναπτυχθεί διαδικτυακά',
        'hero.cta': 'Ναι, το θέλω αυτό',
        'hero.talk': 'Ας μιλήσουμε τώρα',
        'hero.description1': 'Η νέα τεχνολογία είναι πολύ σημαντική για την επιχείρησή σας.',
        'hero.description2': 'Ωστόσο, υπάρχουν ήδη 101 πράγματα στη λίστα εργασιών σας. Και όλα είναι σημαντικά!',

        // Challenges
        'challenges.title': 'Κοινές Επιχειρηματικές Προκλήσεις',
        'challenges.subtitle': 'Όλες οι παραδοσιακές επιχειρήσεις αντιμετωπίζουν τα ίδια προβλήματα.',
        'challenges.old_tech.title': 'Παλιά Τεχνολογία',
        'challenges.old_tech.description': 'Είναι πολύ δύσκολο να ανταγωνιστείτε χρησιμοποιώντας ξεπερασμένη τεχνολογία. Χάνετε ευκαιρίες και είναι δύσκολο να αυτοματοποιήσετε διαδικασίες και να κλιμακώσετε.',
        'challenges.slow.title': 'Όλοι είναι αργοί',
        'challenges.slow.description': 'Οι παραδοσιακές εταιρείες εργάζονται αργά και είναι πολύ ακριβές. Από την άλλη, η πρόσληψη καλού προσωπικού είναι δύσκολη. Και ακόμα κι αν βρείτε κάποιον καλό, μια μέρα μπορεί να φύγει.',
        'challenges.money.title': 'Χαμένα χρήματα',
        'challenges.money.description': 'Πολλές χειροκίνητες εργασίες που το προσωπικό κάνει εδώ και χρόνια μπορούν τώρα να αυτοματοποιηθούν. Αυτό σας κοστίζει τόνους χρημάτων και χρόνου.',

        // Solutions
        'solutions.title': 'Πώς Βοηθάμε',
        'solutions.subtitle': 'Ιδού τι μπορούμε να κάνουμε για εσάς.',
        'solutions.experts.title': 'Είμαστε ειδικοί',
        'solutions.experts.description': 'Οι μηχανικοί και σύμβουλοί μας παραμένουν μπροστά από τις τάσεις της αγοράς, ειδικευόμενοι στις τελευταίες τεχνολογίες και προϊόντα AI.',
        'solutions.fast.title': 'Γρήγορα και Καλά',
        'solutions.fast.description': 'Παραδίδουμε προϊόντα υψηλής ποιότητας, και τα παραδίδουμε γρήγορα. Δεν υπάρχει κάτι τέτοιο όπως "Μπορεί να είναι γρήγορο ή να είναι καλό". Κάνουμε και τα δύο.',
        'solutions.industry.title': 'Γνώση Κλάδου',
        'solutions.industry.description': 'Με εμπειρία σε πολλούς τομείς, κατανοούμε την αγορά σας και παραδίδουμε λύσεις που αντιμετωπίζουν συγκεκριμένες ανάγκες του κλάδου.',
        'solutions.payment.title': 'Λύσεις Πληρωμών',
        'solutions.payment.description': 'Σας βοηθάμε να ενσωματώσετε οποιαδήποτε μέθοδο πληρωμής στην επιχείρησή σας, από παραδοσιακές πληρωμές με κάρτα έως και λύσεις κρυπτονομισμάτων.',
        'solutions.cta.title': 'Μην αφήσετε τον ανταγωνισμό να προηγηθεί',
        'solutions.cta.description': 'Η επανάσταση του AI συμβαίνει τώρα. Οι εταιρείες που προσαρμόζονται νωρίς θα ηγηθούν των κλάδων τους. Μην περιμένετε μέχρι να είναι πολύ αργά. Ξεκινήστε τη μεταμόρφωσή σας σήμερα.',
        'solutions.cta.button': 'Επικοινωνήστε μαζί μας τώρα',

        // Contact
        'contact.title': 'Λάβετε Δωρεάν Συμβουλευτική',
        'contact.subtitle1': 'Θα θέλατε να μάθετε τι μπορούμε να κάνουμε για εσάς;',
        'contact.subtitle2': 'Συμπληρώστε την παρακάτω φόρμα και θα επικοινωνήσουμε μαζί σας εντός 48 ωρών για δωρεάν συμβουλευτική.',
        'contact.subtitle3': 'Χωρίς κόστος, χωρίς υποχρεώσεις, χωρίς ενοχλητική πώληση.',
        'contact.info.title': 'Στοιχεία Επικοινωνίας',
        'contact.form.title': 'Στείλτε Μήνυμα',
        'contact.form.name': 'Το Όνομά σας',
        'contact.form.name.placeholder': 'Γιάννης Παπαδόπουλος',
        'contact.form.email': 'Διεύθυνση Email',
        'contact.form.email.placeholder': 'giannis.papadopoulos@example.com',
        'contact.form.company': 'Εταιρεία',
        'contact.form.company.placeholder': 'Το όνομα της εταιρίας σου',
        'contact.form.question': 'Ερώτηση',
        'contact.form.question.placeholder': 'Ποια είναι η πιο σημαντική ερώτησή σας;',
        'contact.form.message': 'Το Μήνυμά σας',
        'contact.form.message.placeholder': 'Πώς μπορούμε να σας βοηθήσουμε;',
        'contact.form.send': 'Αποστολή Μηνύματος',
        'contact.form.sending': 'Αποστολή...',
        'contact.form.success': 'Ευχαριστούμε! Το μήνυμά σας στάλθηκε επιτυχώς. Θα επικοινωνήσουμε μαζί σας εντός 48 ωρών.',
        'contact.connect': 'Συνδεθείτε μαζί μας',

        // Services
        'services.title': 'Η Δουλειά μας',
        'services.subtitle': 'Έργα που έχουμε κάνει με τους υπάρχοντες πελάτες μας.',

        // Footer
        'footer.description': 'Η Fiji Solutions είναι μια εταιρεία λογισμικού στη Θεσσαλονίκη, Ελλάδα, που ειδικεύεται σε συμβουλευτικές υπηρεσίες IT και ανάπτυξη προσαρμοσμένου λογισμικού.',
        'footer.links': 'Γρήγοροι Σύνδεσμοι',
        'footer.projects': 'Έργα',
        'footer.rights': 'Όλα τα δικαιώματα διατηρούνται.',
      }
    };

    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
