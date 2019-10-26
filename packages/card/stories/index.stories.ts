import { TemplateResult } from 'lit-html';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf, html } from '@open-wc/demoing-storybook';
import '@fortawesome/fontawesome-free/js/all';

import '../src/bw-card';

storiesOf('Components | Card', module).add(
  'Bulma Card',
  (): TemplateResult => html`
    <style>
      body {
        font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial,
          sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
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
  `,
);
