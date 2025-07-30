import React from 'react';
import { Helmet } from 'react-helmet-async';

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
  title = "Fiji Solutions | We help your business grow online",
  description = "Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development. We deliver innovative web development, AI solutions, cloud services, mobile app development, and blockchain technology to help businesses grow online.",
  keywords = "software development, IT consulting, custom software development, mobile app development, big data consulting, enterprise software development, solution consulting, software consulting, Thessaloniki, Greece",
  canonicalUrl = "https://fijisolutions.net",
  ogImage = "https://fijisolutions.net/fiji_solutions.png",
  ogType = "website",
  structuredData
}) => {
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
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Fiji Solutions" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:site" content="@fiji_solutions" />

      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Fiji Solutions" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
