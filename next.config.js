/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  experimental: {
    ppr: true,
    reactCompiler: true
  }
};

module.exports = nextConfig;
