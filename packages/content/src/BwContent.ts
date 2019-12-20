import { LitElement, unsafeCSS, html } from "lit-element";
import contentStyles from './content.css';

export class BwContent extends LitElement {

    createRenderRoot(){
        return this;
    }

    async connectedCallback(){
        super.connectedCallback();
        const lightDom = this.cloneNode(true);
        await this.updateComplete;
        // this.classList.add('content');

        [...lightDom.children].forEach(elem => this.appendChild(elem))
    }

    render(){
        return html`
            <style>
                ${unsafeCSS(contentStyles)}
            </style>
        `
    }
}