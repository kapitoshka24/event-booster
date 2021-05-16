import { refs } from './refs';
import searchEventById from './modal-content-render';
import { eventApiService } from './apiService';

async function onClickEvent(e) {
  e.preventDefault();

  const selectedEl = e.target;

  const result = await eventApiService.fetchEventById();

  if (!result) {
    return;
  }

  if (selectedEl.classList.contains('card-container')) {
    onClickCross();
  } else {
    refs.modal.classList.remove('is-hidden');
    scrollHidden();
    const idEvent = selectedEl.closest('#card').getAttribute('data-id');
    onModalOpen(idEvent);
  }
}

function onClickCross() {
  refs.modal.classList.add('is-hidden');
  refs.body.classList.remove('scroll-hidden');
  removeListeners();
}

function scrollHidden() {
  refs.body.classList.add('scroll-hidden');
  clearModalContainer();
}

const clearModalContainer = () => {
  refs.modalContentContainer.innerHTML = '';
};

const onModalOpen = id => {
  searchEventById(id);
};

const closeModalByEscKey = evt => {
  if (evt.code === 'Escape') {
    refs.modal.classList.add('is-hidden');
    onClickCross();
  }
};

const closeModalOnbackdropClick = evt => {
  if (evt.target === evt.currentTarget) {
    refs.modal.classList.add('is-hidden');
    onClickCross();
  }
};

const removeListeners = () => {
  const refsAnimation = {
    btnAnim: document.querySelectorAll('.btn-tickets'),
    moreBtnAnim: document.querySelector(
      '.modal-author-button-container button',
    ),
  };

  refsAnimation.btnAnim.forEach(elem =>
    elem.addEventListener('mouseover', () => {
      elem.classList.remove('animation');
    }),
  );
  refsAnimation.moreBtnAnim.addEventListener('mouseover', () => {
    refsAnimation.moreBtnAnim.classList.remove('animation');
  });
};

export {
  onClickEvent,
  onClickCross,
  closeModalByEscKey,
  closeModalOnbackdropClick,
};
