import favoriteButtonPresenter from '../../src/scripts/utils/favoriteButtonPresenter';
import db from '../../src/scripts/data/favoriteRestaurantsDb';

// eslint-disable-next-line import/prefer-default-export
export const favoriteButtonPresenterInRestaurant = async (restaurant) => {
  await favoriteButtonPresenter.init({
    favoriteButtonSection: document.querySelector('#favorite-button-container'),
    favoriteRestaurants: db,
    restaurant,
  });
};
