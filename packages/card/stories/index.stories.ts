// eslint-disable-next-line import/no-extraneous-dependencies
import { html } from 'lit-element';
import '@fortawesome/fontawesome-free/js/all';
// import readme from '../README.md';

import '../src/bw-card';

export default {
  title: 'Components|Card',
  component: 'bw-card',
};

export const bwCard = () => html`
  <style>
    blockquote,
    body,
    dd,
    dl,
    dt,
    fieldset,
    figure,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    html,
    iframe,
    legend,
    li,
    ol,
    p,
    pre,
    textarea,
    ul {
      margin: 0;
      padding: 0;
    }

    body,
    button,
    input,
    select,
    textarea {
      font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    body {
      color: #4a4a4a;
      font-size: 1em;
      font-weight: 400;
      line-height: 1.5;
    }

    div.demo {
      max-width: 350px;
      margin: 0 0 20px 10px;
    }
  </style>

  <h1>card</h1>

  <h2># simple card</h2>
  <div class="demo">
    <bw-card>
      <div slot="content">
        <h2>
          “There are two hard things in computer science: cache invalidation, naming things, and
          off-by-one errors.”
        </h2>
        <p>Jeff Atwood</p>
      </div>
    </bw-card>
  </div>

  <h2># card with footer items</h2>
  <div class="demo">
    <bw-card>
      <div slot="content">
        <h2>
          “There are two hard things in computer science: cache invalidation, naming things, and
          off-by-one errors.”
        </h2>
        <p>Jeff Atwood</p>
      </div>
      <p slot="footer-item">
        <span>
          View on
          <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
        </span>
      </p>

      <p slot="footer-item">
        <span> Share on <a href="#">Facebook</a> </span>
      </p>
    </bw-card>
  </div>

  <h2># card with image and header</h2>
  <div class="demo">
    <bw-card>
      <span slot="header-title">Component</span>
      <i slot="header-icon" class="fas fa-coffee"></i>
      <img
        slot="image"
        src="https://bulma.io/images/placeholders/1280x960.png"
        alt="Placeholder image"
      />
      <div slot="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </bw-card>
  </div>
`;

// storiesOf('Components | Card', module).add(
//   'Bulma Card',
//   (): TemplateResult =>  {
//     notes: {
//       markdown: readme
//     }
//   }
// );
