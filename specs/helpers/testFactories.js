import LikeButtonPresenter from '../../src/scripts/utils/favoriteButtonPresenter';
import db from '../../src/scripts/data/favoriteRestaurantsDb';

// eslint-disable-next-line import/prefer-default-export
export const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    favoriteButtonSection: document.querySelector('#favorite-button-container'),
    favoriteRestaurants: db,
    restaurant,
  });
};
