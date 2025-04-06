/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '**', // Allow all paths
        },
        {
          protocol: 'https',
          hostname: 'www.pngplay.com',
          pathname: '**', // Allow all paths
        },
      ],
    },
  };
  
  module.exports = nextConfig;