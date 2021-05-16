import { refs } from './refs';

function onClickEvent(e) {
  e.preventDefault();

  const selectedEl = e.target;

  if (selectedEl.classList.contains('card-container')) {
    onClickCross();
  } else {
    refs.modal.classList.remove('is-hidden');
    scrollHidden();
    refs.modal.classList.remove(
      'animate__animated',
      'animate__lightSpeedOutRight',
    );
    refs.modal.classList.add(
      'animate__animated',
      'animate__lightSpeedInLeft',
      'animate__faster',
    );
  }
}

function onClickCross() {
  refs.modal.classList.add('is-hidden');
  scrollHidden();

  refs.modal.classList.remove('animate__animated', 'animate__lightSpeedInLeft');

  refs.modal.classList.add(
    'animate__animated',
    'animate__lightSpeedOutRight',
    'animate__faster',
  );
}

function scrollHidden() {
  refs.body.classList.toggle('scroll-hidden');
}

export { onClickEvent, onClickCross };
