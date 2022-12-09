import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <span class="loader"></span>
      <article class="main-inner">
        <h2>List Restaurant</h2>
        <div class="restaurants">
        </div>
      </article>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('.restaurants');
    try {
      let restaurants = await RestaurantSource.listRestaurant();
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

export default Home;
