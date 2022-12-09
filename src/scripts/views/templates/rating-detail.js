/* eslint-disable no-continue */
const ratingDetail = (rating) => {
  let printRating = '';
  for (let i = 0; i < 5; i += 1) {
    if (i < Math.floor(rating)) {
      printRating += '<i class="fa-sharp fa-solid fa-star"></i>';
      continue;
    } else if (i === Math.floor(rating)) {
      if (Math.round(rating) === i + 1) {
        printRating += '<i class="fa-solid fa-star-half-stroke"></i>';
        continue;
      }
    }
    printRating += '<i class="fa-regular fa-star"></i>';
  }
  return printRating;
};

export default ratingDetail;
