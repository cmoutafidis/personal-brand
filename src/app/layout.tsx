import type {Metadata, Viewport} from 'next';
import {Inter, Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from '@/context/ThemeContext';
import {LanguageProvider} from '@/context/LanguageContext';
import Navbar from '../components/Navbar';
import React from "react";
import VapiChatWidget from "@/components/VapiChatWidget";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fijisolutions.net'),
  title: 'Fiji Solutions - Operational Software, Automation & Snowflake Greece',
  description: 'We help businesses in Greece fix slow manual processes with custom software, workflow automation, reporting, data analysis, and Snowflake AI Data Cloud consulting.',
  keywords: 'Fiji Solutions, operational software Greece, business process automation Greece, workflow automation Greece, custom software development Greece, software company Greece, software company Thessaloniki, data analysis services Greece, business intelligence Greece, Snowflake partner Greece, Snowflake consulting Greece, data engineering Greece, IT consulting Greece',
  authors: [{name: 'Fiji Solutions'}],
  robots: 'index, follow',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/en',
    title: 'Fiji Solutions - Operational Software, Automation & Snowflake Greece',
    description: 'Custom software, workflow automation, reporting, data analysis, and Snowflake AI Data Cloud consulting for businesses in Greece.',
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: 'Fiji Solutions',
      },
    ],
    siteName: 'Fiji Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: 'Fiji Solutions - Operational Software, Automation & Snowflake Greece',
    description: 'Custom software, workflow automation, reporting, data analysis, and Snowflake AI Data Cloud consulting for businesses in Greece.',
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
  alternates: {
    canonical: 'https://www.fijisolutions.net/en',
    languages: {
      'en': 'https://www.fijisolutions.net/en',
      'el': 'https://www.fijisolutions.net/el',
      'x-default': 'https://www.fijisolutions.net/en',
    },
  },
  other: {
    'linkedin:title': 'Software Company in Thessaloniki, Greece',
    'linkedin:description': 'We are a software company in Thessaloniki, Greece, helping businesses remove operational bottlenecks with custom software, automation, reporting, and data systems.',
    'linkedin:image': 'https://www.fijisolutions.net/fijisolutions.png',
    'msapplication-TileColor': '#0086ff',
  },
};

export const viewport: Viewport = {
  themeColor: '#0086ff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const assistantId = "d6683411-62fe-42cb-ad6f-54dc1eb9eeb7";
  const vapiApiKey = "4fb313ff-b3ca-4e50-869f-2a28d0939c6f";
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>

      {/* Leadsy Tracking Script */}
      <script
        id="vtag-ai-js"
        async
        src="https://r2.leadsy.ai/tag.js"
        data-pid="18ImLiEFzTBP83210"
        data-version="062024"
      />
      
      {/* Local Business Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Fiji Solutions",
            "alternateName": "Fiji Solutions SINGLE MEMBER PRIVATE COMPANY (IKE)",
            "description": "We help businesses in Greece remove slow manual processes with custom software, workflow automation, reporting, data analysis, and Snowflake AI Data Cloud consulting.",
            "url": "https://www.fijisolutions.net/",
            "logo": "https://www.fijisolutions.net/fijisolutions.png",
            "image": "https://www.fijisolutions.net/fijisolutions.png",
            "telephone": "+30 231 107 0108",
            "email": "info@fijisolutions.net",
            "priceRange": "$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Marinou Antipa 40",
              "addressLocality": "Thessaloniki",
              "postalCode": "57001",
              "addressRegion": "Central Macedonia",
              "addressCountry": "GR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.568785",
              "longitude": "22.981762"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday", 
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://x.com/fiji_solutions",
              "https://www.facebook.com/fijisolutions/",
              "https://www.linkedin.com/company/fijisolutionsnet/",
              "https://github.com/cmoutafidis"
            ],
            "founder": {
              "@type": "Person",
              "name": "Charalampos Moutafidis"
            },
            "areaServed": [
              {
                "@type": "Country",
                "name": "Greece"
              },
              {
                "@type": "Place",
                "name": "Pilea"
              },
              {
                "@type": "Place",
                "name": "Thessaloniki"
              },
              {
                "@type": "Place",
                "name": "Europe"
              },
              {
                "@type": "Place", 
                "name": "Worldwide"
              }
            ],
            "serviceType": [
              "Custom Software Development Company",
              "Software Development Services",
              "Business Process Automation",
              "Workflow Automation",
              "Data Analysis Services",
              "Business Intelligence Dashboards",
              "Snowflake Consulting",
              "Snowflake Data Engineering",
              "Web Development",
              "Web Development Company",
              "Mobile App Development",
              "IT Consulting",
              "Managed IT Services",
              "ERP Software",
              "CRM Software",
              "ERP Implementation",
              "Custom CRM Solutions",
              "IT Support",
              "Software Company"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Fiji Solutions services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Software Development Greece",
                    "areaServed": "Greece"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Data Analysis Services Greece",
                    "areaServed": "Greece"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Snowflake Consulting Greece",
                    "areaServed": "Greece"
                  }
                }
              ]
            },
            "knowsAbout": [
              "Software Development",
              "Custom Software",
              "Data Analysis",
              "Business Intelligence",
              "Snowflake AI Data Cloud",
              "Web Development",
              "Mobile App Development",
              "IT Consulting",
              "ERP Software",
              "CRM Software",
              "React",
              "Angular",
              "TypeScript",
              "Java",
              "Python",
              "Node.js",
              "AWS",
              "Azure"
            ]
          })
        }}
      />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-17750042512"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'AW-17750042512');
          `
        }}
      />
    </head>
    <body className="antialiased">
    <ThemeProvider>
      <LanguageProvider>
        <div
          className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
          <Navbar/>
          <main>
            {children}

            {/* Global Chat Widget - visible on all pages */}
            <VapiChatWidget
              apiKey={vapiApiKey}
              assistantId={assistantId}
            />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}
