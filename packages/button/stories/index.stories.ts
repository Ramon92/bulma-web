// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf, html } from '@open-wc/demoing-storybook';

import '@lion/button/lion-button';
import '../bw-button';

storiesOf('Buttons|Button', module)
  .add(
    'Lion button for testing',
    () => html`
      <lion-button>Test button</lion-button>
    `,
  )
  .add(
    'Bulma button',
    () => html`
            <style>
            body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            }
            bw-button {
                margin-right: 4px;
            }
            </style>
            <bw-button @click="${() => console.log('press button')}">Button</bw-button>
            <bw-button type="is-primary">Primary</bw-button>
            <bw-button type="is-link"">Link</bw-button>
            <bw-button type="is-info"">Info</bw-button>
    `,
  );
