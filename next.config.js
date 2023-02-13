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
      }
    ]
  }
}

module.exports = nextConfig
