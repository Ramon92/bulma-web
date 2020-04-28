// eslint-disable-next-line import/no-extraneous-dependencies
import { html } from '@open-wc/demoing-storybook';
import '@fortawesome/fontawesome-free/js/all';
// import readme from '../README.md';

import '../src/bw-card';
import { bwStyles } from '@bulma-web/styles';

export default {
  title: 'Components|Card',
  component: 'bw-card',
};

export const bwCard = () => html`
  <style>
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

    ${bwStyles}
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
      <p slot="footer-item" class="card-footer-item">
        <span>
          View on
          <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
        </span>
      </p>

      <p slot="footer-item" class="card-footer-item">
        <span> Share on <a href="#">Facebook</a> </span>
      </p>
    </bw-card>
  </div>

  <h2># card with image and header</h2>
  <div class="demo">
    <bw-card size="is-4by3">
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
