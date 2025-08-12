'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Language } from '@/types/language';

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
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check URL path for language
    if (pathname.startsWith('/en/') || pathname === '/en') {
      setLanguageState('en');
    } else if (pathname.startsWith('/el/') || pathname === '/el') {
      setLanguageState('el');
    } else {
      // Default to English for any other path
      setLanguageState('en');
    }
  }, [pathname]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);

    // Update URL without reload
    let newPath;

    if (lang === 'en') {
      if (pathname.startsWith('/en/')) {
        newPath = pathname;
      } else if (pathname.startsWith('/el/')) {
        newPath = pathname.replace('/el', '/en');
      } else if (pathname === '/el') {
        newPath = '/en';
      } else {
        newPath = `/en${pathname === '/' ? '' : pathname}`;
      }
    } else {
      if (pathname.startsWith('/el/')) {
        newPath = pathname;
      } else if (pathname.startsWith('/en/')) {
        newPath = pathname.replace('/en', '/el');
      } else if (pathname === '/en') {
        newPath = '/el';
      } else {
        newPath = `/el${pathname === '/' ? '' : pathname}`;
      }
    }

    if (newPath !== pathname) {
      router.push(newPath);
    }
  };

  // Translation function
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
        'challenges.title': 'Common Challenges Businesses Face',
        'challenges.subtitle': 'All traditional businesses face the same problems.',
        'challenges.old_tech.title': 'Old Technology',
        'challenges.old_tech.description': 'It is very hard to compete using outdated technology. You are missing opportunities and it is hard to automate processes and scale.',
        'challenges.slow.title': 'Everyone is slow',
        'challenges.slow.description': 'You could hire a traditional agency, but they all work slowly and are very expensive. On the other hand, hiring good staff is difficult. And even if you find someone good, one day they might leave.',
        'challenges.money.title': 'Money wasted',
        'challenges.money.description': 'A lot of everyday tasks that your staff has been doing for years can now be automated. This costs you tons of money and time.',

        // Solutions
        'solutions.title': 'How We Help You',
        'solutions.subtitle': 'Here is what we can do for you.',
        'solutions.experts.title': 'We are experts',
        'solutions.experts.description': 'Our consultants are specializing in the latest technologies and AI products.',
        'solutions.fast.title': 'Fast and Good',
        'solutions.fast.description': 'We deliver high quality products, and we deliver them fast.',
        'solutions.industry.title': 'Industry Knowledge',
        'solutions.industry.description': 'We understand your market and deliver solutions that address specific industry needs.',
        'solutions.payment.title': 'Payment Solutions',
        'solutions.payment.description': 'Money keeps your business alive. We make payments super easy, so your customers can pay any way they want.',
        'solutions.cta.title': "Don't Let Your Competition Get Ahead",
        'solutions.cta.description': "The AI revolution is happening now. Companies that adapted are leading their industries. Don't wait until it's too late. Start today.",
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

        // Portfolio/Projects
        'projects.title': 'Projects',
        'projects.subtitle': 'Featured work and contributions',
        'projects.fiji.title': 'Fiji Financial Dashboard',
        'projects.fiji.description': 'Platform for tracking Fed net liquidity and Toros leverage tokens performance. Provides comprehensive financial analytics for investors.',
        'projects.catalytics.title': 'Catalytics Pro',
        'projects.catalytics.description': 'Community project for Jupiter Exchange. Provides real-time analytics and insights for investors in the ecosystem.',
        'projects.checkitout': 'Check it out',
        'projects.code': 'Source Code',

        // Services
        'services.title': 'Our Work',
        'services.subtitle': 'Projects we have done with our existing clients.',
        'services.software.title': 'Software Development',
        'services.software.description': 'End-to-end development of web applications, mobile solutions, and enterprise software that fit to specific business needs.',
        'services.software.feature1': 'Custom Software Applications',
        'services.software.feature2': 'Web Applications',
        'services.software.feature3': 'Mobile Applications',
        'services.software.feature4': 'System Integration',
        'services.enterprise.title': 'Enterprise Software Development',
        'services.enterprise.description': 'Expert consulting and implementation of cloud solutions across major platforms.',
        'services.enterprise.feature1': 'Large-scale Software Systems',
        'services.enterprise.feature2': 'Business Process Integration',
        'services.enterprise.feature3': 'Scalable Architecture',
        'services.enterprise.feature4': 'Enterprise Solutions',
        'services.ai.title': 'AI Solutions',
        'services.ai.description': 'AI implementations and integrations that save you money and will bring you more customers.',
        'services.ai.feature1': 'AI Chat Agents',
        'services.ai.feature2': 'AI Voice Assistants',
        'services.ai.feature3': 'AI-Powered Service Desk',
        'services.ai.feature4': 'Process Automations',
        'services.payment.title': 'Payment Integration',
        'services.payment.description': 'Money is the oxygen of your company. We make the process simple and allow your customers to pay you with a variety of payment methods.',
        'services.payment.feature1': 'Credit Card Processing',
        'services.payment.feature2': 'Payment Gateway Integration',
        'services.payment.feature3': 'Digital Wallets',
        'services.payment.feature4': 'Crypto Payments',
        'services.blockchain.title': 'Blockchain Development',
        'services.blockchain.description': 'Modern blockchain solutions for various industries and use cases.',
        'services.blockchain.feature1': 'Smart Contract Development',
        'services.blockchain.feature2': 'DeFi Applications',
        'services.blockchain.feature3': 'Blockchain Integration',
        'services.consulting.title': 'IT Consulting',
        'services.consulting.description': 'We make sure that your business runs smoothly and efficiently. This is very important for your business to grow.',
        'services.consulting.feature1': 'Technology Strategy',
        'services.consulting.feature2': 'Infrastructure Optimization',
        'services.consulting.feature3': 'Digital Transformation',
        'services.consulting.feature4': 'IT Strategy Alignment',

        // Technologies
        'technologies.title': 'Technology Stack',
        'technologies.subtitle': 'Leveraging the power of technologies to deliver exceptional solutions',
        'technologies.frontend': 'Frontend',
        'technologies.backend': 'Backend',
        'technologies.cloud': 'Cloud & DevOps',
        'technologies.ai': 'AI & Data',
        'technologies.blockchain': 'Blockchain',
        'technologies.trading': 'Trading',

        // Industries
        'industries.title': 'Industries We Serve',
        'industries.subtitle': 'Delivering expertise across multiple sectors',
        'industries.telecom.title': 'Telecommunications',
        'industries.telecom.description': 'Advanced solutions for modern communication infrastructure and services.',
        'industries.banking.title': 'Banking & Finance',
        'industries.banking.description': 'Secure and efficient systems for financial institutions and services.',
        'industries.consulting.title': 'Consulting',
        'industries.consulting.description': 'Strategic technology consulting for business transformation.',
        'industries.travel.title': 'Travel & Tourism',
        'industries.travel.description': 'Digital solutions for enhanced travel experiences and operations.',
        'industries.startups.title': 'Startups',
        'industries.startups.description': 'Innovative solutions to drive startup growth and success.',
        'industries.blockchain.title': 'Blockchain',
        'industries.blockchain.description': 'Modern blockchain solutions for various industries.',

        // Footer
        'footer.description': 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development.',
        'footer.links': 'Quick Links',
        'footer.projects': 'Projects',
        'footer.rights': 'All rights reserved.',

        // Vapi
        'vapi.connecting': 'Connecting...',
        'vapi.end_call': 'End Call',

        // Legal Page
        'legal.title': 'Legal Information',
        'legal.subtitle': 'Company registration and legal details',
        'legal.website_publicity': 'WEBSITE PUBLICITY INFORMATION',
        'legal.company_name': 'Company Name',
        'legal.address': 'Address',
        'legal.gemi_number': 'GEMI Number',
        'legal.corporate_capital': 'Corporate Capital',
        'legal.corporate_shares': 'Corporate Shares',
        'legal.corporate_shares_description': '2.000 capital corporate shares with a nominal value of 1.00 euro each',
        'legal.partner': 'Partner',
        'legal.administrator': 'Administrator',
        'legal.name': 'Name',
        'legal.fathers_name': "Father's Name",
        'legal.tax_id': 'Tax Identification Number',
        'legal.identity_card': 'Identity Card Number',

        // Legal Data Values
        'legal.data.company_full_name': 'Fiji Solutions SINGLE MEMBER PRIVATE COMPANY (IKE)',
        'legal.data.company_address': 'MARINOU ANTIPA 40, 570 01, PILEA, THESSALONIKI',
        'legal.data.gemi_number': '185101306000',
        'legal.data.corporate_capital': '2.000 euro',
        'legal.data.partner_name': 'CHARALAMPOS MOUTAFIDIS',
        'legal.data.partner_father': 'CHRISTOS',
        'legal.data.partner_tax_id': 'EL167515853',
        'legal.data.partner_address': 'ELLIS 5, 56625, SIKIES',
        'legal.data.admin_name': 'CHARALAMPOS MOUTAFIDIS',
        'legal.data.admin_identity': 'ΑΟ1277016',
        'legal.data.admin_tax_id': 'EL167515853',
      },
      el: {
        // Navigation
        'nav.home': 'Αρχική',
        'nav.portfolio': 'Η Δουλειά μας',
        'nav.contact': 'Επικοινωνία',
        'nav.legal': 'Νομικά',

        // Hero Section
        'hero.title': 'Βοηθάμε την επιχείρησή σου να μεγαλώσει online',
        'hero.cta': 'Ναι, αυτό θέλω',
        'hero.talk': 'Ας μιλήσουμε τώρα',
        'hero.description1': 'Οι νέες τεχνολογίες είναι πολύ σημαντικές για την επιχείρησή σου.',
        'hero.description2': 'Αλλά έχεις ήδη ένα σωρό πράγματα να κάνεις. Και είναι όλα επίσης σημαντικά!',

        // Challenges
        'challenges.title': 'Κοινές Προκλήσεις Επιχειρήσεων',
        'challenges.subtitle': 'Όλες οι παραδοσιακές επιχειρήσεις έχουν παρόμοιες προκλήσεις.',
        'challenges.old_tech.title': 'Παλιές Τεχνολογίες',
        'challenges.old_tech.description': 'Είναι δύσκολο να τα βάλεις με τον ανταγωνισμό με ξεπερασμένες τεχνολογίες. Χάνεις ευκαιρίες και δεν μπορείς εύκολα να αυτοματοποιήσεις διαδικασίες ή να μεγαλώσεις.',
        'challenges.slow.title': 'Όλοι είναι αργοί',
        'challenges.slow.description': 'Μπορείς να προσλάβεις μια εταιρεία, αλλά όλες είναι αργές και πανάκριβες. Επίσης, το να βρεις καλό προσωπικό είναι δύσκολο. Και ακόμα κι αν βρεις κάποιον καλό, μπορεί να την κάνει μια μέρα.',
        'challenges.money.title': 'Χαμένα λεφτά',
        'challenges.money.description': 'Πολλές δουλειές που κάνει το προσωπικό σου εδώ και χρόνια γίνονται πλέον αυτόματα. Αυτό σου κοστίζει ένα σωρό λεφτά και χρόνο.',

        // Solutions
        'solutions.title': 'Πώς βοηθάμε εμείς',
        'solutions.subtitle': 'Να τι μπορούμε να κάνουμε για σένα.',
        'solutions.experts.title': 'Είμαστε ειδικοί',
        'solutions.experts.description': 'Η ομάδα μας ξέρει καλά τις τελευταίες τεχνολογίες και τα προϊόντα AI.',
        'solutions.fast.title': 'Γρήγορα και καλά',
        'solutions.fast.description': 'Κάνουμε κορυφαία δουλειά, και την παραδίδουμε γρήγορα.',
        'solutions.industry.title': 'Ξέρουμε τον κλάδο σου',
        'solutions.industry.description': 'Καταλαβαίνουμε την αγορά σου και φτιάχνουμε λύσεις που λύνουν τα προβλήματά της.',
        'solutions.payment.title': 'Λύσεις για πληρωμές',
        'solutions.payment.description': 'Τα λεφτά κρατάνε την επιχείρησή σου ζωντανή. Κάνουμε τις πληρωμές απλές και αφήνουμε τους πελάτες σου να πληρώνουν όπως θέλουν.',
        'solutions.cta.title': 'Μην αφήνεις τον ανταγωνισμό να σε περάσει',
        'solutions.cta.description': 'Η επανάσταση του AI γίνεται τώρα. Όσοι το χρησιμοποιούν είναι μπροστά στον κλάδο τους. Μην περιμένεις να είναι αργά. Ξεκίνα σήμερα.',
        'solutions.cta.button': 'Μίλα μαζί μας τώρα',

        // Contact
        'contact.title': 'Δωρεάν συνομιλία',
        'contact.subtitle1': 'Θες να δεις τι μπορούμε να κάνουμε για σένα;',
        'contact.subtitle2': 'Συμπλήρωσε τη φόρμα και θα σου απαντήσουμε σε 48 ώρες για μια δωρεάν συνομιλία.',
        'contact.subtitle3': 'Χωρίς κόστος, χωρίς δεσμεύσεις.',
        'contact.info.title': 'Πώς να μας βρεις',
        'contact.form.title': 'Στείλε μας μήνυμα',
        'contact.form.name': 'Το όνομά σου',
        'contact.form.name.placeholder': 'Γιάννης Παπαδόπουλος',
        'contact.form.email': 'Το Email σου',
        'contact.form.email.placeholder': 'giannis.papadopoulos@example.com',
        'contact.form.company': 'Η Εταιρεία σου',
        'contact.form.company.placeholder': 'Το όνομα της εταιρείας σου',
        'contact.form.question': 'Ερώτηση',
        'contact.form.question.placeholder': 'Ποια είναι η μεγαλύτερη απορία σου;',
        'contact.form.message': 'Το μήνυμά σου',
        'contact.form.message.placeholder': 'Πώς μπορούμε να σε βοηθήσουμε;',
        'contact.form.send': 'Στείλε το μήνυμα',
        'contact.form.sending': 'Στέλνουμε...',
        'contact.form.success': 'Ευχαριστούμε! Το μήνυμά σου στάλθηκε. Θα σου απαντήσουμε σε 48 ώρες.',
        'contact.form.error.failed': 'Κάτι πήγε στραβά. Δοκίμασε ξανά ή επικοινώνησε μαζί μας κατευθείαν.',
        'contact.form.error.required': 'είναι υποχρεωτικό',
        'contact.form.error.email': 'Βάλε ένα κανονικό email',
        'contact.connect': 'Βρες μας online',

        // Contact Location
        'contact.location': 'Πού είμαστε',
        'contact.address.street': 'Μαρίνου Αντύπα 40',
        'contact.address.city': 'Πυλαία 57001, Ελλάδα',

        // Portfolio/Projects
        'projects.title': 'Έργα μας',
        'projects.subtitle': 'Έργα και δουλειές για την κοινότητα',
        'projects.fiji.title': 'Fiji Financial Dashboard',
        'projects.fiji.description': 'Πλατφόρμα που παρακολουθεί τα λεφτά της Fed και την απόδοση των tokens της Toros. Δίνει στους επενδυτές όλα όσα χρειάζονται.',
        'projects.catalytics.title': 'Catalytics Pro',
        'projects.catalytics.description': 'Έργο για το Jupiter Exchange. Προσφέρει αναλύσεις και πληροφορίες σε πραγματικό χρόνο για επενδυτές.',
        'projects.checkitout': 'Δες το',
        'projects.code': 'Ανοιχτός κώδικας',

        // Services
        'services.title': 'Η δουλειά μας',
        'services.subtitle': 'Πράγματα που φτιάξαμε για τους πελάτες μας.',
        'services.software.title': 'Ανάπτυξη Λογισμικού',
        'services.software.description': 'Ολοκληρωμένη ανάπτυξη web εφαρμογών, mobile λύσεων και εταιρικού λογισμικού που ταιριάζει στις συγκεκριμένες επιχειρηματικές ανάγκες.',
        'services.software.feature1': 'Προσαρμοσμένες Εφαρμογές Λογισμικού',
        'services.software.feature2': 'Web Εφαρμογές',
        'services.software.feature3': 'Mobile Εφαρμογές',
        'services.software.feature4': 'Ενσωμάτωση Συστημάτων',
        'services.enterprise.title': 'Εταιρικό Λογισμικό',
        'services.enterprise.description': 'Εξειδικευμένη συμβουλευτική και υλοποίηση cloud λύσεων σε μεγάλες πλατφόρμες.',
        'services.enterprise.feature1': 'Μεγάλα Συστήματα Λογισμικού',
        'services.enterprise.feature2': 'Ενσωμάτωση Επιχειρηματικών Διαδικασιών',
        'services.enterprise.feature3': 'Επεκτάσιμη Αρχιτεκτονική',
        'services.enterprise.feature4': 'Εταιρικές Λύσεις',
        'services.ai.title': 'Λύσεις AI',
        'services.ai.description': 'Υλοποιήσεις και ενσωματώσεις AI που σου εξοικονομούν χρήματα και θα σου φέρουν περισσότερους πελάτες.',
        'services.ai.feature1': 'AI Chat Agents',
        'services.ai.feature2': 'AI Φωνητικοί Βοηθοί',
        'services.ai.feature3': 'AI Service Desk',
        'services.ai.feature4': 'Αυτοματοποιήσεις Διαδικασιών',
        'services.payment.title': 'Ενσωμάτωση Πληρωμών',
        'services.payment.description': 'Τα λεφτά είναι το οξυγόνο της εταιρείας σου. Κάνουμε τη διαδικασία απλή και αφήνουμε τους πελάτες σου να πληρώνουν με διάφορους τρόπους.',
        'services.payment.feature1': 'Επεξεργασία Πιστωτικών Καρτών',
        'services.payment.feature2': 'Ενσωμάτωση Payment Gateway',
        'services.payment.feature3': 'Ψηφιακά Πορτοφόλια',
        'services.payment.feature4': 'Crypto Πληρωμές',
        'services.blockchain.title': 'Ανάπτυξη Blockchain',
        'services.blockchain.description': 'Σύγχρονες blockchain λύσεις για διάφορους κλάδους και περιπτώσεις χρήσης.',
        'services.blockchain.feature1': 'Ανάπτυξη Smart Contracts',
        'services.blockchain.feature2': 'DeFi Εφαρμογές',
        'services.blockchain.feature3': 'Ενσωμάτωση Blockchain',
        'services.consulting.title': 'IT Συμβουλευτική',
        'services.consulting.description': 'Φροντίζουμε η επιχείρησή σου να λειτουργεί ομαλά και αποδοτικά. Αυτό είναι πολύ σημαντικό για να μεγαλώσει η επιχείρησή σου.',
        'services.consulting.feature1': 'Στρατηγική Τεχνολογίας',
        'services.consulting.feature2': 'Βελτιστοποίηση Υποδομής',
        'services.consulting.feature3': 'Ψηφιακός Μετασχηματισμός',
        'services.consulting.feature4': 'Ευθυγράμμιση IT Στρατηγικής',

        // Technologies
        'technologies.title': 'Τεχνολογίες',
        'technologies.subtitle': 'Αξιοποιώντας τη δύναμη των τεχνολογιών για εξαιρετικές λύσεις',
        'technologies.frontend': 'Frontend',
        'technologies.backend': 'Backend',
        'technologies.cloud': 'Cloud & DevOps',
        'technologies.ai': 'AI & Data',
        'technologies.blockchain': 'Blockchain',
        'technologies.trading': 'Trading',

        // Industries
        'industries.title': 'Κλάδοι που Εξυπηρετούμε',
        'industries.subtitle': 'Παρέχοντας εξειδίκευση σε πολλούς τομείς',
        'industries.telecom.title': 'Τηλεπικοινωνίες',
        'industries.telecom.description': 'Προηγμένες λύσεις για σύγχρονη υποδομή και υπηρεσίες επικοινωνίας.',
        'industries.banking.title': 'Τραπεζικά & Χρηματοοικονομικά',
        'industries.banking.description': 'Ασφαλή και αποδοτικά συστήματα για χρηματοπιστωτικά ιδρύματα και υπηρεσίες.',
        'industries.consulting.title': 'Συμβουλευτική',
        'industries.consulting.description': 'Στρατηγική τεχνολογική συμβουλευτική για επιχειρηματικό μετασχηματισμό.',
        'industries.travel.title': 'Ταξίδια & Τουρισμός',
        'industries.travel.description': 'Ψηφιακές λύσεις για βελτιωμένες ταξιδιωτικές εμπειρίες και λειτουργίες.',
        'industries.startups.title': 'Startups',
        'industries.startups.description': 'Καινοτόμες λύσεις για να οδηγήσουν την ανάπτυξη και επιτυχία των startups.',
        'industries.blockchain.title': 'Blockchain',
        'industries.blockchain.description': 'Σύγχρονες blockchain λύσεις για διάφορους κλάδους.',

        // Footer
        'footer.description': 'Η Fiji Solutions είναι εταιρεία λογισμικού στη Θεσσαλονίκη, που φτιάχνει λογισμικό και σου δίνει συμβουλές για την επιχείρησή σου.',
        'footer.links': 'Γρήγοροι σύνδεσμοι',
        'footer.projects': 'Έργα',
        'footer.rights': 'Όλα τα δικαιώματα δικά μας.',

        // Vapi
        'vapi.connecting': 'Συνδέεται...',
        'vapi.end_call': 'Τέλος κλήσης',

        // Legal Page
        'legal.title': 'Νομικές Πληροφορίες',
        'legal.subtitle': 'Στοιχεία εγγραφής και νομικές λεπτομέρειες εταιρείας',
        'legal.website_publicity': 'ΣΤΟΙΧΕΙΑ ΔΗΜΟΣΙΟΤΗΤΑΣ ΙΣΤΟΣΕΛΙΔΑΣ',
        'legal.company_name': 'Επωνυμία',
        'legal.address': 'Διεύθυνση',
        'legal.gemi_number': 'Αριθμός ΓΕΜΗ',
        'legal.corporate_capital': 'Εταιρικό Κεφάλαιο',
        'legal.corporate_shares': 'Εταιρικά Μερίδια',
        'legal.corporate_shares_description': '2.000 κεφαλαιακά εταιρικά μερίδια ονομαστικής αξίας 1,00 ευρώ έκαστο',
        'legal.partner': 'Εταίρος',
        'legal.administrator': 'Διαχειριστής',
        'legal.name': 'Όνομα',
        'legal.fathers_name': 'Πατρώνυμο',
        'legal.tax_id': 'Αριθμός Φορολογικού Μητρώου',
        'legal.identity_card': 'Αριθμός Ταυτότητας',

        // Legal Data Values
        'legal.data.company_full_name': 'Fiji Solutions ΜΟΝΟΠΡΟΣΩΠΗ ΙΚΕ',
        'legal.data.company_address': 'ΜΑΡΙΝΟΥ ΑΝΤΥΠΑ 40, 57001, ΠΥΛΑΙΑ, ΘΕΣΣΑΛΟΝΙΚΗ',
        'legal.data.gemi_number': '185101306000',
        'legal.data.corporate_capital': '2.000 ευρώ',
        'legal.data.partner_name': 'ΧΑΡΑΛΑΜΠΟΣ ΜΟΥΤΑΦΙΔΗΣ',
        'legal.data.partner_father': 'ΧΡΉΣΤΟΣ',
        'legal.data.partner_tax_id': '167515853',
        'legal.data.partner_address': 'ΕΛΛΗΣ 5, 56625, ΣΥΚΙΕΣ',
        'legal.data.admin_name': 'ΧΑΡΑΛΑΜΠΟΣ ΜΟΥΤΑΦΙΔΗΣ',
        'legal.data.admin_identity': 'ΑΟ1277016',
        'legal.data.admin_tax_id': '167515853',
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