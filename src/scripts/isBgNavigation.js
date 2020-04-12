export default () => {
  const nav = document.querySelector('.navigation');

  if (window.pageYOffset >= 800) {
    nav.classList.add('navigation--background');
  } else {
    nav.classList.remove('navigation--background');
  }
};
