import { LitElement, html, unsafeCSS } from 'lit-element';
import mediaStyles from './media.css';

/**
 *
 *
 * @slot media-left - media to be aligned on the left side of the bw-media element
 * @export
 * @class BwMedia
 * @extends {LitElement}
 */
export class BwMedia extends LitElement {
  static get styles() {
    return unsafeCSS(mediaStyles);
  }

  render() {
    return html`
      <div class="media">
        <slot class="media-left" name="media-left"> </slot>
        <div class="media-content">
          <slot name="media-content"></slot>
          <slot name="media-nested"></slot>
        </div>
        <slot class="media-right" name="media-right"></slot>
      </div>
    `;
  }
}
