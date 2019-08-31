const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  exportTrailingSlash: true,
  experimental: {
    publicDirectory: true, // Makes all content in public dir to be served statically from the root
  },
  webpack(config) {
    config.optimization.minimizer = config.optimization.minimizer || [];
    config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

    return config;
  },
});
