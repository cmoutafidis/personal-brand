/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.pexels.com'],
    unoptimized: true
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;