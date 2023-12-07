/**
 * @type {import('next').NextConfig}
 */

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextConfig = {
  ...withNextra(),
  // output: 'export',
  // distDir: 'dist',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig