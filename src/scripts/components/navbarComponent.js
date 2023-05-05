class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="navbar">
        <h1 class="navbar-title"><a href="#">Harjos Restos</a></h1>
        <button id="menu" class="navbar-button" aria-label="Hamburger Menu"><i class="fa fa-solid fa-bars"></i></button>
        <nav id="navbar-drawer" class="navbarnav">
          <ul class="navbar-list">
            <li class="navbar-item"><a href="#">Home</a></li>
            <li class="navbar-item"><a href="#/favorites">Favorite</a></li>
            <li class="navbar-item"><a href="https://www.linkedin.com/in/agung-surya-nugraha-s-a3532b1a6/" target="_blank">About Us</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('navbar-component', Navbar);
