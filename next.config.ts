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
  // The eight paid-ad destinations shipped 2026-08-31. They were missing from this list, so the
  // exact failure the comment above describes — "an ad whose destination lost it" — was live on the
  // pages that cost money per click: /offers/ai-agent hard-404'd while /en/offers/ai-agent served.
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
      ...LOCALELESS.map((path) => ({
        source: `/${path}`,
        destination: `/en/${path}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
