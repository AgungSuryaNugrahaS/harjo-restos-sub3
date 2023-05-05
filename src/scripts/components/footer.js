class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <h3>&copy; 2022 By Agung Surya Nugraha S.</h3>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
