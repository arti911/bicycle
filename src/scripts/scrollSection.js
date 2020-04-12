const menuBtn = Array.from(document.querySelectorAll('.navigation__link'));
const sections = Array.from(document.querySelectorAll('.section'));

const findSection = value => {
  let i = null;

  sections.forEach((section, index) => {
    if (section.getAttribute('id') === value) {
      i = index;
    }
  });

  return i;
};

const scrolling = () => {
  menuBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      const index = findSection(btn.getAttribute('id'));
      sections[index].scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
  });
};

export default scrolling;
