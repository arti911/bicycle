import isBgNav from './isBgNavigation';

export default () => {
  const parallax = document.getElementById('parallax');
  let tScale = 1;
  let currentScroll = 0;

  document.addEventListener('scroll', () => {
    if (currentScroll < window.pageYOffset) {
      parallax.style.transform = `scale(${(tScale += 0.002)})`;
    } else {
      tScale = tScale.toFixed(3) - 0.002;

      if (tScale < 1 || window.pageYOffset === 0) {
        tScale = 1;
        parallax.style.transform = `scale(${tScale})`;
      } else {
        parallax.style.transform = `scale(${(tScale = tScale)})`;
      }
    }

    isBgNav();
    currentScroll = window.pageYOffset;
  });
};
