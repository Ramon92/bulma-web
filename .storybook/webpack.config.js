const path = require('path');
const defaultConfig = require('@open-wc/demoing-storybook/default-storybook-webpack-config.js');

module.exports = async ({ config, mode }) => {
  const newConfig = defaultConfig({
    config,
    transpilePackages: ['lit-html', 'lit-element', '@open-wc', '@lion'],
  });

  newConfig.module.rules.push({
    test: [/\.stories\.ts$/, /index\.ts/],
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  newConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-object-rest-spread',
        [
          '@babel/plugin-proposal-decorators',
          {
            legacy: true,
          },
        ],
        [
          '@babel/plugin-proposal-class-properties',
          {
            loose: true,
          },
        ],
        [
          'babel-plugin-inline-import',
          {
            extensions: ['.css'],
          },
        ],
      ],
      presets: [
        [
          '@babel/typescript',
          {
            useBuiltIns: 'entry',
            corejs: '2',
          },
        ],
      ],
      babelrc: false,
    },
  });

  newConfig.resolve.extensions.push('.ts', '.css');

  // newConfig.module.rules.push({
  //   test: /\.s(c|a)ss$/,
  //   include: path.resolve(__dirname, '../'),
  //   use: [
  //     {
  //       loader: 'lit-scss-loader',
  //       options: {
  //         minify: false, // defaults to false
  //       },
  //     },
  //     {
  //       loader: 'extract-loader',
  //     },
  //     {
  //       loader: 'css-loader',
  //       options: {
  //         sourceMap: true,
  //       },
  //     },
  //     {
  //       loader: 'sass-loader',
  //       options: {
  //         sourceMap: true,
  //         // options...
  //       },
  //     },
  //   ],
  // });

  return newConfig;
};
