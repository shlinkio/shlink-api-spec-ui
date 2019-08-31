const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  experimental: {
    publicDirectory: true, // Makes all content in public dir to be served statically from the root
  },
});
