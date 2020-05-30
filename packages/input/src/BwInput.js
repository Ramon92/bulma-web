import { LionInput } from '@lion/input';
import { bwStyles } from '@bulma-web/styles';
import { css } from 'lit-element';

/**
 * LionInput: extension of lion-field with native input element in place and user friendly API
 *
 * @customElement bw-input
 * @extends {LionInput}
 */
export class BwInput extends LionInput {
  static get properties() {
    return {
      ...LionInput.properties,
      color: {
        type: String,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [
      ...super.styles,
      bwStyles,
      css`
        :host {
          margin-bottom: 0.75rem;
        }
      `,
    ];
  }

  get slots() {
    return {
      ...super.slots,
      label: () => {
        const nativeLabel = super.slots.label();
        nativeLabel.classList.add('label');
        return nativeLabel;
      },
      input: () => {
        // TODO: Find a better way to do value delegation via attr
        const native = document.createElement('input');
        native.classList.add('input');
        if (this.hasAttribute('value')) {
          native.setAttribute('value', this.getAttribute('value'));
        }
        return native;
      },
    };
  }

   connectedCallback() {
    super.connectedCallback();
    this.classList.add('control');
    const beforeSlot = this._beforeNode;
    if(beforeSlot){
      beforeSlot.classList.add('is-left', 'icon');
      this.classList.add('has-icons-left');
    }
    // console.log('the before slot: ', this.querySelector('[slot="before"]'));
    console.log('the before slot: ', beforeSlot);
  }

  

  get _beforeNode(){
    return this.__getDirectSlotChild('before');
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('color')) {
      const addColor = {
        true: () => {
          this._inputNode.className = this._inputNode.className.replace(
            /(color \/ is-)([a-z]*)/,
            `$1${this.color}`,
          );
        },
        false: () => {
          this._inputNode.className = this._inputNode.className.concat(
            ' ',
            `color / is-${this.color}`,
          );
        },
      };
      const hasColor = this._inputNode.className.includes('color');
      addColor[hasColor]();
    }
  }
}
