// eslint-disable-next-line import/no-extraneous-dependencies
import { html } from 'lit-element';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/js/all';
import '@lion/button/lion-button';
// import readme from '../README.md';
import '../src/bw-button';

export default {
    title: 'Components|Button',
    component: 'bw-button',
}

export const bulmaButton = () => html`
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
.buttons.inverted {
    background: #00d1b2;
    max-width: 500px;
    padding: 20px;
    border-radius: 5px;
} 
.buttons.display {
    max-width: 300px;
}
.display > bw-button {
    margin-right: 0;
    margin-bottom: 4px;;
}

blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
margin: 0;
padding: 0;
}

body, button, input, select, textarea {
font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
}

body {
color: #4a4a4a;
font-size: 1em;
font-weight: 400;
line-height: 1.5;
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
    <span><i class="fab fa-github"></i> Github</span>
    </bw-button>
    <bw-button>
         <span>Github <i class="fab fa-github"></i></span>
    </bw-button>
</div>

<h2># Outlined</h2>
<div class="buttons">
    <bw-button outlined>Outlined</bw-button>
    <bw-button type="is-primary" outlined>Outlined</bw-button>
    <bw-button type="is-success" outlined>Outlined</bw-button>
    <bw-button type="is-danger" outlined>Outlined</bw-button>
    <bw-button type="is-warning" outlined>Outlined</bw-button>
</div>
<h2>Inverted</h2>
<div class="buttons inverted">
    <bw-button type="is-primary" inverted>Inverted</bw-button>
    <bw-button type="is-success" inverted>Inverted</bw-button>
    <bw-button type="is-danger" inverted>Inverted</bw-button>
    <bw-button type="is-warning" inverted>Inverted</bw-button>
</div>

<h2>Inverted Outlined</h2>
<div class="buttons inverted">
    <bw-button type="is-primary" outlined inverted>Inverted</bw-button>
    <bw-button type="is-success" outlined inverted>Inverted</bw-button>
    <bw-button type="is-danger" outlined inverted>Inverted</bw-button>
    <bw-button type="is-warning" outlined inverted>Inverted</bw-button>
</div>

<h2>States and Types</h2>
<div class="buttons">
    <bw-button loading>loading</bw-button>
    <bw-button disabled>Disabled</bw-button>
    <bw-button rounded>Rounded</bw-button>
</div>

`
