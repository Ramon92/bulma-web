import { classMap } from 'lit-html/directives/class-map';
import { LitElement, html, property, css } from 'lit-element';

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
  @property({
    type: Boolean,
    reflect: true,
    attribute: true,
  })
  open = false;

  handleTrigger(): void {
    this.open = !this.open;
    this.requestUpdate();
  }

  async toggleCollapse(element: HTMLElement) {
    await this.updated;
    if (this.open) {
      element.setAttribute('style', `height: ${element.scrollHeight}px`);
    } else {
      element.setAttribute('style', 'height: 0px; padding-top: 0px; padding-bottom: 0px;');
    }
  }

  render() {
    const contentElem: HTMLElement = this.querySelector('[slot="collapse-content"]');
    this.toggleCollapse(contentElem);
    return html`
      <style>
        ${collapseStyles}
      </style>
      <slot @click="${() => this.handleTrigger()}" name="collapse-trigger"></slot>
      <slot class=${classMap({ open: this.open })} name="collapse-content"></slot>
    `;
  }
}
