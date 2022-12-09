import CONFIG from './config';

const { API_BASE_URL } = CONFIG;

export default {
  restaurantsList: `${API_BASE_URL}/list`,
  restaurantDetail: (id) => `${API_BASE_URL}/detail/${id}`,
  addReview: `${API_BASE_URL}/review`,
};
