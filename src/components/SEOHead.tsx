import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://fijisolutions.net/fiji_solutions.png",
  ogType = "website",
  structuredData
}) => {
  const { language } = useLanguage();

  // Default content based on language
  const defaultContent = {
    en: {
      title: "Fiji Solutions | We help your business grow online",
      description: "Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development. We deliver innovative web development, AI solutions, cloud services, mobile app development, and blockchain technology to help businesses grow online.",
      keywords: "software development, IT consulting, custom software development, mobile app development, big data consulting, enterprise software development, solution consulting, software consulting, Thessaloniki, Greece",
      canonicalUrl: "https://fijisolutions.net"
    },
    el: {
      title: "Fiji Solutions | Βοηθάμε την επιχείρησή σας να αναπτυχθεί διαδικτυακά",
      description: "Η Fiji Solutions είναι μια εταιρεία λογισμικού στη Θεσσαλονίκη, Ελλάδα, που ειδικεύεται σε συμβουλευτικές υπηρεσίες IT και ανάπτυξη προσαρμοσμένου λογισμικού. Παραδίδουμε καινοτόμες λύσεις ανάπτυξης ιστού, λύσεις AI, υπηρεσίες cloud, ανάπτυξη εφαρμογών κινητών και τεχνολογία blockchain για να βοηθήσουμε τις επιχειρήσεις να αναπτυχθούν διαδικτυακά.",
      keywords: "ανάπτυξη λογισμικού, συμβουλευτικές υπηρεσίες IT, ανάπτυξη προσαρμοσμένου λογισμικού, ανάπτυξη εφαρμογών κινητών, συμβουλευτική big data, ανάπτυξη εταιρικού λογισμικού, συμβουλευτική λύσεων, συμβουλευτική λογισμικού, Θεσσαλονίκη, Ελλάδα",
      canonicalUrl: "https://fijisolutions.net/el"
    }
  };

  const finalTitle = title || defaultContent[language].title;
  const finalDescription = description || defaultContent[language].description;
  const finalKeywords = keywords || defaultContent[language].keywords;
  const finalCanonicalUrl = canonicalUrl || defaultContent[language].canonicalUrl;

  // Generate alternate URLs for hreflang
  const getAlternateUrl = (lang: 'en' | 'el') => {
    if (!finalCanonicalUrl) return '';

    const baseUrl = 'https://fijisolutions.net';
    let currentPath = finalCanonicalUrl.replace(baseUrl, '');

    if (lang === 'en') {
      if (currentPath.startsWith('/el')) {
        return `${baseUrl}${currentPath.replace('/el', '/en')}`;
      } else if (currentPath === '' || currentPath === '/' || currentPath === '/en') {
        return `${baseUrl}`;
      } else if (!currentPath.startsWith('/en')) {
        return `${baseUrl}/en${currentPath}`;
      }
      return finalCanonicalUrl;
    } else {
      if (currentPath.startsWith('/en')) {
        return `${baseUrl}${currentPath.replace('/en', '/el')}`;
      } else if (currentPath === '' || currentPath === '/' || !currentPath.startsWith('/el')) {
        return `${baseUrl}/el`;
      }
      return finalCanonicalUrl;
    }
  };

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fiji Solutions",
    "description": "Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development. We deliver innovative web development, AI solutions, cloud services, mobile app development, and blockchain technology to help businesses grow online.",
    "url": "https://fijisolutions.net",
    "logo": "https://fijisolutions.net/fiji_solutions.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+30-698-322-6200",
      "contactType": "customer service",
      "email": "info@fijisolutions.net"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "MARINOU ANTIPA 40",
      "addressLocality": "PILEA",
      "addressRegion": "THESSALONIKI",
      "postalCode": "570 01",
      "addressCountry": "Greece"
    },
    "sameAs": [
      "https://github.com/cmoutafidis",
      "https://x.com/fiji_solutions",
      "https://www.facebook.com/profile.php?id=61578271845868",
      "https://linkedin.com/company/fijisolutionsnet",
    ],
    "foundingDate": "2025",
    "founder": {
      "@type": "Person",
      "name": "Charalampos Moutafidis"
    },
    "services": [
      "Software Development",
      "Application Development",
      "Big Data Consulting & Implementation",
      "Data Quality Management",
      "Enterprise Software Development",
      "IT Consulting",
      "AI Solutions",
      "Cloud Services",
      "Blockchain Development",
      "Payment Integration",
      "Mobile App Development",
      "Software Consulting",
      "Solution Consulting"
    ]
  };

  return (
    <Helmet>
      <html lang={language} />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={finalCanonicalUrl} />

      {/* Hreflang tags */}
      <link rel="alternate" hreflang="en" href={getAlternateUrl('en')} />
      <link rel="alternate" hreflang="el" href={getAlternateUrl('el')} />
      <link rel="alternate" hreflang="x-default" href={getAlternateUrl('en')} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Fiji Solutions" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalCanonicalUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:site" content="@fiji_solutions" />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Fiji Solutions" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content={language} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
