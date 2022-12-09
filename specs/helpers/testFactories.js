import LikeButtonPresenter from '../../src/scripts/utils/favoriteButtonPresenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriteRestaurantsDb';

export const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#like-button-container'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};
