import apiRequests from '../../data/apiRequests';
import { createRestaurantCard } from '../templates/defineTemplates';

export default {
  async render() {
    return `
      <span class="loading"></span>
      <article class="main-section">
        <h2>Daftar Restoran</h2>
        <div class="restaurants">
        </div>
      </article>
    `;
  },

  async afterRender() {
    const restaurantsSection = document.querySelector('.restaurants');
    try {
      const { restaurants, error, message } = await apiRequests.getAllRestaurants();
      if (error) {
        restaurantsSection.innerHTML = `Error: ${message}`;
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
