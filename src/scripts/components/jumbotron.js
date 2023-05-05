class JumbotronComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="jumbotron">
        <div class="jumbotron-inner">
          <p class="jumbotron-tagline">Anda lapar cari kami</p>
        </div>
      </div>
    `;
  }
}

customElements.define('jumbotron-component', JumbotronComponent);
