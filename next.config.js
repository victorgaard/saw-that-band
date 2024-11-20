/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  experimental: {
    // ppr: 'incremental',
    reactCompiler: true
  }
};

module.exports = nextConfig;
