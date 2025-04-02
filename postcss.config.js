module.exports = {
  plugins: [
    // We're disabling postcss-normalize to avoid PostCSS version conflicts
    // require('postcss-normalize'),
    require('autoprefixer'),
  ],
};
