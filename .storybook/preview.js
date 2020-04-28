import {
  addParameters,
  addDecorator,
  setCustomElements,
  withA11y,
} from '@open-wc/demoing-storybook';

import { bwStyles } from '@bulma-web/styles';

async function run() {
  const customElements = await (
    await fetch(new URL('../custom-elements.json', import.meta.url))
  ).json();

  setCustomElements(customElements);

  addDecorator(withA11y);

  addParameters({
    options: {
      hierarchyRootSeparator: /\|/,
    },
  });
}

run();

document.adoptedStyleSheets = [bwStyles.styleSheet];