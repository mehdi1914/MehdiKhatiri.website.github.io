/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // If your repository name is different from your username, you'll need this:
  basePath: '/MehdiKhatiri.website.github.io',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig