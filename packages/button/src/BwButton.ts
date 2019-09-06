import { html, unsafeCSS, css, property } from 'lit-element';
import { LionButton } from '@lion/button';
import buttonStyles from './button.css';

export class BwButton extends LionButton {
  @property({ type: String, reflect: true }) type = '';

  @property({ type: String, reflect: true }) size = '';

  @property({ type: String, reflect: true }) display = '';

  static get styles() {
    return [
      css`
        ${unsafeCSS(buttonStyles)}
      `,
    ];
  }

  render() {
    return html`
      <div class="btn button ${this.type} ${this.size} ${this.display}">
        ${this._renderBefore()}
        ${this.$$slot('icon-left') &&
          html`
            <span class="icon">
              <slot name="icon-left"></slot>
            </span>
          `}
        <span><slot></slot></span>
        ${this.$$slot('icon-right') &&
          html`
            <span class="icon">
              <slot name="icon-right"></slot>
            </span>
          `}
        ${this._renderAfter()}
        <slot name="_button"></slot>
        <div class="click-area"></div>
      </div>
    `;
  }

  /* eslint-disable-next-line class-methods-use-this */
  _renderBefore() {
    return html``;
  }

  /* eslint-disable-next-line class-methods-use-this */
  _renderAfter() {
    return html``;
  }

  $$slot(slot: string): HTMLElement {
    return super.$$slot(slot);
  }
}
