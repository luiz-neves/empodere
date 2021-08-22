/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    ROOT_API: process.env.ROOT_API,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}
