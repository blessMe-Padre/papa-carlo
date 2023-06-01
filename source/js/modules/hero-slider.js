const initHeroSlider = () => {
  const sliderHero = document.querySelector('.hero__slider');

  if (sliderHero) {
    const heroSliderInit = function () {
      let swiper = new Swiper(sliderHero, {
        loop: true,
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        autoplay: {
          delay: 3500,
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    };

    heroSliderInit();
  }
};

export { initHeroSlider }
