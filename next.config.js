/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["pbs.twimg.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'www.tmgranata.com'
      }
    ]
  },
  publicRuntimeConfig: {
    // API_URL_LOCAL: "http://localhost:8000/api",
    // API_URL_DEV: "https://communifit-back-git-main-peaky-devs.vercel.app/api",
    // API_URL_PROD: "https://communifit-back-git-main-peaky-devs.vercel.app/api",
    // API_KEY: "C0mmunityF1tB4ck3nd2023",
    // DEVELOPMENT: process.env.NODE_ENV === "development",
    // LOCAL: process.env.NODE_ENV === "local",
    // PRODUCTION: process.env.NODE_ENV === "production",
    // DOMAIN_LOCAL: "http://localhost:3000/",
    // DOMAIN_DEVELOPMENT: "http://localhost:3000/",
    // DOMAIN_PRODUCTION: "https://communifit-front.vercel.app/",
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/site"
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/site",
        destination: "/",
        permanent: true
      }
    ]
  }

}

module.exports = nextConfig
