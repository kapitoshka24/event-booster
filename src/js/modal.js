import { refs } from './refs';
import searchEventById from './modal-content-render';
import { eventApiService } from './api-service';

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
  const refsAnimation = {
    btnAnim: document.querySelectorAll('.btn-tickets'),
    moreBtnAnim: document.querySelector('.modal-author-button-container'),
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
