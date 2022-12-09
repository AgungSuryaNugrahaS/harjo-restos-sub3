export default ({ header, jumbotron }) => {
  if (window.pageYOffset > jumbotron.offsetHeight - header.offsetHeight) {
    header.classList.add('opacity');
  } else {
    header.classList.remove('opacity');
  }
};
