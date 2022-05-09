/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net"],
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACEID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_DELIVERY_KEY,
  },
};

module.exports = nextConfig;
