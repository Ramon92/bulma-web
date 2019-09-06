// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf, html } from '@open-wc/demoing-storybook';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/js/all';
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
            font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            }
            bw-button {
                margin-right: 4px;
            }
            
            .buttons {
                margin-bottom: 15px;;
            }
            .buttons.display {
                max-width: 300px;
            }
            .display > bw-button {
                margin-right: 0;
                margin-bottom: 4px;;
            }
            </style>
            
            <h1>Button</h1>
            
            <h2># Colors</h2>
            <div class="buttons">
                <bw-button type="is-white">White</bw-button>
                <bw-button type="is-light">Light</bw-button>
                <bw-button type="is-dark">Dark</bw-button>
                <bw-button type="is-black">Black</bw-button>
                <bw-button type="is-text">Text</bw-button>
            </div>
            <div class="buttons">
                <bw-button @click="${() => console.log('press button')}">Button</bw-button>
                <bw-button type="is-primary">Primary</bw-button>
                <bw-button type="is-link"">Link</bw-button>
                <bw-button type="is-info"">Info</bw-button>
                <bw-button type="is-success"">Success</bw-button>
                <bw-button type="is-warning"">Warning</bw-button>
                <bw-button type="is-danger"">Danger</bw-button>
            </div>
            
            <h2># Sizes</h2>
            <div class="buttons">
                <bw-button size="is-small">Small</bw-button>
                <bw-button>Default</bw-button>
                <bw-button size="is-normal">Normal</bw-button>
                <bw-button size="is-medium">Medium</bw-button>
                <bw-button size="is-large">Large</bw-button>
            </div>
            
            <h2># Displays</h2>
            <div class="buttons / display">
                <bw-button display="is-fullwidth" size="is-small">Small</bw-button>
                <bw-button display="is-fullwidth">Normal</bw-button>
                <bw-button display="is-fullwidth" size="is-medium">Medium</bw-button>
                <bw-button display="is-fullwidth" size="is-large">Large</bw-button>
            </div>
            
            <h2># Icons</h2>
            <div class="buttons / icons">
                <bw-button>
                     <i slot="icon-left" class="fab fa-github"></i>
                     Github
                </bw-button>
                <bw-button>
                     <i slot="icon-right" class="fab fa-github"></i>
                     Github
                </bw-button>
            </div>
    `,
  );
