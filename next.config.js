/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net"],
  },
  env: {
    CONTENTFUL_SPACEID: process.env.CONTENTFUL_SPACEID,
    CONTENTFUL_DELIVERY_KEY: process.env.CONTENTFUL_DELIVERY_KEY,
  },
};

module.exports = nextConfig;
