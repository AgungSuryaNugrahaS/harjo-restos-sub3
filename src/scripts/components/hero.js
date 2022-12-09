class HeroFoodge extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero__inner">
          <p class="hero__tagline">No need to bother looking for a restaurant to eat good food with foodge</p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-foodge', HeroFoodge);
