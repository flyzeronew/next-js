/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cc.tvbs.com.tw'],
  },
}
module.exports = nextConfig
