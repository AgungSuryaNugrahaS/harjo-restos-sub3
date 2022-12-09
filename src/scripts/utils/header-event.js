const headerEvent = ({ header, hero }) => {
  if (window.pageYOffset > hero.offsetHeight - header.offsetHeight) {
    header.classList.add('opacity');
  } else {
    header.classList.remove('opacity');
  }
};

export default headerEvent;
