/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/decapcms-testing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/decapcms-testing/' : '',
  trailingSlash: true,
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/admin': { page: '/admin' },
    }
  },
}

module.exports = nextConfig 