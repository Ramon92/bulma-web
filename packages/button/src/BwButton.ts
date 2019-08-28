import buttonStyles from './button.scss';
import {html, CSSResult, property} from 'lit-element';
import {LionButton} from '@lion/button';


export class BwButton extends LionButton {
    @property({type: Boolean}) primary;

    @property({
        type: Object,
        attribute: false
    }) buttonClasses = {
        'is-primary': this.primary
    };

    static get styles() {
        return [(buttonStyles as unknown as CSSResult)];
    }

    render() {
        return html`
        <button class="button"><span><slot></slot></span></button>
        `;
    }

}
