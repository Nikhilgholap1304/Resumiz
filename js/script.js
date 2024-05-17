let tog = document.getElementById('icon');
let body = document.body;
tog.addEventListener('click', () => {
  tog.classList.toggle('fa-solid');
  tog.classList.toggle('fa-moon');
  body.classList.toggle('dark_theme');
});

let hamburger = document.querySelector('.hamburger');
let navbar = document.getElementsByClassName('navbar')[0];
let header = document.getElementsByTagName('header')[0];
let isNavbarOpen = false;

hamburger.addEventListener('click', () => {

  hamburger.classList.toggle('active');

  if (isNavbarOpen) {
    navbar.style.left = '100%';
    isNavbarOpen = false;
    header.style.boxShadow = '0 0.5rem 1.5rem rgba(0,0,0,0.1)';
  }

  else {
    navbar.style.left = '0%';
    isNavbarOpen = true;
    header.style.boxShadow = 'none';
  }
})
let theEnd = 0;
window.addEventListener('scroll', () => {
  let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
  if (isNavbarOpen == false) {
    if (scrollTop > theEnd) {
      header.style.top = `-${80}px`;
    }
    else {
      header.style.top = `${0}px`;
    }
  }
  theEnd = scrollTop;
})
