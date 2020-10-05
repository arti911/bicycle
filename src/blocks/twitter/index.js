import Swiper, { Pagination } from 'swiper';

const initSlider = () => {
  Swiper.use([Pagination]);

  return new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  })
};

export default initSlider;
