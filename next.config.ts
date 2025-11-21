import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://unpkg.com https://r2.leadsy.ai https://tag.trovo-tag.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.google.com https://www.googleadservices.com; connect-src 'self' https://wvbknd.leadsy.ai https://api.vapi.ai https://*.vapi.ai https://*.daily.co wss://*.daily.co https://*.sentry.io https://www.google-analytics.com https://np40nkw6be.execute-api.us-east-1.amazonaws.com https://www.google.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.ch; object-src 'none';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;