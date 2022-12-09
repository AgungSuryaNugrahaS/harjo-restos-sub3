import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import ratingDetail from '../templates/rating-detail';
import {
  createRestaurantDetailInfoTop,
  createRestaurantDetailMenus,
  createRestaurantDetailReviews,
  createRestaurantDetailThumbnail,
  createFormReviewTemplate,
} from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <span class="loader"></span>
      <article class="main-inner">
        <h2>Detail Restaurant</h2>
        <article class="restaurant-detail">
          <div class="restaurant-detail__main">
            <div class="restaurant-detail__thumbnail"></div>
            <div class="restaurant-detail__info">
              <div class="restaurant-detail__info__top"></div>
              <div class="restaurant-detail__info__bottom">
                <div id="likeButtonContainer"></div>
                <p id="ratingDetailContainer"></p>
              </div>
            </div>
          </div>
          <div class="restaurant-detail__menus"></div>
          <div class="restaurant-detail__reviews"></div>
          <div class="restaurant-detail__form"></div>
        </article>
      </article>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    let restaurant = await RestaurantSource.detailRestaurant(url.id);
    restaurant = restaurant.restaurant;
    const restaurantThumbnailContainer = document.querySelector('.restaurant-detail__thumbnail');
    const restaurantInfoTopContainer = document.querySelector('.restaurant-detail__info__top');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    const ratingDetailContainer = document.querySelector('#ratingDetailContainer');
    const restaurantMenusContainer = document.querySelector('.restaurant-detail__menus');
    const restaurantReviewsContainer = document.querySelector('.restaurant-detail__reviews');
    const restaurantFormContainer = document.querySelector('.restaurant-detail__form');

    restaurantThumbnailContainer.innerHTML = createRestaurantDetailThumbnail(restaurant);
    restaurantInfoTopContainer.innerHTML = createRestaurantDetailInfoTop(restaurant);
    ratingDetailContainer.innerHTML = ratingDetail(restaurant.rating);
    restaurantMenusContainer.innerHTML = createRestaurantDetailMenus(restaurant);
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
      RestaurantSource.postReview({ id: url.id, name: nameInput.value, review: reviewInput.value });
      this.afterRender();
    });
  },
};

export default Detail;
