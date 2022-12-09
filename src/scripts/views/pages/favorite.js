import FavoriteRestaurantIdb from '../../data/favoriteRestaurantsDb';
import { createRestaurantItemTemplate } from '../templates/defineTemplates';

export default {
  async render() {
    return `
        <span class="loader"></span>
        <article class="main-inner">
          <h2>Restoran Favorit Anda</h2>
          <div class="restaurants">
          </div>
        </article>
      `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('.restaurants');
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

      if (restaurants.length < 1) {
        restaurantsContainer.innerHTML = "Anda tidak memiliki restoran favorit.";
        const loader = document.querySelector('.loader');
        loader.remove();
        return;
      }
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (err) {
      restaurantsContainer.innerHTML = `Error: ${err}`;
    }
    const loader = document.querySelector('.loader');
    loader.remove();
  },
};
