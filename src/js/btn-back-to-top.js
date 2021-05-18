import { refs } from './refs';

window.addEventListener('scroll', trackScroll);
refs.goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
  let scrolled = window.pageYOffset;
  let coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    refs.goTopBtn.classList.add('back_to_top-show');
    btnBackToTopShow();
  }
  if (scrolled < coords) {
    refs.goTopBtn.classList.remove('back_to_top-show');
    btnBackToTopHidden();
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 15);
  }
}

function btnBackToTopShow() {
  refs.goTopBtn.classList.remove('fadeOut');
  refs.goTopBtn.classList.add('fadeIn');
}

function btnBackToTopHidden() {
  refs.goTopBtn.classList.remove('fadeIn');
  refs.goTopBtn.classList.add('fadeOut');
}
