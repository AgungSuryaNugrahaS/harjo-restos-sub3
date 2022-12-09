import config from './config';

const { API_BASE_URL } = config;

export default {
  restaurantsList: `${API_BASE_URL}/list`,
  addReview: `${API_BASE_URL}/review`,
  restaurantDetail: (id) => `${API_BASE_URL}/detail/${id}`,
};
