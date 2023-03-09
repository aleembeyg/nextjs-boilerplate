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
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
  output: 'standalone',
  // i18n: {
  //   // These are all the locales you want to support in
  //   // your application
  //   locales: ["en", "fr", "ar"],
  //   // This is the default locale you want to be used when visiting
  //   // a non-locale prefixed path e.g. `/hello`
  //   defaultLocale: "en",
  //   localeDetection: false,
  // },
  images: {
    unoptimized: true,
  },
});

module.exports = nextConfig;
