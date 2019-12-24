module.exports = {
  port: 9001,
  watch: true,
  babel: true,
  nodeResolve: true,
  fileExtensions: ['.ts', '.mdx', '.js', '.css'],
  rootDir: './',
  babelConfig: {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "esmodules": true
          },
          "modules": false
        }
      ],
      "@babel/preset-typescript"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ],
      [
        "babel-plugin-inline-import",
        {
          "extensions": [
            ".css"
          ]
        }
      ]
    ]
  },
}