const sections = [...document.querySelectorAll('main section[id], main section')];
const navLinks = [...document.querySelectorAll('.nav-links a')];

const updateActiveLink = () => {
  const current = sections.reduce((active, section) => {
    const offset = section.getBoundingClientRect().top - 120;
    return offset <= 0 ? section : active;
  }, sections[0]);

  navLinks.forEach((link) => {
    const target = link.getAttribute('href');
    link.classList.toggle('active', target === `#${current?.id || 'home'}`);
  });
};

window.addEventListener('scroll', updateActiveLink, { passive: true });
window.addEventListener('load', updateActiveLink);

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) window.setTimeout(updateActiveLink, 300);
  });
});
