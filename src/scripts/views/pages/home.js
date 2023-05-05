import apiRequests from '../../data/apiRequests';
import { createRestaurantCard, skeletonUI } from '../templates/defineTemplates';

export default {
  async render() {
    return `
      <article class="main-section">
        <h2>Daftar Restoran</h2>
        <div class="restaurants">
        </div>
      </article>
    `;
  },

  async afterRender() {
    const restaurantsSection = document.querySelector('.restaurants');
    restaurantsSection.innerHTML = '';

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 3; i++) {
      restaurantsSection.innerHTML += skeletonUI();
    }
    return;
    try {
      const { restaurants, error, message } = await apiRequests.getAllRestaurants();
      if (error) {
        restaurantsSection.innerHTML = `Error: ${message}`;
        return;
      }
      restaurantsSection.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsSection.innerHTML += createRestaurantCard(restaurant);
      });
    } catch (error) {
      restaurantsSection.innerHTML = `Error: ${error}`;
    }
  },
};
