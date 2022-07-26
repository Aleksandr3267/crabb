// burger
let burger = document.querySelector('.header-burger');
let menu = document.querySelector('#main-menu');
let bodyLock = document.querySelector('body');
document.addEventListener('click', burg);
function burg(event) {
  if (event.target.closest('.header-burger')) {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    bodyLock.classList.toggle('lock');
  }
  if (!event.target.closest('.header-burger') & !event.target.closest('.menu')) {
    burger.classList.remove('active');
    menu.classList.remove('active');
    bodyLock.classList.remove('lock');
  }
}
menu.addEventListener('click', function () {
  burger.classList.remove('active');
  menu.classList.remove('active');
  bodyLock.classList.remove('lock');
});
document.addEventListener('keyup', function (event) {
  if (event.code === 'Escape') {
    burger.classList.remove('active');
    menu.classList.remove('active');
    bodyLock.classList.remove('lock');
  }
});
// 


// slider
'use strict';
$(document).ready(function () {
  $('.charity_slider').slick({
    dots: true,
    speed: 2000,
    cssEase: 'linear',
    fade: true,
  });
});

$(document).ready(function () {
  let elsl = document.getElementById('slick-slide-control00');
  let elsl2 = document.getElementById('slick-slide-control01');
  let elsl3 = document.getElementById('slick-slide-control02');
  let as = 0;
  elsl.prepend(as);
  elsl2.prepend(as);
  elsl3.prepend(as);
});





new Swiper('.catalog-blocks_slider', {
  autoHeight: true,
  slidesPerView: 4,
  slidesPerGroup: 4,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    490: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    661: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    840: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1000: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1300: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  }
});
