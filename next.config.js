/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['be.xis.ai', 'localhost'],
  },

}

module.exports = nextConfig
