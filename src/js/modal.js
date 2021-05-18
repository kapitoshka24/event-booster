import { refs } from './refs';
import searchEventById from './modal-content-render';
import { eventApiService} from './api-service';
import { addSpinner } from './spinner';
import { addClassSpinner } from './spinner';

async function onClickEvent(e) {
  e.preventDefault();

  const selectedEl = e.target;

  const result = await eventApiService.fetchEventById();

  if (!result) {
    return;
  }

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
    addClassSpinner({ search: '.modal .spinner-container', addClass: 'modal-spinner' });
    addClassSpinner({ search: '.modal .dot-pulse', addClass: 'modal-spinner' });
    const idEvent = selectedEl.closest('#card').getAttribute('data-id');
    modalShow();
    onModalOpen(idEvent);
  }
}

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
  };

  refsA.btnAnim.addEventListener('mouseover', () => {
    refsA.btnAnim.classList.remove('animation');
  });
};

export {
  onClickEvent,
  onClickCross,
  closeModalByEscKey,
  closeModalOnbackdropClick,
};
