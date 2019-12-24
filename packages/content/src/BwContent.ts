import { LitElement, unsafeCSS, html } from 'lit-element';
import contentStyles from './content.css';

/**
 *
 *
 * @attr is-small - this will set font size small
 * @slot slot - content to be styled automagically
 *
 * @cssprop [--content-heading-color=hsl(0, 0%, 21%) ] - heading color for content
 * @cssprop --content-heading-weight - font weight for heading
 * @cssprop --content-heading-line-height - heading font line height
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
    const lightDom: any = this.cloneNode(true);
    await this.updateComplete;

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
