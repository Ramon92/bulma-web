import { storiesOf, html } from '@open-wc/demoing-storybook';

import '@lion/button/lion-button';
import '../bw-button'

storiesOf('Buttons|Button', module)
.add(
    'Lion button for testing',
    () => html`
        <lion-button>Test button</lion-button>
    `
)
.add('Bulma button', 
() => html`
<bw-button>Test</bw-button>
`)