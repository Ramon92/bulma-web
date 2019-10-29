import { html, unsafeCSS, css, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { LionButton } from '@lion/button';
import buttonStyles from './button.css';

export class BwButton extends (LionButton as any) {
  @property({ type: String, reflect: true }) type: string;

  @property({ type: String, reflect: true }) size: string;

  @property({ type: String, reflect: true }) display: string;

  @property({ type: Boolean, reflect: true }) outlined: boolean;

  @property({ type: Boolean, reflect: true }) inverted: boolean;

  @property({ type: Boolean, reflect: true }) loading: boolean;

  @property({ type: Boolean, reflect: true }) disabled: boolean;

  @property({ type: Boolean, reflect: true }) rounded: boolean;

  static get styles(): any {
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
