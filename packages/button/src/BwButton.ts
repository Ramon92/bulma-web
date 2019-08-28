import { html, property } from 'lit-element';
import { LionButton } from '@lion/button';
import buttonStyles from './button.scss';

export class BwButton extends LionButton {
  @property({ type: Boolean }) primary;

  @property({
    type: Object,
    attribute: false,
  })
  buttonClasses = {
    'is-primary': this.primary,
  };

  static get styles() {
    return [buttonStyles];
  }

  render() {
    return html`
      <button class="button">
        <span><slot></slot></span>
      </button>
    `;
  }
}
