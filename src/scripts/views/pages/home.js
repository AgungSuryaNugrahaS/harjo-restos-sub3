import RestaurantRequest from '../../data/apiRequests';
import { createRestaurantItemTemplate } from '../templates/defineTemplates';

export default {
  async render() {
    return `
      <span class="loader"></span>
      <article class="main-inner">
        <h2>Daftar Restoran</h2>
        <div class="restaurants">
        </div>
      </article>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('.restaurants');
    try {
      let restaurants = await RestaurantRequest.getAllRestaurants();
      if (restaurants.error) {
        restaurantsContainer.innerHTML = `Error: ${restaurants.message}`;
        return;
      }
      restaurants = restaurants.restaurants;
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
