import { LitElement, html, css } from 'lit-element';

import { bwStyles } from '@bulma-web/styles/src/styles';

export class BwCard extends LitElement {
  static get properties() {
    return {
      size: {
        type: String,
      },
    };
  }

  static get styles() {
    return [
      bwStyles,
      css`
        ::slotted([slot='image']) {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="card">
        <header class="card-header">
          <slot class="card-header-title" name="header-title"></slot>
          <slot class="card-header-icon" name="header-icon"></slot>
        </header>

        <div class="card-image">
          <figure class="image ${this.size}">
            <slot name="image"></slot>
          </figure>
        </div>

        <div class="card-content">
          <slot name="content"></slot>
        </div>
        <footer class="card-footer">
          <slot name="footer-item"></slot>
        </footer>
      </div>
    `;
  }
}
