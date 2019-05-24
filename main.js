// toggle Nav
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');
const navWrapper = document.querySelector('.nav-wrapper');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  nav.classList.toggle('active');
  const margin = navWrapper.nextElementSibling.style.marginTop;
  navWrapper.nextElementSibling.style.marginTop =
    margin === '8rem' ? '4rem' : '8rem';
});
