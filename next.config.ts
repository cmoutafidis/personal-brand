import type { NextConfig } from "next";

// Every public route lives under /en or /el. A URL without the prefix — from a business card, an
// email signature, or an ad whose destination lost it — used to hard-404. Only "/" was handled.
const LOCALELESS = [
  'business-process-audit',
  'portfolio',
  'contact',
  // 2026-10-08 (F16, F-D130): a lead who checks the sender may type fijisolutions.net/about.
  'about',
  'legal',
  'privacy-policy',
  'services/custom-software-development-greece',
  'services/data-analysis-greece',
  'services/snowflake-consulting-greece',
  // The eight offer pages shipped 2026-08-31 (as paid-ad destinations; Ads was dropped 2026-09-01
  // and they are organic targets now). They were missing from this list, so the exact failure the
  // comment above describes — "a destination that lost its prefix" — was live on them:
  // /offers/ai-agent hard-404'd while /en/offers/ai-agent served.
  // 2026-09-30 (G19): offers/app-prototype left this list when it retired (offer-os PLAN.md D51);
  // its three URLs redirect to sheet-to-app below, each in one hop. offers/sheet-to-app joined.
  'offers/sheet-to-app',
  'offers/software-prototype',
  'offers/ai-prototype',
  'offers/process-automation',
  'offers/ai-agent',
  'offers/ai-development-sprint',
  'offers/website-seo',
  'offers/website-google-ads',
  // 2026-10-18: Atlas (offer-os gtm/atlas/DECISIONS.md AT-D8).
  'offers/atlas',
  // 2026-10-21: the spreadsheet check (offer-os gtm/seo-loop-2026-10 S14).
  'tools/spreadsheet-check',
  // 2026-10-22: the projects index and every project page (offer-os gtm/broad-home-2026-10 BR-G06). One
  // pattern covers each slug, so a new project needs no line here.
  'projects',
  'projects/:slug',
  // 2026-10-28 (offer-os gtm/seo-plan-2026-10 C1, TECH-3): the blog index; it went to /el/blog until blogData.en had posts.
  'blog',
];

// 2026-10-28 (offer-os gtm/seo-plan-2026-10 C4, PERF-7): files in public/ were served with max-age=0, so a repeat
// visitor revalidated the logo, badge and client logos on every page. These get a week in the browser and a day
// of stale-while-revalidate. A file that changes gets a new name, as the badge did, or waits out the week.
// Hashed /_next/static files already get a year from Next. Keep this list in step with public/.
const STATIC_CACHE = 'public, max-age=604800, stale-while-revalidate=86400';
const STATIC_PATHS = [
  '/clients/:path*',
  '/screenshots/:path*',
  '/og/:path*',
  '/fiji-solutions-logo.webp',
  '/fiji_solutions.png',
  '/fijisolutions.png',
  '/snowflake-select-partner-badge.svg',
  '/charis-moutafidis.jpg',
  '/favicon.png',
];

const nextConfig: NextConfig = {
  // PERF-7: AVIF first where the browser takes it, and optimised images kept 31 days instead of 60 seconds.
  images: {formats: ['image/avif', 'image/webp'], minimumCacheTTL: 2678400},
  async headers() {
    return STATIC_PATHS.map((source) => ({source, headers: [{key: 'Cache-Control', value: STATIC_CACHE}]}));
  },
  async redirects() {
    return [
      {source: '/', destination: '/en', permanent: true},
      // C4, IMG-8 (2026-10-28): the badge was renamed to a lowercase, hyphenated name.
      {source: '/Services_Partner_Badge_Select.svg', destination: '/snowflake-select-partner-badge.svg', permanent: true},
      // ~~The one locale-less path that does NOT go to /en.~~ 2026-10-28 (offer-os gtm/seo-plan-2026-10 C1, TECH-3):
      // blogData.en has had posts since 2026-10-12, so /blog moved into LOCALELESS and goes to /en/blog like every
      // other locale-less path.
      // Retired blog URLs with crawl history (C1, TECH-8): each goes to its closest live page in one hop.
      {
        source: '/el/blog/i-epichirisi-sou-chanei-pelates-choris-google-prototipa',
        destination: '/el/blog/giati-den-emfanizetai-i-istoselida-sto-google',
        permanent: true,
      },
      {source: '/el/blog/auto-sou-kostizei-perissotera-xrimata-apo-osa-nomizeis', destination: '/el/blog', permanent: true},
      {source: '/en/blog/this-is-costing-you-more-money-than-you-think', destination: '/en/blog', permanent: true},
      {
        source: '/en/blog/your-business-is-losing-customers-without-google-visibility',
        destination: '/en/blog',
        permanent: true,
      },
      // The retired App Prototype (offer-os PLAN.md D51, 2026-09-27; shipped with G19). Its page
      // promised a two-week app on its own terms, which the 7-day sheet-to-app offer replaces.
      // Each URL goes to its locale's sheet-to-app page in one hop.
      {source: '/en/offers/app-prototype', destination: '/en/offers/sheet-to-app', permanent: true},
      {source: '/el/offers/app-prototype', destination: '/el/offers/sheet-to-app', permanent: true},
      {source: '/offers/app-prototype', destination: '/en/offers/sheet-to-app', permanent: true},
      ...LOCALELESS.map((path) => ({
        source: `/${path}`,
        destination: `/en/${path}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
