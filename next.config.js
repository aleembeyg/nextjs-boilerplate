/** @type {import('next').NextConfig} */

const nextConfig ={
  devIndicators: {
    buildActivity: false,
  },
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
