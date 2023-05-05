export default (customerReviews) => {
  const template = customerReviews.map((review) => `
    <div class="restaurant-review-card">
      <div class="restaurant-review-card-header">
        <p><i class="fa-solid fa-circle-user"></i> ${review.name}</p>
        <p>${review.date}</p>
      </div>
      <div class="restaurant-review-card-body">
        <p>${review.review}</p>
      </div>
    </div>
  `).join('');
  return template;
};
