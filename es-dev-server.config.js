module.exports = {
  port: 9001,
  watch: true,
  babel: true,
  nodeResolve: true,
  fileExtensions: ['.mdx', '.js', '.css'],
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
  },
};
