import endpoints from '../globals/endpoints';

export default class APIRequest {
  static async getAllRestaurants() {
    const response = await fetch(endpoints.restaurantsList);
    const data = await response.json();
    return data;
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(endpoints.restaurantDetail(id));
    const data = await response.json();
    return data;
  }

  static async addNewReview(review) {
    await fetch(endpoints.addReview, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
  }
}
