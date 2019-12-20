import { configure } from '@storybook/web-components';

const req = require.context('../stories', true, /\.stories\.(js|mdx)$/);
configure(req, module);
console.log('context', req);
if (module.hot) {
  console.log('reload')
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
