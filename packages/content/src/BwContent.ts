import { LitElement, unsafeCSS, html } from 'lit-element';
import contentStyles from './content.css';

/**
 *
 * @element bw-content
 * @attr is-small - this will set font size small
 * @slot slot - content to be styled automagically
 *
 * @cssprop [--content-heading-color=default hsl(0, 0%, 21%) ] - heading color for content
 *
 * @export
 * @class BwContent
 * @extends {LitElement}
 */
export class BwContent extends LitElement {
  createRenderRoot() {
    return this;
  }

  async connectedCallback() {
    super.connectedCallback();
    const lightDom = this.cloneNode(true);
    await this.updateComplete;
    // this.classList.add('content');

    [...lightDom.children].forEach(elem => this.appendChild(elem));
  }

  render() {
    return html`
      <style>
        ${unsafeCSS(contentStyles)}
      </style>
    `;
  }
}
