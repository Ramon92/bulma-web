import { html, unsafeCSS, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { LionButton } from '@lion/button';
import buttonStyles from './button.css';

export class BwButton extends LionButton {
  static get properties (){
    return {
      type: { type: String, reflect: true },
      size: { type: String, reflect: true },
      display: { type: String, reflect: true },
      outlined: { type: Boolean, reflect: true },
      inverted: { type: Boolean, reflect: true },
      loading: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
      rounded: { type: Boolean, reflect: true },
    }
  }

  static get styles() {
    return [
      css`
        ${unsafeCSS(buttonStyles)}
      `,
    ];
  }

  render() {
    const classes = {
      'is-outlined': this.outlined,
      'is-inverted': this.inverted,
      'is-loading': this.loading,
      'is-rounded': this.rounded,
      [this.display]: this.display,
      [this.type]: this.type,
      [this.size]: this.size,
    };

    return html`
      <div class="btn button ${classMap(classes)}" ?disabled=${this.disabled}>
        ${this._renderBefore()}
        ${LionButton.__isIE11()
          ? html`
              <div id="${this._buttonId}"><slot></slot></div>
            `
          : html`
              <slot></slot>
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
}
