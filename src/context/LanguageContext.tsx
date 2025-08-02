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
        'solutions.cta.description': "The AI revolution is happening now. Companies that adapted them are leading their industries. Don't wait until it's too late. Start today.",
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
        'projects.catalytics.description': 'Community project for Jupiter Exchange. Provides real-time analytics and insights for investors in the ecosystem.',
        'projects.checkitout': 'Check it out',
        'projects.code': 'Source Code',

        // Footer
        'footer.description': 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development.',
        'footer.links': 'Quick Links',
        'footer.projects': 'Projects',
        'footer.rights': 'All rights reserved.',

        // SEO Content
        'seo.home.title': 'We help your business grow online | Fiji Solutions',
        'seo.home.description': 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development. We deliver innovative web development, AI solutions, cloud services, mobile app development, and blockchain technology to help businesses grow online.',
        'seo.home.keywords': 'software development, IT consulting, custom software development, mobile app development, big data consulting, enterprise software development, solution consulting, software consulting, Thessaloniki Greece',

        'seo.portfolio.title': 'Our Portfolio | Fiji Solutions',
        'seo.portfolio.description': 'Explore Fiji Solutions\' portfolio showcasing our software development, IT consulting, mobile app development, and enterprise software solutions for clients in Thessaloniki, Greece.',
        'seo.portfolio.keywords': 'portfolio, software development projects, IT consulting projects, mobile app development, enterprise software development, custom software solutions, Thessaloniki Greece',

        'seo.contact.title': 'Contact Us for Free IT Consultation | Fiji Solutions',
        'seo.contact.description': 'Contact Fiji Solutions in Thessaloniki, Greece for expert IT consulting and custom software development. Fill out our form for a free consultation.',
        'seo.contact.keywords': 'contact, free consultation, IT consulting, software development consultation, mobile app development, big data consulting, Thessaloniki Greece',

        'seo.legal.title': 'Company Information & Legal Details | Fiji Solutions',
        'seo.legal.description': 'Legal information and company registration details for Fiji Solutions SINGLE MEMBER PRIVATE COMPANY (IKE), based in Thessaloniki, Greece.',
        'seo.legal.keywords': 'legal information, company registration, GEMI number, Fiji Solutions IKE, Thessaloniki Greece, business registration',

        // Services - detailed content
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

        // Services
        'services.title': 'Η δουλειά μας',
        'services.subtitle': 'Πράγματα που φτιάξαμε για τους πελάτες μας.',

        // Portfolio/Projects
        'projects.title': 'Έργα μας',
        'projects.subtitle': 'Έργα και δουλειές για την κοινότητα',
        'projects.fiji.title': 'Fiji Financial Dashboard',
        'projects.fiji.description': 'Πλατφόρμα που παρακολουθεί τα λεφτά της Fed και την απόδοση των tokens της Toros. Δίνει στους επενδυτές όλα όσα χρειάζονται.',
        'projects.catalytics.title': 'Catalytics Pro',
        'projects.catalytics.description': 'Έργο για το Jupiter Exchange. Προσφέρει αναλύσεις και πληροφορίες σε πραγματικό χρόνο για επενδυτές.',
        'projects.checkitout': 'Δες το',
        'projects.code': 'Ανοιχτός κώδικας',

        // Footer
        'footer.description': 'Η Fiji Solutions είναι εταιρεία λογισμικού στη Θεσσαλονίκη, που φτιάχνει λογισμικό και σου δίνει συμβουλές για την επιχείρησή σου.',
        'footer.links': 'Γρήγοροι σύνδεσμοι',
        'footer.projects': 'Έργα',
        'footer.rights': 'Όλα τα δικαιώματα δικά μας.',

        // SEO Content
        'seo.home.title': 'Βοηθάμε την επιχείρησή σου να μεγαλώσει online | Fiji Solutions',
        'seo.home.description': 'Η Fiji Solutions είναι εταιρεία λογισμικού στη Θεσσαλονίκη, που φτιάχνει κορυφαίο λογισμικό και δίνει συμβουλές για να μεγαλώσει η επιχείρησή σου online. Από ιστοσελίδες και AI μέχρι εφαρμογές κινητών και blockchain, τα έχουμε όλα.',
        'seo.home.keywords': 'λογισμικό Θεσσαλονίκη, συμβουλές IT, προσαρμοσμένο λογισμικό, εφαρμογές κινητών, big data, εταιρικό λογισμικό, λύσεις τεχνολογίας, Θεσσαλονίκη Ελλάδα',

        'seo.portfolio.title': 'Η δουλειά μας | Fiji Solutions',
        'seo.portfolio.description': 'Δες τη δουλειά της Fiji Solutions, με λογισμικό, συμβουλές IT, εφαρμογές κινητών και λύσεις για επιχειρήσεις στη Θεσσαλονίκη.',
        'seo.portfolio.keywords': 'δουλειά, έργα λογισμικού, συμβουλές IT, εφαρμογές κινητών, εταιρικό λογισμικό, λύσεις λογισμικού, Θεσσαλονίκη Ελλάδα',

        'seo.contact.title': 'Μίλα μαζί μας για δωρεάν συμβουλές IT | Fiji Solutions',
        'seo.contact.description': 'Μίλα με τη Fiji Solutions στη Θεσσαλονίκη για συμβουλές IT και λογισμικό. Συμπλήρωσε τη φόρμα για μια δωρεάν κουβέντα.',
        'seo.contact.keywords': 'επικοινωνία, δωρεάν συμβουλές, συμβουλές IT, λογισμικό, εφαρμογές κινητών, big data, Θεσσαλονίκη Ελλάδα',

        'seo.legal.title': 'Πληροφορίες εταιρείας | Fiji Solutions',
        'seo.legal.description': 'Όλα τα νομικά και τα στοιχεία της Fiji Solutions ΙΚΕ, με έδρα στη Θεσσαλονίκη.',
        'seo.legal.keywords': 'νομικά, στοιχεία εταιρείας, ΓΕΜΗ, Fiji Solutions ΙΚΕ, Θεσσαλονίκη Ελλάδα',

        // Services - detailed content
        'services.software.title': 'Φτιάχνουμε λογισμικό',
        'services.software.description': 'Φτιάχνουμε εφαρμογές για web, κινητά και επιχειρήσεις, κομμένες και ραμμένες για σένα.',
        'services.software.feature1': 'Εφαρμογές στα μέτρα σου',
        'services.software.feature2': 'Web εφαρμογές',
        'services.software.feature3': 'Εφαρμογές για κινητά',
        'services.software.feature4': 'Σύνδεση συστημάτων',

        'services.enterprise.title': 'Λογισμικό για μεγάλες επιχειρήσεις',
        'services.enterprise.description': 'Συμβουλές και λύσεις cloud για μεγάλες δουλειές.',
        'services.enterprise.feature1': 'Μεγάλα συστήματα λογισμικού',
        'services.enterprise.feature2': 'Σύνδεση διαδικασιών',
        'services.enterprise.feature3': 'Αρχιτεκτονική που μεγαλώνει',
        'services.enterprise.feature4': 'Εταιρικές λύσεις',

        'services.ai.title': 'AI λύσεις',
        'services.ai.description': 'AI λύσεις που σου γλιτώνουν λεφτά και σου φέρνουν περισσότερους πελάτες.',
        'services.ai.feature1': 'AI για συνομιλίες',
        'services.ai.feature2': 'AI φωνητικοί βοηθοί',
        'services.ai.feature3': 'Service Desk με AI',
        'services.ai.feature4': 'Αυτοματισμοί',

        'services.payment.title': 'Πληρωμές',
        'services.payment.description': 'Τα λεφτά κρατάνε την επιχείρησή σου ζωντανή. Κάνουμε τις πληρωμές απλές και αφήνουμε τους πελάτες σου να πληρώνουν όπως θέλουν.',
        'services.payment.feature1': 'Πιστωτικές κάρτες',
        'services.payment.feature2': 'Σύνδεση με payment gateways',
        'services.payment.feature3': 'Ψηφιακά πορτοφόλια',
        'services.payment.feature4': 'Πληρωμές με κρυπτονομίσματα',

        'services.blockchain.title': 'Blockchain ανάπτυξη',
        'services.blockchain.description': 'Καινούργιες λύσεις blockchain για κάθε κλάδο.',
        'services.blockchain.feature1': 'Smart Contracts',
        'services.blockchain.feature2': 'DeFi εφαρμογές',
        'services.blockchain.feature3': 'Σύνδεση blockchain',

        'services.consulting.title': 'Συμβουλές IT',
        'services.consulting.description': 'Κάνουμε την επιχείρησή σου να τρέχει ομαλά και γρήγορα. Αυτό είναι το κλειδί για να μεγαλώσεις.',
        'services.consulting.feature1': 'Στρατηγική τεχνολογίας',
        'services.consulting.feature2': 'Βελτίωση υποδομών',
        'services.consulting.feature3': 'Ψηφιακός μετασχηματισμός',
        'services.consulting.feature4': 'Στρατιγική IT με στόχους',

        // Technologies
        'technologies.title': 'Οι Τεχνολογίες μας',
        'technologies.subtitle': 'Χρησιμοποιούμε κορυφαίες τεχνολογίες για να σου δώσουμε τις καλύτερες λύσεις',
        'technologies.frontend': 'Frontend',
        'technologies.backend': 'Backend',
        'technologies.cloud': 'Cloud & DevOps',
        'technologies.ai': 'AI & Δεδομένα',
        'technologies.blockchain': 'Blockchain',
        'technologies.trading': 'Trading',

        // Industries
        'industries.title': 'Κλάδοι που δουλεύουμε',
        'industries.subtitle': 'Έχουμε εμπειρία σε πολλούς τομείς',
        'industries.telecom.title': 'Τηλεπικοινωνίες',
        'industries.telecom.description': 'Λύσεις για σύγχρονες επικοινωνίες και υποδομές.',
        'industries.banking.title': 'Τράπεζες & Χρηματοοικονομικά',
        'industries.banking.description': 'Ασφαλή και γρήγορα συστήματα για τράπεζες και χρηματοοικονομικές υπηρεσίες.',
        'industries.consulting.title': 'Συμβουλευτικές υπηρεσίες',
        'industries.consulting.description': 'Συμβουλές τεχνολογίας για να αλλάξεις την επιχείρησή σου.',
        'industries.travel.title': 'Ταξίδια & Τουρισμός',
        'industries.travel.description': 'Ψηφιακές λύσεις για καλύτερη εμπειρία ταξίδιού και λειτουργίες.',
        'industries.startups.title': 'Startups',
        'industries.startups.description': 'Καινοτόμες λύσεις για να μεγαλώσει η startups σου.',
        'industries.blockchain.title': 'Blockchain',
        'industries.blockchain.description': 'Μοντέρνες λύσεις blockchain για κάθε κλάδο.'

        // Legal Page
        'legal.title': 'Νομικές Πληροφορίες',
        'legal.subtitle': 'Στοιχεία εγγραφής και νομικές λεπτομέρειες εταιρείας',
        'legal.website_publicity': 'ΣΤΟΙΧΕΙΑ ΔΗΜΟΣΙΟΤΗΤΑΣ ΙΣΤΟΣΕΛΙΔΑΣ',
        'legal.company_name': 'Επωνυμία Εταιρείας',
        'legal.address': 'Διεύθυνση',
        'legal.gemi_number': 'Αριθμός ΓΕΜΗ',
        'legal.corporate_capital': 'Εταιρικό Κεφάλαιο',
        'legal.corporate_shares': 'Εταιρικές Μερίδες',
        'legal.corporate_shares_description': '2.000 εταιρικές μερίδες κεφαλαίου με ονομαστική αξία 1,00 ευρώ η κάθε μία',
        'legal.partner': 'Εταίρος',
        'legal.administrator': 'Διαχειριστής',
        'legal.name': 'Όνομα',
        'legal.fathers_name': 'Πατρώνυμο',
        'legal.tax_id': 'Αριθμός Φορολογικού Μητρώου',
        'legal.identity_card': 'Αριθμός Ταυτότητας',
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
