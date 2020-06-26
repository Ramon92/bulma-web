const { babel } = require('@rollup/plugin-babel');

module.exports = {
  stories: ['../packages/**/stories/*.stories.{js,mdx}'],
  addons: [
    'storybook-prebuilt/addon-knobs/register.js',
    'storybook-prebuilt/addon-docs/register.js',
    'storybook-prebuilt/addon-viewport/register.js',
    'storybook-prebuilt/addon-actions/register.js',
    'storybook-prebuilt/addon-a11y/register.js',
  ],
  esDevServer: {
    // custom es-dev-server options
    port: 9001,
    watch: true,
    open: true,
    nodeResolve: true,
    fileExtensions: ['.mdx', '.md', '.js', '.css'],
    rootDir: './',
    babelConfig: {
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
      plugins: [
        '@babel/plugin-proposal-class-properties',
        ['@babel/proposal-decorators', { decoratorsBeforeExport: true }],
        '@babel/plugin-proposal-object-rest-spread',
      ],
    },
  },
  outputDir: '../_site',
};
