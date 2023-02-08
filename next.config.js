/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: [
    'page.tsx',
    'api.ts',
    'api.tsx',
  ],
  distDir: 'build'
}

module.exports = nextConfig