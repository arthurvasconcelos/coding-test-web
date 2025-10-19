/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    localPatterns: [
      {
        pathname: '/assets/images/**',
        search: '',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.quartr.com',
        port: '',
      },
    ]
  },
}

module.exports = nextConfig
