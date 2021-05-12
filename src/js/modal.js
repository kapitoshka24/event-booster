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

export { onClickEvent, onClickCross };
