export default class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `

      <link rel="stylesheet" href="../src/components/navbar/Nav.css">


        <nav class="navbar">
            <img class="navbar-logo" src="../img/Logo-goodreads.png" alt="Logo-goodreads">
            <section class="navbar-links">
              <a href="#">Home</a>
              <a href="#">My books</a>
              <a href="#">Browse</a>
            </section>
            <section class="navbar-search">
              <input type="text" placeholder="Search">
            </section>
            <section class="navbar-icons">
              <img src="../img/notification.png" alt="notification">
              <img src="../img/menssage.png" alt="menssage">
              <a href="#" class="navbar-profile">
              <img src="../img/profilepic.png" alt="Profile picture">
            </a>
            </section>
            
        </nav>
      `;
    }
  }
}

customElements.define("nav-bar", NavBar);
