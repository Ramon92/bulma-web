import { html, TemplateResult } from 'lit-element';
// eslint-disable-next-line import/no-extraneous-dependencies
import readme from '../README.md';

import '../src/bw-content';

export default {
  title: 'Components | Content',
  component: 'bw-content',
}

export const bulmaContent = (): TemplateResult => html`
<style>
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
  bw-content {
    margin-left: 30px;
    max-width: 600px;
    width: 100%;
  }
</style>
<!-- repalce with content component -->
<bw-content>
  <h1>Content</h1>
  <p>
    When you can't use the CSS classes you want, or when you just want to directly use HTML
    tags, use <code>bw-content</code> as container. It can handle almost any HTML tag:
  </p>
  <ul>
    <li><code>&lt;p&gt;</code> paragraphs</li>
    <li><code>&lt;ul&gt;</code> <code>&lt;ol&gt;</code> <code>&lt;dl&gt;</code> lists</li>
    <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> headings</li>
    <li><code>&lt;blockquote&gt;</code> quotes</li>
    <li><code>&lt;em&gt;</code> and <code>&lt;strong&gt;</code></li>
    <li>
      <code>&lt;table&gt;</code> <code>&lt;tr&gt;</code> <code>&lt;th&gt;</code>
      <code>&lt;td&gt;</code> tables
    </li>
  </ul>
  <p>
    This <code>bw-content</code> element can be used in <em>any</em> context where you just want to
    (or can only) write some <strong>text</strong>. For example, it's used for the paragraph
    you're currently reading.
  </p>
</bw-content>

<bw-content>
<p>You can use the <code>is-small</code>, <code>is-medium</code> and <code>is-large</code> modifiers to change the font size.</p></bw-content>
<h2># Sizes</h2>
<bw-content is-small>
<h1>Hello World</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
<h2>Second level</h2>
<p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
<ul>
  <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
  <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
  <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
  <li>Ut non enim metus.</li>
</ul>
</bw-content>
<bw-content is-medium>
<h1>Hello World</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
<h2>Second level</h2>
<p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
<ul>
  <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
  <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
  <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
  <li>Ut non enim metus.</li>
</ul>
</bw-content>
<bw-content is-large>
<h1>Hello World</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
<h2>Second level</h2>
<p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
<ul>
  <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
  <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
  <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
  <li>Ut non enim metus.</li>
</ul>
</bw-content>
`;