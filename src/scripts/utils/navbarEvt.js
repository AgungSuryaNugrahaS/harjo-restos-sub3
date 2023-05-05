export default ({ navbar, jumbotron }) => {
  if (window.pageYOffset > jumbotron.offsetHeight - navbar.offsetHeight) {
    navbar.classList.add('opacity');
  } else {
    navbar.classList.remove('opacity');
  }
};
