// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf, html } from '@open-wc/demoing-storybook';

import '@lion/button/lion-button';
import '../bw-button';

storiesOf('Buttons|Button', module)
  .add(
    'Lion button for testing',
    (): any => html`
      <lion-button>Test button</lion-button>
    `,
  )
  .add(
    'Bulma button',
    (): any => html`
      <bw-button @click="${() => console.log('press button')}">Button</bw-button>
    `,
  );
