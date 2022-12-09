import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <span class="loader"></span>
        <article class="main-inner">
          <h2>Favorite Restaurant</h2>
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
        restaurantsContainer.innerHTML = "You don't have any favorite restaurant.";
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

export default Favorite;
