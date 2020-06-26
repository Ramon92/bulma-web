import { LitElement, html } from 'lit-element';
import {style as cardStyles} from './card-css';


export class BwCard extends LitElement {
  static get properties() {
    return {
      size: {
        type: String,
      },
    };
  }

  static get styles() {
    return [cardStyles];
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
