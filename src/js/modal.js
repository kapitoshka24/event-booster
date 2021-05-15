import { refs } from './refs';
import searchEventById from './modal-content-render';

function onClickEvent(e) {
  e.preventDefault();

  const selectedEl = e.target;

  if (selectedEl.classList.contains('card-container')) {
    onClickCross();
  } else {
    refs.modal.classList.remove('is-hidden');
    scrollHidden();

    // шукаю наближчого вгору предка з id="#card" і забираю id івенту, збереженого в дата-атрибуті

    const idEvent = selectedEl.closest('#card').getAttribute('data-id');
    onModalOpen(idEvent);
  }
}

function onClickCross() {
  refs.modal.classList.add('is-hidden');
  refs.body.classList.remove('scroll-hidden');
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
    scrollHidden();
  }
};
const closeModalOnbackdropClick = evt => {
  if (evt.target === evt.currentTarget) {
    refs.modal.classList.add('is-hidden');
    scrollHidden();
  }
};

export {
  onClickEvent,
  onClickCross,
  closeModalByEscKey,
  closeModalOnbackdropClick,
};
