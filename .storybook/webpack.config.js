const path = require('path');
const defaultConfig = require('@open-wc/demoing-storybook/default-storybook-webpack-config.js');

module.exports = ({ config }) => {
  const newConfig = defaultConfig({
    config,
    transpilePackages: ['lit-html', 'lit-element', '@open-wc', '@lion'],
  });

  // newConfig.module.rules.push({
  //   test: [/\.stories\.js$/, /index\.js/],
  //   loaders: [require.resolve('@storybook/addon-storysource/loader')],
  //   enforce: 'pre',
  // });

  newConfig.module.rules.push({
    test: /\.s(c|a)ss$/,
    include: path.resolve(__dirname, '../'),
    use: [
      {
        loader: 'lit-scss-loader',
        options: {
          minify: false, // defaults to false
        },
      },
      {
        loader: 'extract-loader',
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          // options...
        },
      },
    ],
  });

  return newConfig;
};
