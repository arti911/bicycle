/* eslint-disable no-new */
import HoverEffect from 'hover-effect'
import initSlider from './blocks/twitter/index';
import scrollingSection from './scripts/scrollSection';
import parallax from './scripts/parallax';
import toggleMenu from './components/burger';

import 'normalize.css';

import './main.scss';

initSlider();
scrollingSection();
parallax();
toggleMenu();

Array.from(document.querySelectorAll('.work__bike-index')).forEach(item => {
  const images = item.querySelectorAll('.work__hidden');

  new HoverEffect({
    parent: item,
    image1: `${images[0].src}`,
    image2: `${images[1].src}`,
    speedIn: 1,
    speedOut: 0.8,
    intensity: 0.5,
    angle: 15,
    displacementImage: item.dataset.displacement,
    imagesRatio: item.dataset.height / item.dataset.width,
  });
});
