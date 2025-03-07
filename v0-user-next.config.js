/** @type {import('next').NextConfig} */
const nextConfig = {
  // Increase timeout for static generation
  staticPageGenerationTimeout: 120,

  // Image optimization
  images: {
    domains: ["v0.dev"],
    formats: ["image/avif", "image/webp"],
  },

  // Performance optimizations
  swcMinify: true,

  // Improve accessibility
  reactStrictMode: true,

  // Improve error handling
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig

