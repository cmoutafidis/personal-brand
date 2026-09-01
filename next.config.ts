import type { NextConfig } from "next";

// Every public route lives under /en or /el. A URL without the prefix — from a business card, an
// email signature, or an ad whose destination lost it — used to hard-404. Only "/" was handled.
const LOCALELESS = [
  'business-process-audit',
  'portfolio',
  'contact',
  'legal',
  'privacy-policy',
  'services/custom-software-development-greece',
  'services/data-analysis-greece',
  'services/snowflake-consulting-greece',
  // The eight offer pages shipped 2026-08-31 (as paid-ad destinations; Ads was dropped 2026-09-01
  // and they are organic targets now). They were missing from this list, so the exact failure the
  // comment above describes — "a destination that lost its prefix" — was live on them:
  // /offers/ai-agent hard-404'd while /en/offers/ai-agent served.
  'offers/app-prototype',
  'offers/software-prototype',
  'offers/ai-prototype',
  'offers/process-automation',
  'offers/ai-agent',
  'offers/ai-development-sprint',
  'offers/website-seo',
  'offers/website-google-ads',
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {source: '/', destination: '/en', permanent: true},
      // The one locale-less path that does NOT go to /en. The blog is Greek-only for now and
      // /en/blog is an empty noindex page, so the English default would land a reader on nothing.
      // Move this into LOCALELESS the day blogData.en has posts.
      {source: '/blog', destination: '/el/blog', permanent: true},
      ...LOCALELESS.map((path) => ({
        source: `/${path}`,
        destination: `/en/${path}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
