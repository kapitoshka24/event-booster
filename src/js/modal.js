import { refs } from './refs';
import searchEventById from './modal-content-render';
import { addSpinner } from './spinner';
import { addClassSpinner } from './spinner';

async function onClickEvent(e) {
  e.preventDefault();

  const selectedEl = e.target;

  if (
    selectedEl.classList.contains('card-container') &
    !refs.modal.classList.contains('is-hidden')
  ) {
    onClickCross();
  }
  if (
    selectedEl.offsetParent.classList.contains('card') ||
    selectedEl.classList.contains('card')
  ) {
    refs.modal.classList.remove('is-hidden');
    scrollHidden();
    addSpinner('modalContentContainer', 'beforeend');
    addClassSpinner({ search: '.modal .spinner', addClass: 'modal-spinner' });
    addClassSpinner({
      search: '.modal .spinner-container',
      addClass: 'modal-spinner',
    });
    addClassSpinner({ search: '.modal .dot-pulse', addClass: 'modal-spinner' });
    const idEvent = selectedEl.closest('#card').getAttribute('data-id');
    modalShow();
    onModalOpen(idEvent);
    window.addEventListener('keydown', closeModalByEscKey);
  }
}
refs.cardContainer.addEventListener('keydown', e => {
  if (e.code === 'Enter') {
    onClickEvent(e);
  }
});

function onClickCross() {
  refs.modal.classList.add('is-hidden');
  refs.body.classList.remove('scroll-hidden');
  modalClose();
  removeListeners();
}

function scrollHidden() {
  refs.body.classList.add('scroll-hidden');
  clearModalContainer();
}

function modalShow() {
  refs.modal.classList.remove('fadeOut');
  refs.modal.classList.add('fadeIn');
}

function modalClose() {
  refs.modal.classList.remove('fadeIn');
  refs.modal.classList.add('fadeOut');
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
  const refsA = {
    btnAnim: document.querySelector('.btn-tickets'),
    btnCont: document.querySelector('.modal-buy-button-container'),
  };

  refsA.btnAnim.classList.remove('animation');
  refsA.btnCont.classList.remove('anim');
};

export {
  onClickEvent,
  onClickCross,
  closeModalByEscKey,
  closeModalOnbackdropClick,
};
