import { refs } from './refs';

function onClickEvent(e) {
  e.preventDefault();

  const selectedEl = e.target;

  if (selectedEl.classList.contains('card-container')) {
    onClickCross();
  } else {
    refs.modal.classList.remove('is-hidden');
    scrollHidden();
  }
}

function onClickCross() {
  refs.modal.classList.add('is-hidden');
  scrollHidden();
}

function scrollHidden() {
  refs.body.classList.toggle('scroll-hidden');
}

export { onClickEvent, onClickCross };
