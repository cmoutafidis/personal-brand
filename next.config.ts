import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed restrictive CSP for better third-party service compatibility
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'Content-Security-Policy',
  //           value: "...",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;