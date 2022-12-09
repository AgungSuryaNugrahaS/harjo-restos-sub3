/* eslint-disable no-continue */
export default (rate) => {
  const ratingIcons = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rate)) {
      ratingIcons.push('<i class="fa-sharp fa-solid fa-star"></i>');
      continue;
    } else if (i === Math.floor(rate)) {
      if (Math.round(rate) === i + 1) {
        ratingIcons.push('<i class="fa-solid fa-star-half-stroke"></i>');
        continue;
      }
    }
    ratingIcons.push('<i class="fa-regular fa-star"></i>');
  }
  return ratingIcons.join('');
};
