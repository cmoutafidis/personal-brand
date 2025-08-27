import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://unpkg.com https://r2.leadsy.ai https://tag.trovo-tag.com; connect-src 'self' https://wvbknd.leadsy.ai; object-src 'none';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;