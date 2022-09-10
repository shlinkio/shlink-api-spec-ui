export default {
  trailingSlash: true, // Makes pages to be exported as index.html files
  swcMinify: true, // This will make compiled assets to be minified via SWC instead of webpack plugin
  eslint: {
    ignoreDuringBuilds: true,
  },
};
