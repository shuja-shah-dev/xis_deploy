/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ["be.xis.ai", "localhost"],
    minimumCacheTTL: 31536000,
  },
};

module.exports = nextConfig
