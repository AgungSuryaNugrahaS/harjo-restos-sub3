class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="navbar">
        <div class="navbarInner">
          <h1 class="navbarTitle"><a href="#">Harjos</a></h1>
          <button id="menu" class="navbarButton" aria-label="Hamburger Menu">☰</button>
          <nav id="drawer" class="navbarnav">
            <ul class="navbarList">
              <li class="navbarItem"><a href="#">Home</a></li>
              <li class="navbarItem"><a href="#/fav">Favorite</a></li>
              <li class="navbarItem"><a href="https://www.linkedin.com/in/agung-surya-nugraha-s-a3532b1a6/" target="_blank">About Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('navbar-component', Navbar);
