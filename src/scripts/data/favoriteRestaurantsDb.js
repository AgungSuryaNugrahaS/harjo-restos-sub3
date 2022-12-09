import { openDB } from 'idb';
import config from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = config;

const dbAsync = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

export default {
  async getRestaurant(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return (await dbAsync).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestaurants() {
    return (await dbAsync).getAll(OBJECT_STORE_NAME);
  },
  async deleteRestaurant(id) {
    return (await dbAsync).delete(OBJECT_STORE_NAME, id);
  },
  async putRestaurant(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return (await dbAsync).put(OBJECT_STORE_NAME, restaurant);
  },
};
