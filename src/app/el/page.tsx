import type {Metadata} from 'next';
import {createTranslationFunction} from '@/translations';
import Hero from '../../components/Hero';
import Challenges from '../../components/Challenges';
import Solutions from '../../components/Solutions';
import Contact from '../../components/Contact';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Εξατομικευμένο Λογισμικό, Ανάλυση Δεδομένων & Snowflake Ελλάδα | Fiji Solutions',
  description: 'Η Fiji Solutions αναπτύσσει εξατομικευμένο λογισμικό στην Ελλάδα και βοηθά επιχειρήσεις με ανάλυση δεδομένων, BI dashboards, data engineering και Snowflake AI Data Cloud.',
  keywords: 'εξατομικευμένο λογισμικό Ελλάδα, εταιρεία λογισμικού Θεσσαλονίκη, ανάλυση δεδομένων Ελλάδα, Snowflake consulting Ελλάδα, business intelligence Ελλάδα, data engineering Ελλάδα, custom software Ελλάδα',
  alternates: {
    canonical: 'https://www.fijisolutions.net/el',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/el',
    title: 'Εξατομικευμένο Λογισμικό, Ανάλυση Δεδομένων & Snowflake Ελλάδα | Fiji Solutions',
    description: 'Εξατομικευμένο λογισμικό, ανάλυση δεδομένων, BI dashboards και Snowflake AI Data Cloud consulting για επιχειρήσεις στην Ελλάδα.',
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
    title: 'Εξατομικευμένο Λογισμικό, Ανάλυση Δεδομένων & Snowflake Ελλάδα | Fiji Solutions',
    description: 'Εξατομικευμένο λογισμικό, ανάλυση δεδομένων, BI dashboards και Snowflake AI Data Cloud consulting για επιχειρήσεις στην Ελλάδα.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function GreekHomePage() {
  const language = 'el';
  const t = createTranslationFunction(language);

  const greekSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Fiji Solutions",
    "alternateName": "Εταιρεία Λογισμικού Θεσσαλονίκη Fiji Solutions",
    "description": "Η Fiji Solutions είναι εταιρεία εξατομικευμένου λογισμικού, ανάλυσης δεδομένων και Snowflake AI Data Cloud consulting στη Θεσσαλονίκη.",
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
      "Ανάλυση Δεδομένων",
      "Business Intelligence",
      "Snowflake Consulting",
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
