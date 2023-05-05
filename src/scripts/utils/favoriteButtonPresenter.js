import { createFavoriteRestaurantButtonTemplate, createUnfavoriteRestaurantButtonTemplate } from '../views/templates/defineTemplates';

export default {
  async init({ favoriteButtonSection, favoriteRestaurants, restaurant }) {
    this._favoriteButtonSection = favoriteButtonSection;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._render();
  },

  async _render() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderRemoveFavorite();
    } else {
      this._renderAddFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderRemoveFavorite() {
    this._favoriteButtonSection.innerHTML = createUnfavoriteRestaurantButtonTemplate();
    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._render();
    });
  },

  _renderAddFavorite() {
    this._favoriteButtonSection.innerHTML = createFavoriteRestaurantButtonTemplate();
    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._render();
    });
  },
};
