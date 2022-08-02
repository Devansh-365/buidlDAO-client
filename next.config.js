const withImages = require('next-images');
const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = withImages({
  images: {
    disableStaticImages: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  swcMinify: true,
});