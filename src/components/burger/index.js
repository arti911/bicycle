export default function toggleMenu() {
  const burger = document.querySelector('.burger');
  const close = document.querySelector('.navigation__close');
  const nav = document.querySelector('.navigation');

  burger.addEventListener('click', () => {
    nav.classList.add('navigation--open');
  });

  close.addEventListener('click', () => {
    nav.classList.remove('navigation--open');
  });
}
