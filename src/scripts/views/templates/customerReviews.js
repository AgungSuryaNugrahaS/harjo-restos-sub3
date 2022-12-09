/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */

const customerReviews = (custReviews) => {
  let printCustReviews = '';
  const newReview = custReviews.filter((custReview) => {
    const review = custReview.review.split(' ');
    if (review.length > 2) {
      return custReview;
    }
  });
  newReview.forEach((custReview) => {
    printCustReviews += `
      <div class="restaurant-detail__review">
        <div class="restaurant-detail__review__header">
          <p><i class="fa-solid fa-circle-user"></i> ${custReview.name}</p>
          <p>${custReview.date}</p>
        </div>
        <div class="restaurant-detail__review__body">
          <p>${custReview.review}</p>
        </div>
      </div>
    `;
  });
  return printCustReviews;
};

export default customerReviews;
