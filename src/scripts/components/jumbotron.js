class JumbotronComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="jumbotron">
        <div class="jumbotronInner">
          <p class="jumbotronTagline">Anda Lapar Kami Senang</p>
        </div>
      </div>
    `;
  }
}

customElements.define('jumbotron-component', JumbotronComponent);
