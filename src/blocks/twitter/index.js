import Swiper from 'swiper';

const initSlider = () => {
  return new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });
};

export default initSlider;
