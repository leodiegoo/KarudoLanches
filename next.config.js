const { env } = require('./src/server/env')

function getConfig(config) {
  return config
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  publicRuntimeConfig: {
    NODE_ENV: env.NODE_ENV
  }
}

module.exports = nextConfig
