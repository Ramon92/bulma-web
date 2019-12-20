module.exports = {
  stories: ['../packages/**/stories/*.stories.ts'],
  addons: [
    '@storybook/addon-docs/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links/register',
    '@storybook/addon-viewport/register',
  ],
  // webpack: async config => {
  //   // find web-components rule for extra transpilation
  //   const webComponentsRule = config.module.rules.find(
  //     rule => rule.use && rule.use.options && rule.use.options.babelrc === false
  //   );
  //   // add your own `my-library`
  //   webComponentsRule.test.push(new RegExp(`node_modules(\\/|\\\\)@lion/button(.*)\\.js$`));
  //   console.dir(config, {depth: 20})
  //   return config;
  // },

};
