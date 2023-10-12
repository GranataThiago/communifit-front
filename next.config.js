/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = withBundleAnalyzer(
  {
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
        }
       
      ]
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
)

module.exports = nextConfig
