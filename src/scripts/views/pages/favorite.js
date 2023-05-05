import db from '../../data/favoriteRestaurantsDb';
import { createRestaurantCard } from '../templates/defineTemplates';

export default {
  async render() {
    return `
        <span class="loading"></span>
        <article class="main-section">
          <h2>Restoran Favorit Anda</h2>
          <div class="restaurants">
          </div>
        </article>
      `;
  },

  async afterRender() {
    const restaurantsSection = document.querySelector('.restaurants');
    try {
      const restaurants = await db.getAllRestaurants();

      if (restaurants.length < 1) {
        restaurantsSection.innerHTML = 'Anda belum memiliki restoran favorit.';
        document.querySelector('.loading').remove();
        return;
      }
      restaurants.forEach((restaurant) => {
        restaurantsSection.innerHTML += createRestaurantCard(restaurant);
      });
    } catch (error) {
      restaurantsSection.innerHTML = `Error: ${error}`;
    }
    document.querySelector('.loading').remove();
  },
};
