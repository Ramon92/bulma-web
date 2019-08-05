import buttonStyles from './button.scss';
import { html } from 'lit-element';
import { LionButton } from '@lion/button';


export class BwButton extends LionButton {
    connectedCallback() {
        super.connectedCallback();
    }

    __clickDelegationHandler(e){
        super.__clickDelegationHandler(e);
    }

    static get styles() {
        return [ buttonStyles];
    }

    render() {
        return html`
        <div class="btn button">
            <slot></slot>
            <slot name="_button"></slot>
            <div class="click-area" @click="${this.__clickDelegationHandler}"></div>
        </div>
        `;
    }

}