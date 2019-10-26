import { LitElement, html, unsafeCSS, css } from 'lit-element';
import cardStyles from './card.css';

export class BwCard extends LitElement {
  static get styles() {
    return [
      css`
        ${unsafeCSS(cardStyles)}
      `,
    ];
  }

  render() {
    return html`
      <div class="card">
        <header class="card-header">
          <slot name="header-title"></slot>
          <slot name="header-icon"></slot>
        </header>

        <div class="card-image">
          <slot name="image"></slot>
        </div>

        <div class="card-content">
          <slot name="content"></slot>
        </div>
        <footer class="card-footer">
          <!-- <span class="card-footer-item"> -->
          <slot name="footer-item"></slot>
          <!-- </span> -->
        </footer>
      </div>
    `;
  }
}
