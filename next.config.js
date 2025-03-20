/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/decapcms-testing', // Replace with your repository name
  assetPrefix: '/decapcms-testing/', // Replace with your repository name
  trailingSlash: true,
}

module.exports = nextConfig 