import "./components/index"
class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }

    //Aquí es donde llamo las cosas.
    connectedCallback(){
        if (this.shadowRoot)
        this.shadowRoot.innerHTML= `

        <app-header></app-header>
        <nav-bar></nav-bar>
        <app-card></app-card>
       
        `
    }
}

customElements.define('app-container',AppContainer)