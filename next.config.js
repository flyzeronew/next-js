/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cc.tvbs.com.tw'
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com'
      }
    ],
  }, 
}
module.exports = nextConfig
