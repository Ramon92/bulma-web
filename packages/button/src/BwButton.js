import { html } from 'lit-element';
import { LionButton } from '@lion/button';
import buttonStyles from './button.scss';

export class BwButton extends LionButton {
  static get properties() {
    return {
      primary: {
        type: Boolean,
        reflect: true,
      },
      type: {
        type: String,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [buttonStyles];
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
