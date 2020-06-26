/* eslint-disable wc/no-self-class */
import { LionInput } from '@lion/input';
import { css } from 'lit-element';
import { style } from './input-css';

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
      loading: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  // update styles
  static get styles() {
    return [...super.styles, style];
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
        const native = super.slots.input();
        native.classList.add('input');
        native.addEventListener('focus', () => {
          if (this._beforeNode) this._beforeNode.classList.add('focused');
          if (this._afterNode) this._afterNode.classList.add('focused');
        });
        native.addEventListener('blur', () => {
          if (this._beforeNode) this._beforeNode.classList.remove('focused');
          if (this._afterNode) this._afterNode.classList.remove('focused');
        });
        return native;
      },
    };
  }

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    this.classList.add('control'); // add styles when extending bulma
    if (this._beforeNode) {
      this._addBeforeSlot();
    }
    if (this._afterNode) {
      this._addAfterSlot();
    }
  }

  get _beforeNode() {
    return this.__getDirectSlotChild('before');
  }

  get _afterNode() {
    return this.__getDirectSlotChild('after');
  }

  _addBeforeSlot() {
    this._beforeNode.classList.add('is-left', 'icon');
    this.classList.add('has-icons-left');
    this.appendChild(this._beforeNode);
  }

  _addAfterSlot() {
    this._afterNode.classList.add('is-right', 'icon');
    this.classList.add('has-icons-right');
    this.appendChild(this._afterNode);
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
    if (changedProperties.has('loading')) {
      if (this.loading) this.classList.add('is-loading');
      if (!this.loading) this.classList.remove('is-loading');
    }
  }
}
