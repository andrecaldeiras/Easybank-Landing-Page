const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.pages');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navMenu.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navMenu.classList.remove('open');
    menuOpen = false;
  }
});