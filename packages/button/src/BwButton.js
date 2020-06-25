import { html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { LionButton } from '@lion/button';
import { style } from './button-css';

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
      style,
      css`
        .btn {
          box-sizing: border-box;
          height: 36px;
        }

        :host .btn ::slotted(button) {
          position: absolute;
          visibility: hidden;
        }

        :host([display='is-fullwidth']) {
          display: flex;
          width: 100%;
        }

        .click-area {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: -3px -1px;
          padding: 0;
        }

        :host(:focus) {
          outline: none;
        }

        :host(:focus) .btn {
          box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
        }

        .button.is-small {
          height: 27px;
        }

        .button.is-medium {
          height: 45px;
        }

        .button.is-large {
          height: 54px;
        }
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
