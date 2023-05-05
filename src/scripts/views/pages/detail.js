import db from '../../data/favoriteRestaurantsDb';
import UrlParser from '../../routes/URLParser';
import favoriteButtonPresenter from '../../utils/favoriteButtonPresenter';
import detailRating from '../templates/detailRating';
import apiRequests from '../../data/apiRequests';
import {
  createRestaurantInfo,
  createRestaurantMenus,
  createRestaurantReviews,
  createDetailRestaurantThumbnail,
  createFormAddReview,
} from '../templates/defineTemplates';

export default {
  async render() {
    return `
      <span class="loading"></span>
      <article class="main-section">
        <h2>Detail Restoran</h2>
        <article class="restaurant-detail">
          <div class="restaurant-detail-main">
            <div class="restaurant-detail-thumbnail"></div>
            <div class="restaurant-detail-desc">
              <div class="restaurant-detail-desc-top"></div>
              <div class="restaurant-detail-desc-bottom">
                <div id="favorite-button-container"></div>
                <p id="rating-detail-section"></p>
              </div>
            </div>
          </div>
          <div class="restaurant-menus"></div>
          <div class="restaurant-review-cards"></div>
          <div class="restaurant-detail-form"></div>
        </article>
      </article>
    `;
  },

  async afterRender() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await apiRequests.getRestaurantDetail(id);
    const restaurantFormSection = document.querySelector('.restaurant-detail-form');
    const restaurantTopSection = document.querySelector('.restaurant-detail-desc-top');
    const restaurantMenuSection = document.querySelector('.restaurant-menus');
    const favoriteButtonSection = document.querySelector('#favorite-button-container');
    const ratingDetailSection = document.querySelector('#rating-detail-section');
    const restaurantReviewsSection = document.querySelector('.restaurant-review-cards');
    const restaurantThumbnailSection = document.querySelector('.restaurant-detail-thumbnail');

    restaurantThumbnailSection.innerHTML = createDetailRestaurantThumbnail(restaurant);
    restaurantTopSection.innerHTML = createRestaurantInfo(restaurant);
    ratingDetailSection.innerHTML = detailRating(restaurant.rating);
    restaurantMenuSection.innerHTML = createRestaurantMenus(restaurant);
    restaurantReviewsSection.innerHTML = createRestaurantReviews(restaurant);
    restaurantFormSection.innerHTML = createFormAddReview();

    favoriteButtonPresenter.init({
      favoriteButtonSection,
      favoriteRestaurants: db,
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        address: restaurant.address,
        city: restaurant.city,
        description: restaurant.description,
        rating: restaurant.rating,
        customerReviews: restaurant.customerReviews,
        menus: restaurant.menus,
      },
    });

    const loading = document.querySelector('.loading');
    if (loading !== null) {
      loading.remove();
    }

    const form = document.querySelector('form');
    const review = document.querySelector('#reviewTexts');
    const name = document.querySelector('#reviewerName');

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      apiRequests.addNewReview({
        id, name: name.value, review: review.value,
      });
      this.afterRender();
    });
  },
};
