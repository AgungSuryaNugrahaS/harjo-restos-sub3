import config from '../../globals/config';
import customerReviews from './customerReviews';
import listMenuTemplate from './listMenu';

export const createRestaurantItemTemplate = (restaurant) => `
  <article class="restaurant-item">
    <div class="restaurant-item-thumbnail">
      <img data-src="${config.IMAGE_BASE_URL + restaurant.pictureId}"alt="${restaurant.name}" class="lazyload">
    </div>

    <div class="restaurant-item-content">
      <h3 class="restaurant-item-content-title">${restaurant.name}</h3>
      <h4 class="restaurant-item-content-city"><i class="fa-sharp fa-solid fa-location-dot"></i> ${restaurant.city}</h4>
      <p class="restaurant-item-rating">Rating : <i class="fa-sharp fa-solid fa-star"></i> ${restaurant.rating} </p>
      <p class="restaurant-item-content-description">${restaurant.description}</p>
      <a href="/#/detail/${restaurant.id}" class="btn"><i class="fa fa-solid fa-info-circle"></i> Detail</a>
    </div>
  </article>
`;

export const createRestaurantDetailThumbnail = (restaurant) => `
  <img src="${config.IMAGE_BASE_URL + restaurant.pictureId} "alt="${restaurant.name}">
`;

export const createRestaurantDetailInfoTop = (restaurant) => ` 
  <h3 class="restaurant-detail-info-title">${restaurant.name}</h3>
  <h4 class="restaurant-detail-info-city">${restaurant.address}, ${restaurant.city}</h4>
  <p class="restaurant-detail-info-description">${restaurant.description}</p>
`;

export const createRestaurantMenus = (restaurant) => `
  <h2 class="text-center">Menu</h2>
  <div class="restaurant-detail-menus-inner">
    <div class="restaurant-detail-menus-foods">
      <h3>Makanan</h3>
      <ul>
        ${listMenuTemplate(restaurant.menus.foods)}
      </ul>
    </div>
    <div class="restaurant-detail-menus-drinks">
      <h3>Minuman</h3>
      <ul>
        ${listMenuTemplate(restaurant.menus.drinks)}
      </ul>
    </div>
  </div>
`;

export const createRestaurantDetailReviews = (restaurant) => `
  <h2 class="text-center">Review para customer</h2>
  <div class="restaurant-detail-reviews-inner">    
    ${customerReviews(restaurant.customerReviews)}
  </div>
`;

export const createFavoriteRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="btn">
    Tambahkan ke favorit <i class="fa-regular fa-heart"></i>
  </button>
`;

export const createUnfavoriteRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="btn">
    Hapus dari favorit <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export const createFormReviewTemplate = () => `
  <h2 class="text-center">Kirimkan Review Anda</h2>
  <form method="post">    
    <label for="nameInput">Nama</label>
    <input type="text" id="nameInput" name="name" required>
    <label for="reviewInput">Review</label>
    <textarea id="reviewInput" name="review" required rows="10"></textarea>
    <button class="btn">Kirim Review</button
  </div>
`;
