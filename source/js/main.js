import { initHeroSlider } from './modules/hero-slider';
import { initNav } from './modules/nav';
import { initScroll } from './modules/scroll';
import { initScrollToTop } from './modules/scroll-to-top';
import WOW from './modules/wow';


window.addEventListener('DOMContentLoaded', () => {
  // Modules
  initNav();
  initHeroSlider();
  initScroll();
  initScrollToTop();
  new WOW().init();
});
