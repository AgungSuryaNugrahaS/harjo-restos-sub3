class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="header">
        <div class="header__inner">
          <h1 class="header__title"><a href="#">Foodge</a></h1>
          <button id="menu" class="header__menu" aria-label="Hamburger Menu">☰</button>
          <nav id="drawer" class="header__nav">
            <ul class="nav__list">
              <li class="nav__item"><a href="#">Home</a></li>
              <li class="nav__item"><a href="#/fav">Favorite</a></li>
              <li class="nav__item"><a href="https://www.linkedin.com/in/agisahriza/" target="_blank">About Us</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
