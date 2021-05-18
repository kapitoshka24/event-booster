import { refs } from './refs';

function onClickEvent(e) {
  e.preventDefault();

  const selectedEl = e.target;

  if (selectedEl.classList.contains('card-container')) {
    onClickCross();
  } else {
    refs.modal.classList.remove('is-hidden');
    scrollHidden();
    modalShow();
  }
}

function onClickCross() {
  refs.modal.classList.add('is-hidden');
  scrollHidden();
  modalClose();
}

function scrollHidden() {
  refs.body.classList.toggle('scroll-hidden');
}

function modalShow() {
  refs.modal.classList.remove('fadeOut');
  refs.modal.classList.add('fadeIn');
}

function modalClose() {
  refs.modal.classList.remove('fadeIn');
  refs.modal.classList.add('fadeOut');
}

export { onClickEvent, onClickCross };
