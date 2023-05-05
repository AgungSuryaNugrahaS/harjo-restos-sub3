import { favoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import db from '../src/scripts/data/favoriteRestaurantsDb';

describe('implementasi kontrak test Index DB restoran favorit', () => {
  // Favorite Restaurant Idb Contract Test Implementation
  afterEach(async () => {
    (await db.getAllRestaurants()).forEach(async (restaurant) => {
      await db.deleteRestaurant(restaurant.id);
    });
  });

  favoriteRestaurantModel(db);
});
