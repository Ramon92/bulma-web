import { LitElement, html } from 'lit-element';
import { bwStyles } from '@bulma-web/styles';
import { style } from './message-css';

export class BwMessage extends LitElement {
  static get properties() {
    return {
      active: {
        type: Boolean,
        reflect: true,
      },
      closeable: {
        type: Boolean,
      },
      type: {
        type: String,
      },
      hasHeader: {
        type: Boolean,
        attribute: false,
      },
    };
  }

  constructor() {
    super();
    this.active = true;
    this.hasHeader = true;
  }

  static get styles() {
    return [
      bwStyles,
      style,
    ];
  }

  closeMessage() {
    this.active = false;
  }

  render() {
    return this.active
      ? html`
          <article class="message ${this.type}">
            ${this.hasHeader
              ? html`
                  <div class="message-header">
                    <p><slot name="message-header"></slot></p>
                    ${this.closeable &&
                      html`
                        <button
                          @click="${() => this.closeMessage()}"
                          class="delete"
                          aria-label="delete"
                        ></button>
                      `}
                  </div>
                `
              : ''}
            <div class="message-body">
              <slot></slot>
            </div>
          </article>
        `
      : '';
  }

  firstUpdated() {
    const slot = this.shadowRoot.querySelector('slot[name="message-header"]');
    const slotNodes = slot.assignedNodes();
    if (slotNodes.length == 0) {
      this.hasHeader = false;
    }
  }
}
