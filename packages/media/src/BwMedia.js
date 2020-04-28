import { LitElement, html, css } from 'lit-element';
import {bwStyles} from '@bulma-web/styles'

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
  static get styles() {
    return [
      bwStyles,
    css`
    ::slotted(bw-content:not(:last-child)){
    margin-bottom: 0.75rem;
}

::slotted([slot=media-nested]){
  // border-top: 1px solid rgba($border, 0.5);
  display: flex;
  padding-top: 0.75rem;
  margin-top: 0.5rem;
}
    `
    ];
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
