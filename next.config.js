/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mysql_connection_string: 'test connectin string'
  }
}

module.exports = nextConfig
