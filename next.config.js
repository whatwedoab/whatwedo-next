const withImages = require('next-images')

module.exports = withImages({
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['src/styles'],
  },
})
