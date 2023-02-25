/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Spotify images
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'scontent.ftxl3-1.fna.fbcdn.net',
        pathname: '/**'
      }
    ]
  },
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
