const postcssGlobalData = require('@csstools/postcss-global-data');
const postcssCustomMedia = require('postcss-custom-media');
const postcssNesting = require('postcss-nesting');

module.exports = {
  plugins: [
    postcssGlobalData({
      files: ['./src/layouts/DefaultLayout/media.css'],
    }),
    postcssCustomMedia(),
    postcssNesting(),
  ],
};
