let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    850: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});