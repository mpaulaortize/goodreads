export default class Card extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    connectedCallback() {
      if (this.shadowRoot) {
        this.shadowRoot.innerHTML = `

        <link rel="stylesheet" href="../src/components/card/Card.css">

        <section class="card">
            <section class="profile">
                <img src="../img/profilepic.png" alt="Profile picture">
                <a href="#">Maria Paula Ortiz</a>
            </section>

            <section class="container">
                <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    <span class="read-more-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </p>
                <a href="#" class="read-more-btn">Show More...</a>
            </section>

        </section>
          
        `;
      }
    }
}

customElements.define("app-card", Card);