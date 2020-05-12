import { classMap } from 'lit-html/directives/class-map';
import { LitElement, html, css } from 'lit-element';
import { bwStyles } from '@bulma-web/styles';

const collapseStyles = css`
  :host {
    display: block;
  }

  ::slotted([slot='collapse-content']) {
    box-sizing: border-box;
    height: 0;
    overflow: hidden;
    transition: 0.2s ease-in-out;
    transition-property: height, padding;
  }

  slot.open[name='collapse-content'] {
    display: block;
  }
`;

/**
 *
 * @class BwCollapse
 * @extends {LitElement}
 */
export class BwCollapse extends LitElement {
  static get properties() {
    return {
      open: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  static get styles(){
    return [
      bwStyles,
      collapseStyles,
    ];
  }

  constructor() {
    super();
    this.open = false;
  }

  handleTrigger() {
    this.open = !this.open;
    this.requestUpdate();
  }

  async toggleCollapse(element) {
    await this.updated;
    if (this.open) {
      element.setAttribute('style', `height: ${element.scrollHeight}px`);
    } else {
      element.setAttribute('style', 'height: 0px; padding-top: 0px; padding-bottom: 0px;');
    }
  }

  render() {
    const contentElem = this.querySelector('[slot="collapse-content"]');
    this.toggleCollapse(contentElem);
    return html`
      <slot @click="${() => this.handleTrigger()}" name="collapse-trigger"></slot>
      <slot class=${classMap({ open: this.open })} name="collapse-content"></slot>
    `;
  }
}
