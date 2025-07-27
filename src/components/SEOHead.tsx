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
  description = "IT solutions that fit to your business needs, designed to guarantee your business success. Expert web development, AI integration, cloud services, and blockchain solutions.",
  keywords = "web development, AI solutions, cloud services, blockchain development, IT consulting, business automation, custom software, payment integration, Thessaloniki, Greece, Switzerland",
  canonicalUrl = "https://fijisolutions.net",
  ogImage = "https://fijisolutions.net/fiji_solutions.png",
  ogType = "website",
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fiji Solutions",
    "description": "We help your business grow online. Our strategies ensure your growth and success.",
    "url": "https://fijisolutions.net",
    "logo": "https://fijisolutions.net/fiji_solutions.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+41-76-622-6200",
      "contactType": "customer service",
      "email": "info@fijisolutions.net"
    },
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Aarau",
        "addressCountry": "Switzerland"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "MARINOU ANTYPA 40",
        "addressLocality": "PYLAIA",
        "addressRegion": "THESSALONIKI",
        "postalCode": "57001",
        "addressCountry": "Greece"
      }
    ],
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
      "Web Development",
      "AI Solutions",
      "Cloud Services",
      "Blockchain Development",
      "IT Consulting",
      "Payment Integration"
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
