const path = require('path');
// const defaultConfig = require('@open-wc/demoing-storybook/default-storybook-webpack-config.js');

module.exports = async ({config}) => {
  config.module.rules.push({
    test: [/\.stories\.ts$/, /index\.ts/],
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  config.module.rules.push({
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
        ]
      ],
      presets: [
        [
          '@babel/typescript',
          {
            useBuiltIns: 'entry',
            corejs: '3',
          },
        ],
      ],
      babelrc: false,
    },
  });

  config.module.rules[3] = {
        test: /\.css$/,
        use : require.resolve('raw-loader'),
      }

  config.resolve.extensions.push('.ts', '.css', 'scss');
  return config;
};
