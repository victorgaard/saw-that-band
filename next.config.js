/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  experimental: {
    ppr: true
  }
};

module.exports = nextConfig;
