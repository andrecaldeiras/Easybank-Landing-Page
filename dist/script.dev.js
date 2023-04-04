"use strict";

var menuBtn = document.querySelector('.menu-btn');
var navMenu = document.querySelector('.pages');
var menuOpen = false;
menuBtn.addEventListener('click', function () {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    navMenu.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navMenu.classList.remove('open');
    menuOpen = false;
  }
});