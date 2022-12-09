class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="navbar">
        <h1 class="navbarTitle"><a href="#">Harjos Restos</a></h1>
        <button id="menu" class="navbarButton" aria-label="Hamburger Menu"><i class="fa fa-solid fa-bars"></i></button>
        <nav id="navbarDrawer" class="navbarnav">
          <ul class="navbarList">
            <li class="navbarItem"><a href="#">Home</a></li>
            <li class="navbarItem"><a href="#/favorites">Favorite</a></li>
            <li class="navbarItem"><a href="https://www.linkedin.com/in/agung-surya-nugraha-s-a3532b1a6/" target="_blank">About Us</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('navbar-component', Navbar);
