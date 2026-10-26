import type {Metadata} from 'next';
import {buildAlternates} from '@/lib/alternates';
import {createTranslationFunction} from '@/translations';
import Hero from '@/components/Hero';
import StatsStrip from '@/components/StatsStrip';
import Reveal from '@/components/Reveal';
import ClientStrip from '@/components/ClientStrip';
import WhatWeBuild from '@/components/WhatWeBuild';
import WaysToStart from '@/components/WaysToStart';
import AtlasHomeSection from '@/components/AtlasHomeSection';
import ProjectsGrid from '@/components/ProjectsGrid';
import ReviewSlot from '@/components/ReviewSlot';
import HowWeWork from '@/components/HowWeWork';
import HomeFaq from '@/components/HomeFaq';
import LatestPostsSection from '@/components/LatestPostsSection';
import ClosingCta from '@/components/ClosingCta';
import Local from '@/components/Local';
import Footer from '@/components/Footer';
import {blogData} from '@/data/blogs';
import {HOME} from '@/data/home';

// 2026-10-22 (offer-os gtm/broad-home-2026-10 BR-G05, PLAN.md §4.1 and §4.2, decisions BR-D3, BR-D6, BR-D7,
// BR-D8, BR-D22 to BR-D28): the broad home. Fiji Solutions is a custom software company; each offer is one
// way to start and keeps its own page. Title, description and H1 from offer-os
// `companies/fiji-solutions/site/03-copy-home.md` through src/data/home.ts. No price anywhere on this page
// (BR-D24): the prices stay on /offers/sheet-to-app and Atlas.
//
// Until this date the page was the hook for the 7-Day Sheet-to-App Prototype (2026-09-30, G20, offer-os
// gtm/sheet-to-app-rollout D5, D66); that copy now lives on /en/offers/sheet-to-app alone.
//
// Section order, PLAN.md §4.1: hero, stats, clients, what we build, ways to start, the Atlas band, projects,
// the review slot, how we work, FAQ (FAQPage from the same array), latest posts, the closing band, local.
//
// ⚠️ `locale` and `siteName` are declared here because Next replaces the layout's whole `openGraph` object
// when a page declares its own.
const copy = HOME.en.meta;

export const metadata: Metadata = {
  title: copy.title,
  description: copy.description,
  keywords: copy.keywords,
  alternates: buildAlternates(''),
  openGraph: {
    type: 'website',
    url: 'https://www.fijisolutions.net/en',
    locale: copy.ogLocale,
    siteName: 'Fiji Solutions',
    title: copy.title,
    description: copy.description,
    images: [
      {
        url: 'https://www.fijisolutions.net/fijisolutions.png',
        width: 1200,
        height: 630,
        alt: copy.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@fiji_solutions',
    title: copy.title,
    description: copy.description,
    images: ['https://www.fijisolutions.net/fijisolutions.png'],
  },
};

export default function EnglishHomePage() {
  const language = 'en';
  const t = createTranslationFunction(language);

  return (
    <>
      <Hero language={language}/>
      <StatsStrip language={language}/>
      <ClientStrip language={language}/>
      <WhatWeBuild language={language}/>
      <WaysToStart language={language}/>
      {/* The Atlas band (offer-os gtm/atlas AT-D8, AT-D22, no price per AT-D34), moved up to follow
          "Ways to start" on 2026-10-22 (BR-G05). */}
      <AtlasHomeSection language={language}/>
      <ProjectsGrid language={language}/>
      <ReviewSlot language={language}/>
      <HowWeWork language={language}/>
      <HomeFaq language={language}/>
      {/* The newest posts (offer-os gtm/seo-loop-2026-10 S01 needs 3 or more /en/blog/ links here). */}
      <LatestPostsSection posts={blogData.en} language={language}/>
      <ClosingCta language={language}/>
      {/* Where we are and the two website offers, unchanged (see Local.tsx). */}
      <Local t={t} language={language}/>
      <Footer t={t}/>
      {/* Fades the home sections in as they scroll into view (BR-D45). */}
      <Reveal/>
    </>
  );
}
