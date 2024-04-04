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
const btns = document.querySelector('.btns');
btns.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON') return;
  const list = document.querySelectorAll('.courses .list');
  const idx = e.target.dataset.idx;

  list.forEach((el) => {
    el.classList.remove('on');
  });
  list[idx].classList.add('on');
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
