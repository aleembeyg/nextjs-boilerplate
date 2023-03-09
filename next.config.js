/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});
const nextConfig = withPWA({
  devIndicators: {
    buildActivity: false,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
});

module.exports = nextConfig;
