const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu');
const person = document.querySelector('.person');

ham.addEventListener('click', (e) => {
  e.preventDefault();
  ham.classList.toggle('on');
  menu.classList.toggle('on');
  person.classList.toggle('on');
});

var swiper = new Swiper('.reviewSlide', {
  slidesPerView: 1,
  spaceBetween: 30,

  breakpoints: {
    860: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

  pagination: {
    el: '.pg1',
    clickable: true,
  },
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
});
