import {
  addParameters,
  addDecorator,
  setCustomElements,
  withA11y,
} from '@open-wc/demoing-storybook';

import { bwStyles } from '@bulma-web/styles';
import { css } from 'lit-element';

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

const additionalStyles = css`
  .tag:not(body) {
    background-color: transparent !important;
    padding: 0;
  }
  .token.attr-name {
    padding-left: 0.55em;
  }
`;

document.adoptedStyleSheets = [bwStyles.styleSheet, additionalStyles.styleSheet];