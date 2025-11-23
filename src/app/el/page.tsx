import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Hero from '../../components/Hero';
import Challenges from '../../components/Challenges';
import Solutions from '../../components/Solutions';
import Contact from '../../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Η ΚΑΛΥΤΕΡΗ Εταιρεία Λογισμικού στη Θεσσαλονίκη - Ανάπτυξη Επαγγελματικού Λογισμικού - Ανάπτυξη Εφαρμογών - Συμβουλευτικές Υπηρεσίες IT',
  description: 'Κορυφαία εταιρεία λογισμικού στη Θεσσαλονίκη. Εξειδικευμένη στην ανάπτυξη λογισμικού, web development, IT συμβουλευτική & AI λύσεις για επιχειρήσεις.',
  keywords: 'εταιρεία λογισμικού, εταιρεία λογισμικού Θεσσαλονίκη, εταιρείες λογισμικού Θεσσαλονίκη, κορυφαίες εταιρείες λογισμικού Θεσσαλονίκη, εταιρεία ανάπτυξης λογισμικού Θεσσαλονίκη, custom software Ελλάδα, εταιρεία κατασκευής ιστοσελίδων Θεσσαλονίκη, mobile apps Ελλάδα, εταιρεία πληροφορικής Θεσσαλονίκη, διαχείριση IT συστημάτων Ελλάδα, προγραμματιστές λογισμικού Ελλάδα, ανάπτυξη λογισμικού, λογισμικό επιχειρήσεων',
  alternates: {
    canonical: 'https://www.fijisolutions.net/el',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/el',
    title: 'Η ΚΑΛΥΤΕΡΗ Εταιρεία Λογισμικού στη Θεσσαλονίκη - Ανάπτυξη Επαγγελματικού Λογισμικού - Ανάπτυξη Εφαρμογών - Συμβουλευτικές Υπηρεσίες IT',
    description: 'Κορυφαία εταιρεία λογισμικού Θεσσαλονίκη. Εξειδικευμένη στην ανάπτυξη λογισμικού, web development, IT συμβουλευτική & AI λύσεις για επιχειρήσεις.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions - Εταιρεία Λογισμικού στη Θεσσαλονίκη, Ελλάδα που ειδικεύεται στην IT συμβουλευτική και ανάπτυξη λογισμικού',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Η ΚΑΛΥΤΕΡΗ Εταιρεία Λογισμικού στη Θεσσαλονίκη - Ανάπτυξη Επαγγελματικού Λογισμικού - Ανάπτυξη Εφαρμογών - Συμβουλευτικές Υπηρεσίες IT',
    description: 'Κορυφαία εταιρεία λογισμικού Θεσσαλονίκη. Εξειδικευμένη στην ανάπτυξη λογισμικού, web development, IT συμβουλευτική & AI λύσεις για επιχειρήσεις.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function GreekHomePage() {
  const language = 'el';
  const t = createTranslationFunction(language);

  const greekSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareCompany",
    "name": "Fiji Solutions",
    "alternateName": "Εταιρεία Λογισμικού Θεσσαλονίκη Fiji Solutions",
    "description": "Κορυφαία εταιρεία λογισμικού στη Θεσσαλονίκη. Εξειδικευμένη στην ανάπτυξη λογισμικού, web development, IT συμβουλευτική & AI λύσεις για επιχειρήσεις.",
    "url": "https://www.fijisolutions.net/el",
    "logo": "https://www.fijisolutions.net/fijisolutions.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Μαρίνου Αντύπα 40",
      "addressLocality": "Θεσσαλονίκη",
      "postalCode": "57001",
      "addressRegion": "Κεντρική Μακεδονία",
      "addressCountry": "GR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.568785",
      "longitude": "22.981762"
    },
    "areaServed": [
      "Θεσσαλονίκη",
      "Ελλάδα",
      "Πυλαία",
      "Κεντρική Μακεδονία"
    ],
    "serviceType": [
      "Εταιρεία Λογισμικού",
      "Εταιρεία Λογισμικού Θεσσαλονίκη",
      "Ανάπτυξη Λογισμικού", 
      "IT Συμβουλευτική Θεσσαλονίκη",
      "Web Development",
      "Mobile App Development"
    ],
    "knowsAbout": [
      "Εταιρεία Λογισμικού",
      "Εταιρεία Λογισμικού Θεσσαλονίκη",
      "Ανάπτυξη Λογισμικού",
      "IT Συμβουλευτική"
    ],
    "telephone": "+30 231 107 0108",
    "email": "info@fijisolutions.net",
    "sameAs": [
      "https://x.com/fiji_solutions",
      "https://www.facebook.com/profile.php?id=61578271845868",
      "https://www.linkedin.com/company/fijisolutionsnet/",
      "https://github.com/cmoutafidis"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(greekSchema) }}
      />
      <Hero t={t}/>
      <Challenges t={t}/>
      <Solutions t={t}/>
      <Contact t={t} element={"h2"}/>
      <Footer t={t}/>
    </>
  );
}