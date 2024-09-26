/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require('next-plausible');

const nextConfig = withPlausibleProxy()({
  reactStrictMode: true,
});

module.exports = {
  ...nextConfig,
  async rewrites() {
    return [
      {
        source: '/invest/:amount-at-:rate-percent-for-:years-years',
        destination: '/invest/:amount/:rate/:years',
      },
    ];
  },
};
