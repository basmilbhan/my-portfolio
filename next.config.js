/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src/sass'],
  },
  images: {
    domains: [],
    unoptimized: true
  }
}

module.exports = nextConfig
