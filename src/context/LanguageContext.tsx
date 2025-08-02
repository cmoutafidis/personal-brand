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
  const [language, setLanguageState] = useState<Language>('el');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check URL path for language
    const path = window.location.pathname;
    if (path.startsWith('/en/') || path === '/en') {
      setLanguageState('en');
    } else if (path.startsWith('/el/') || path === '/el') {
      setLanguageState('el');
    } else {
      // Default to Greek for any other path
      setLanguageState('el');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);

    // Update URL without reload
    const currentPath = location.pathname;
    let newPath;

    if (lang === 'en') {
      if (currentPath.startsWith('/en/')) {
        newPath = currentPath;
      } else if (currentPath.startsWith('/el/')) {
        newPath = currentPath.replace('/el', '/en');
      } else if (currentPath === '/el') {
        newPath = '/en';
      } else {
        newPath = `/en${currentPath === '/' ? '' : currentPath}`;
      }
    } else {
      if (currentPath.startsWith('/el/')) {
        newPath = currentPath;
      } else if (currentPath.startsWith('/en/')) {
        newPath = currentPath.replace('/en', '/el');
      } else if (currentPath === '/en') {
        newPath = '/el';
      } else {
        newPath = `/el${currentPath === '/' ? '' : currentPath}`;
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
        'contact.form.error.failed': 'Failed to send message. Please try again or contact us directly.',
        'contact.form.error.required': 'is required',
        'contact.form.error.email': 'Please enter a valid email address',
        'contact.connect': 'Connect With Us',

        // Contact Location
        'contact.location': 'Location',
        'contact.address.street': 'Marinou Antipa 40',
        'contact.address.city': 'Pilea 570 01, Greece',

        // Services
        'services.title': 'Our Work',
        'services.subtitle': 'Projects we have done with our existing clients.',

        // Portfolio/Projects
        'projects.title': 'Projects',
        'projects.subtitle': 'Featured work and contributions',
        'projects.fiji.title': 'Fiji Financial Dashboard',
        'projects.fiji.description': 'Platform for tracking Fed net liquidity and Toros leverage tokens performance. Provides comprehensive financial analytics for investors.',
        'projects.catalytics.title': 'Catalytics Pro',
        'projects.catalytics.description': 'Community project for Jupiter Exchange. Provides real-time analytics and insights for traders and investors in the ecosystem.',
        'projects.checkitout': 'Check it out',
        'projects.code': 'Code',

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
        'contact.form.error.failed': 'Αποτυχία αποστολής μηνύματος. Παρακαλώ δοκιμάστε ξανά ή επικοινωνήστε μαζί μας απευθείας.',
        'contact.form.error.required': 'είναι υποχρεωτικό',
        'contact.form.error.email': 'Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email',
        'contact.connect': 'Συνδεθείτε μαζί μας',

        // Contact Location
        'contact.location': 'Τοποθεσία',
        'contact.address.street': 'Μαρίνου Αντύπα 40',
        'contact.address.city': '57001 Πυλαία, Ελλάδα',

        // Services
        'services.title': 'Η Δουλειά μας',
        'services.subtitle': 'Έργα που έχουμε κάνει με τους υπάρχοντες πελάτες μας.',

        // Portfolio/Projects
        'projects.title': 'Έργα',
        'projects.subtitle': 'Επιλεγμένα έργα και συνεισφορές',
        'projects.fiji.title': 'Fiji Financial Dashboard',
        'projects.fiji.description': 'Πλατφόρμα για την παρακολούθηση της καθαρής ρευστότητας της Fed και της απόδοσης των leverage tokens της Toros. Παρέχει ολοκληρωμένες χρηματοοικονομικές αναλύσεις για επενδυτές.',
        'projects.catalytics.title': 'Catalytics Pro',
        'projects.catalytics.description': 'Κοινοτικό έργο για το Jupiter Exchange. Παρέχει αναλύσεις και πληροφορίες σε πραγματικό χρόνο για traders και επενδυτές στο οικοσύστημα.',
        'projects.checkitout': 'Δείτε το',
        'projects.code': 'Κώδικας',

        // Footer
        'footer.description': 'Η Fiji Solutions είναι μια εταιρεία λογισμικού στη Θεσσαλονίκη, Ελλάδα, που ειδικεύεται σε συμβουλευτικές υπηρεσίες IT και ανάπτυξη προσαρμοσμένου λογισμικού.',
        'footer.links': 'Γρήγοροι Σύνδεσμοι',
        'footer.projects': 'Έργα',
        'footer.rights': 'Όλα τα δικαιώματα διατηρούνται.',

        // Services - detailed content
        'services.software.title': 'Ανάπτυξη Λογισμικού',
        'services.software.description': 'Ολοκληρωμένη ανάπτυξη εφαρμογών ιστού, λύσεων κινητών και εταιρικού λογισμικού που ταιριάζουν στις συγκεκριμένες επιχειρηματικές ανάγκες.',
        'services.software.feature1': 'Προσαρμοσμένες Εφαρμογές Λογισμικού',
        'services.software.feature2': 'Εφαρμογές Ιστού',
        'services.software.feature3': 'Εφαρμογές Κινητών',
        'services.software.feature4': 'Ενσωμάτωση Συστημάτων',

        'services.enterprise.title': 'Ανάπτυξη Εταιρικού Λογισμικού',
        'services.enterprise.description': 'Εξειδικευμένες συμβουλευτικές υπηρεσίες και υλοποίηση λύσεων cloud σε μεγάλες πλατφόρμες.',
        'services.enterprise.feature1': 'Συστήματα Λογισμικού Μεγάλης Κλίμακας',
        'services.enterprise.feature2': 'Ενσωμάτωση Επιχειρηματικών Διαδικασιών',
        'services.enterprise.feature3': 'Κλιμακώσιμη Αρχιτεκτονική',
        'services.enterprise.feature4': 'Εταιρικές Λύσεις',

        'services.ai.title': 'Λύσεις AI',
        'services.ai.description': 'Υλοποιήσεις και ενσωματώσεις AI που σας εξοικονομούν χρήματα και θα σας φέρουν περισσότερους πελάτες.',
        'services.ai.feature1': 'AI Chat Agents',
        'services.ai.feature2': 'AI Voice Assistants',
        'services.ai.feature3': 'Service Desk με AI',
        'services.ai.feature4': 'Αυτοματισμοί Διαδικασιών',

        'services.payment.title': 'Ενσωμάτωση Πληρωμών',
        'services.payment.description': 'Τα χρήματα είναι το οξυγόνο της εταιρείας σας. Κάνουμε τη διαδικασία απλή και επιτρέπουμε στους πελάτες σας να πληρώνουν με ποικιλία μεθόδων πληρωμής.',
        'services.payment.feature1': 'Επεξεργασία Πιστωτικών Καρτών',
        'services.payment.feature2': 'Ενσωμάτωση Payment Gateway',
        'services.payment.feature3': 'Ψηφιακά Πορτοφόλια',
        'services.payment.feature4': 'Πληρωμές Κρυπτονομισμάτων',

        'services.blockchain.title': 'Ανάπτυξη Blockchain',
        'services.blockchain.description': 'Σύγχρονες λύσεις blockchain για διάφορους κλάδους και περιπτώσεις χρήσης.',
        'services.blockchain.feature1': 'Ανάπτυξη Smart Contracts',
        'services.blockchain.feature2': 'DeFi Εφαρμογές',
        'services.blockchain.feature3': 'Ανάπτυξη Tokens',
        'services.blockchain.feature4': 'Ενσωμάτωση Blockchain',

        'services.consulting.title': 'Συμβουλευτικές Υπηρεσίες IT',
        'services.consulting.description': 'Διασφαλίζουμε ότι η επιχείρησή σας λειτουργεί ομαλά και αποδοτικά. Αυτό είναι πολύ σημαντικό για την ανάπτυξη της επιχείρησής σας.',
        'services.consulting.feature1': 'Στρατηγική Τεχνολογίας',
        'services.consulting.feature2': 'Βελτιστοποίηση Υποδομής',
        'services.consulting.feature3': 'Ψηφιακός Μετασχηματισμός',
        'services.consulting.feature4': 'Ευθυγράμμιση Στρατηγικής IT',

        // Technologies
        'technologies.title': 'Τεχνολογικό Stack',
        'technologies.subtitle': 'Αξιοποιώντας τη δύναμη των τεχνολογιών για να παραδώσουμε εξαιρετικές λύσεις',
        'technologies.frontend': 'Frontend',
        'technologies.backend': 'Backend',
        'technologies.cloud': 'Cloud & DevOps',
        'technologies.ai': 'AI & Δεδομένα',
        'technologies.blockchain': 'Blockchain',
        'technologies.trading': 'Trading',

        // Industries
        'industries.title': 'Κλάδοι που Εξυπηρετούμε',
        'industries.subtitle': 'Παραδίδοντας εξειδίκευση σε πολλούς τομείς',
        'industries.telecom.title': 'Τηλεπικοινωνίες',
        'industries.telecom.description': 'Προηγμένες λύσεις για σύγχρονη υποδομή και υπηρεσίες επικοινωνίας.',
        'industries.banking.title': 'Τραπεζικά & Χρηματοοικονομικά',
        'industries.banking.description': 'Ασφαλή και αποδοτικά συστήματα για χρηματοπιστωτικά ιδρύματα και υπηρεσίες.',
        'industries.consulting.title': 'Συμβουλευτικές Υπηρεσίες',
        'industries.consulting.description': 'Στρατηγικές συμβουλευτικές υπηρεσίες τεχνολογίας για επιχειρηματικό μετασχηματισμό.',
        'industries.travel.title': 'Ταξίδια & Τουρισμός',
        'industries.travel.description': 'Ψηφιακές λύσεις για βελτιωμένες εμπειρίες ταξιδιού και λειτουργίες.',
        'industries.startups.title': 'Startups',
        'industries.startups.description': 'Καινοτόμες λύσεις για την προώθηση της ανάπτυξης και επιτυχίας των startups.',
        'industries.blockchain.title': 'Blockchain',
        'industries.blockchain.description': 'Σύγχρονες λύσεις blockchain για διάφορους κλάδους.',
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
