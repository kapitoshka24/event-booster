import { refs } from './refs';

function onClickEvent(e) {
  e.preventDefault();

  const selectedEl = e.target;

  if (selectedEl.classList.contains('card-container')) {
    onClickCross();
  } else refs.modal.classList.remove('is-hidden');
}

function onClickCross() {
  refs.modal.classList.add('is-hidden');
}

function scrollHidden() {
  if (refs.modal.classList.remove('is-hidden')) {
    return refs.body.classList.add('scroll-hidden');
  }
}

export { onClickEvent, onClickCross, scrollHidden };
