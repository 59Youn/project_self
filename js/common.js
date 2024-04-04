// 햄버거 버튼
const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu');
const person = document.querySelector('.person');

ham.addEventListener('click', (e) => {
  e.preventDefault();
  ham.classList.toggle('on');
  menu.classList.toggle('on');
  person.classList.toggle('on');
});

// section.courses 영역
const popular = document.querySelector('.popular');
const recommended = document.querySelector('.recommended');
const price = document.querySelector('.price');
const pop = document.querySelector('.pop');
const rec = document.querySelector('.rec');
const pri = document.querySelector('.pri');
const list = document.querySelectorAll('.list');

popular.addEventListener('click', () => {
  list.forEach((el) => {
    el.classList.remove('on');
  });
  pop.classList.add('on');
});
recommended.addEventListener('click', () => {
  list.forEach((el) => {
    el.classList.remove('on');
  });
  rec.classList.add('on');
});
price.addEventListener('click', () => {
  list.forEach((el) => {
    el.classList.remove('on');
  });
  pri.classList.add('on');
});

// section.review 영역
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
