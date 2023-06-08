/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: true,
  reactStrictMode: false,
  transpilePackages: ['countup.js', 'react-countup'],
  env: {
    showPage: true
  }
};

module.exports = nextConfig;
