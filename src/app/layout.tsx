import type {Metadata} from 'next';
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
  title: 'Fiji Solutions | Software Company in Thessaloniki, Greece | IT Consulting & Custom Software Development',
  description: 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development. We deliver innovative web development, AI solutions, cloud services, mobile app development, and blockchain technology to help businesses grow online.',
  keywords: 'Fiji Solutions, Fiji Solutions Thessaloniki, Fiji Solutions Greece, software company Thessaloniki, IT consulting Greece, custom software development, web development, AI solutions, cloud services, mobile app development, blockchain technology, process automation, payment systems, digital success, free consultation, Thessaloniki-based team',
  authors: [{name: 'Fiji Solutions'}],
  robots: 'index, follow',
  themeColor: '#0086ff',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/en',
    title: 'Fiji Solutions | Software Company in Thessaloniki, Greece',
    description: 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development. We deliver innovative solutions to help businesses grow online.',
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
    title: 'Fiji Solutions | Software Company in Thessaloniki, Greece',
    description: 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development. We deliver innovative solutions to help businesses grow online.',
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
    'linkedin:title': 'Fiji Solutions | Software Company in Thessaloniki, Greece',
    'linkedin:description': 'Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development. We deliver innovative solutions to help businesses grow online.',
    'linkedin:image': 'https://www.fijisolutions.net/fijisolutions.png',
    'msapplication-TileColor': '#0086ff',
  },
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
      
      {/* Local Business Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareCompany",
            "name": "Fiji Solutions",
            "alternateName": "Fiji Solutions SINGLE MEMBER PRIVATE COMPANY (IKE)",
            "description": "Fiji Solutions is a software company in Thessaloniki, Greece, specializing in IT consulting and custom software development. We deliver innovative web development, AI solutions, cloud services, mobile app development, and blockchain technology to help businesses grow online.",
            "url": "https://www.fijisolutions.net/",
            "logo": "https://www.fijisolutions.net/fijisolutions.png",
            "image": "https://www.fijisolutions.net/fijisolutions.png",
            "telephone": "+30 698 322 6200",
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
              "https://www.facebook.com/profile.php?id=61578271845868",
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
                "name": "Europe"
              },
              {
                "@type": "Place", 
                "name": "Worldwide"
              }
            ],
            "serviceType": [
              "Custom Software Development",
              "Web Development",
              "Mobile App Development",
              "AI Solutions",
              "Cloud Services",
              "Blockchain Technology",
              "IT Consulting",
              "Payment Integration",
              "Process Automation"
            ],
            "knowsAbout": [
              "React",
              "Angular",
              "TypeScript",
              "Java",
              "Python",
              "Node.js",
              "AWS",
              "Azure",
              "Artificial Intelligence",
              "Blockchain",
              "Solana",
              "Web3"
            ]
          })
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