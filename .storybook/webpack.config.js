const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
// const defaultConfig = require('@open-wc/demoing-storybook/default-storybook-webpack-config.js');

module.exports = async ({ config }) => {
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
        '@babel/plugin-syntax-import-meta',
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
      ],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: true,
            },
            modules: false,
          },
        ],
      ],
      babelrc: false,
    },
  });

  config.module.rules[3] = {
    test: /\.css$/,
    use: require.resolve('raw-loader'),
  };

  config.resolve.extensions.push('.js', '.css', 'scss');

  config.module.rules.push({
    test: /\.(stories|story)\.mdx$/,
    use: [
      {
        loader: 'babel-loader',
        // may or may not need this line depending on your app's setup
        options: {
          plugins: ['@babel/plugin-transform-react-jsx'],
        },
      },
      {
        loader: '@mdx-js/loader',
        options: {
          compilers: [createCompiler({})],
        },
      },
    ],
  });
  // console.dir(config.module.rules[0], {depth: 20})
  // config.module.rules[0].use[0].options.plugins.push(require.resolve('@babel/plugin-syntax-import-meta'));
  // config.module.rules[0].use[0].options.plugins.push([
  //   require.resolve('babel-plugin-bundled-import-meta'),
  //   {
  //     importStyle: 'baseURI',
  //   }
  // ]);

  return config;
};
