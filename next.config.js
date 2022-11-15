/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    SPACE: process.env.SPACE,
    ACCESS: process.env.ACCESS
  },
  nextConfig
}