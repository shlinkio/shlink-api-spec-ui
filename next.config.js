const withFonts = require('next-fonts');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = withFonts({
  trailingSlash: true, // Makes pages to be exported as index.html files
  webpack(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(new CssMinimizerPlugin({}));

    return config;
  },
});
