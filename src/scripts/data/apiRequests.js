import endpoints from '../globals/endpoints';

class RestaurantSource {
  static async getAllRestaurants() {
    const response = await fetch(endpoints.restaurantsList);
    const responseJson = await response.json();
    return responseJson;
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(endpoints.restaurantDetail(id));
    return response.json();
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

export default RestaurantSource;
