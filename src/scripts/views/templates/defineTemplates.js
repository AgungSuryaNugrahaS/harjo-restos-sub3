import listMenuTemplate from './listMenu';
import customerReviews from './customerReviews';
import config from '../../globals/config';

export const skeletonUI = () => `
<article class="restaurant-card skeleton-card">
    <div class="restaurant-card-thumbnail">
      <div class="image skeleton"></div>
    </div>

    <div class="restaurant-card-content">
      <h3 class="restaurant-card-content-title skeleton"></h3>
      <h4 class="restaurant-card-content-city skeleton"></h4>
      <p class="restaurant-card-rating skeleton"></p>
      <p class="restaurant-card-content-description skeleton"></p>
      <p class="restaurant-card-content-description skeleton"></p>
      <p class="restaurant-card-content-description skeleton"></p>
      <p class="restaurant-card-content-description skeleton"></p>
      <div class="customBtn skeleton"></div>
    </div>
  </article>
`;

export const createRestaurantCard = (restaurant) => `
  <article class="restaurant-card">
    <div class="restaurant-card-thumbnail">
      <img data-src="${config.IMAGE_BASE_URL + restaurant.pictureId}"alt="${restaurant.name}" class="lazyload">
    </div>

    <div class="restaurant-card-content">
      <h3 class="restaurant-card-content-title">${restaurant.name}</h3>
      <h4 class="restaurant-card-content-city"><i class="fa-sharp fa-solid fa-location-dot"></i> ${restaurant.city}</h4>
      <p class="restaurant-card-rating">Rating : <i class="fa-sharp fa-solid fa-star"></i> ${restaurant.rating} </p>
      <p class="restaurant-card-content-description">${restaurant.description}</p>
      <a href="/#/detail/${restaurant.id}" class="custom-button"><i class="fa fa-solid fa-info-circle"></i> Detail</a>
    </div>
  </article>
`;

export const createRestaurantInfo = (restaurant) => ` 
  <h3 class="restaurant-detail-desc-title">${restaurant.name}</h3>
  <h4 class="restaurant-detail-desc-city">${restaurant.address}, ${restaurant.city}</h4>
  <p class="restaurant-detail-desc-description">${restaurant.description}</p>
`;

export const createDetailRestaurantThumbnail = (restaurant) => `
  <img src="${config.IMAGE_BASE_URL + restaurant.pictureId} "alt="${restaurant.name}">
`;

export const createRestaurantMenus = (restaurant) => `
  <h2 class="text-center">Menu</h2>
  <div class="restaurant-menus-inner">
    <div class="restaurant-menus-foods">
      <h3>Makanan</h3>
      <ul>
        ${listMenuTemplate(restaurant.menus.foods)}
      </ul>
    </div>
    <div class="restaurant-menus-drinks">
      <h3>Minuman</h3>
      <ul>
        ${listMenuTemplate(restaurant.menus.drinks)}
      </ul>
    </div>
  </div>
`;

export const createRestaurantReviews = (restaurant) => `
  <h2 class="text-center">Review para customer</h2>
  <div class="restaurant-review-cards-inner">    
    ${customerReviews(restaurant.customerReviews)}
  </div>
`;

export const createFavoriteRestaurantButtonTemplate = () => `
  <button aria-label="tambahkan restoran ke favorit" id="favoriteButton" class="custom-button">
    Tambahkan ke favorit <i class="fa-regular fa-heart"></i>
  </button>
`;

export const createUnfavoriteRestaurantButtonTemplate = () => `
  <button aria-label="hapus restoran dari favorit" id="favoriteButton" class="custom-button">
    Hapus dari favorit <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export const createFormAddReview = () => `
  <h2 class="text-center">Kirimkan Review Anda</h2>
  <form method="post">    
    <label for="reviewerName">Nama : </label>
    <input type="text" id="reviewerName" name="name" placeholder="Masukan nama anda" required>
    <label for="reviewTexts">Review Anda : </label>
    <textarea id="reviewTexts" name="review" placeholder="Masukan review anda" required rows="10"></textarea>
    <button class="custom-button">Kirim Review</button
  </form>
`;
