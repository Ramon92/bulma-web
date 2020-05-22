import { LitElement, html, css } from 'lit-element';
import { bwStyles } from '@bulma-web/styles';

/**
 * The famous media object prevalent in social media interfaces, but useful in any context
 * @element bw-media
 *
 * @slot media-left - element to be aligned on the left side of the bw-media element
 * @slot media-content - Content for the media eg. a paragraph
 * @slot media-nested - To be used to nest multiple media components
 * @slot media-right - small element to be aligned on the right such as a close icon button
 *
 * @export
 * @class BwMedia
 * @extends {LitElement}
 */
export class BwMedia extends LitElement {
  static get properties() {
    return {
      class: {
        type: String,
        reflect: true,
      },
      slots: {
        type: Object,
        attribute: false,
        reflect: false,
      },
    };
  }

  constructor() {
    super();
    this.class = 'media';
    this.slots = {
      'media-left': false,
      'media-right': false,
      'media-content': false,
      'media-nested': false,
    };
  }

  static get styles() {
    return [
      bwStyles,
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    const slotKeys = Object.keys(this.slots);
    slotKeys.forEach(slot => {
      this.slots[slot] = !!this.querySelector(`[slot=${slot}]`);
    });
  }

  render() {
    return html`
    <div class="media">
      ${this.slots['media-left'] ?
        html`
          <div class="media-left">
            <slot name="media-left"> </slot>
          </div>
        `: ''}
      <div class="media-content">
        <slot name="media-content"></slot>
        <slot name="media-nested"></slot>
      </div>
      <slot class="media-right" name="media-right"></slot>
    </div>
    `;
  }
}
