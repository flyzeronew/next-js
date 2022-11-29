/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.tvbs.com.tw'],
  },
}
module.exports = nextConfig
