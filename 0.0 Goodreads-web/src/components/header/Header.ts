export default class Header extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `

        <link rel="stylesheet" href="../src/components/header/Header.css">

        <header class="header-text">
          <p>Commemorate international women's day | Discover New Books by Woman authors</p>
        </header>
          
        `;
      }
    }
}
  
customElements.define("app-header", Header);
  