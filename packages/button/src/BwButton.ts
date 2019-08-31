import { html, unsafeCSS, css, property } from 'lit-element';
import { LionButton } from '@lion/button';
import buttonStyles from './button.css';

export class BwButton extends LionButton {
  @property({ type: Boolean }) primary;

  @property({ type: String, reflect: true }) type;

  connectedCallback() {
    super.connectedCallback();
    // console.log('BUTTON: ',unsafeCSS`${buttonStyles}`);
  }

  static get styles() {
    return [
      css`
        ${unsafeCSS(buttonStyles)}
      `,
    ];
  }

  render() {
    return html`
      <div class="btn button ${this.type}">
        ${this._renderBefore()}
        <slot></slot>
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
}
