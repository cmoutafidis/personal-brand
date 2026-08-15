import type { NextConfig } from "next";

// Every public route lives under /en or /el. A URL without the prefix — from a business card, an
// email signature, or an ad whose destination lost it — used to hard-404. Only "/" was handled.
const LOCALELESS = [
  'business-process-audit',
  'portfolio',
  'contact',
  'blog',
  'legal',
  'privacy-policy',
  'services/custom-software-development-greece',
  'services/data-analysis-greece',
  'services/snowflake-consulting-greece',
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
