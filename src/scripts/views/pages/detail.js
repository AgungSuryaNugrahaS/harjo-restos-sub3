import RestaurantRequest from '../../data/apiRequests';
import UrlParser from '../../routes/URLParser';
import LikeButtonPresenter from '../../utils/favoriteButtonPresenter';
import ratingDetail from '../templates/detailRating';
import {
  createRestaurantDetailInfoTop,
  createRestaurantMenus,
  createRestaurantDetailReviews,
  createRestaurantDetailThumbnail,
  createFormReviewTemplate,
} from '../templates/defineTemplates';
import FavoriteRestaurantIdb from '../../data/favoriteRestaurantsDb';

export default {
  async render() {
    return `
      <span class="loader"></span>
      <article class="main-inner">
        <h2>Detail Restoran</h2>
        <article class="restaurant-detail">
          <div class="restaurant-detail-main">
            <div class="restaurant-detail-thumbnail"></div>
            <div class="restaurant-detail-info">
              <div class="restaurant-detail-info-top"></div>
              <div class="restaurant-detail-info-bottom">
                <div id="like-button-container"></div>
                <p id="rating-detail-section"></p>
              </div>
            </div>
          </div>
          <div class="restaurant-detail-menus"></div>
          <div class="restaurant-detail-reviews"></div>
          <div class="restaurant-detail-form"></div>
        </article>
      </article>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantRequest.getRestaurantDetail(url.id);
    const restaurantFormContainer = document.querySelector('.restaurant-detail-form');
    const restaurantInfoTopContainer = document.querySelector('.restaurant-detail-info-top');
    const restaurantThumbnailContainer = document.querySelector('.restaurant-detail-thumbnail');
    const ratingDetailSection = document.querySelector('#rating-detail-section');
    const restaurantMenusContainer = document.querySelector('.restaurant-detail-menus');
    const restaurantReviewsContainer = document.querySelector('.restaurant-detail-reviews');
    const likeButtonContainer = document.querySelector('#like-button-container');

    restaurantThumbnailContainer.innerHTML = createRestaurantDetailThumbnail(restaurant);
    restaurantInfoTopContainer.innerHTML = createRestaurantDetailInfoTop(restaurant);
    ratingDetailSection.innerHTML = ratingDetail(restaurant.rating);
    restaurantMenusContainer.innerHTML = createRestaurantMenus(restaurant);
    restaurantReviewsContainer.innerHTML = createRestaurantDetailReviews(restaurant);
    restaurantFormContainer.innerHTML = createFormReviewTemplate();

    LikeButtonPresenter.init({
      likeButtonContainer,
      favoriteRestaurants: FavoriteRestaurantIdb,
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

    const loader = document.querySelector('.loader');
    if (loader !== null) {
      loader.remove();
    }

    const formReview = document.querySelector('form');
    const nameInput = document.querySelector('#nameInput');
    const reviewInput = document.querySelector('#reviewInput');

    formReview.addEventListener('submit', (e) => {
      e.preventDefault();
      RestaurantRequest.addNewReview({
        id: url.id, name: nameInput.value, review: reviewInput.value,
      });
      this.afterRender();
    });
  },
};
