import { refs } from './refs';
import searchEventById from './modal-content-render';

function onClickEvent(e) {
  e.preventDefault();

  const selectedEl = e.target;

  if (selectedEl.classList.contains('card-container')) {
    onClickCross();
  }

  refs.modal.classList.remove('is-hidden');

  // шукаю наближчого вгору предка з id="#card" і забираю id івенту, збереженого в дата-атрибуті
  const idEvent = e.target.closest('#card').getAttribute('data-id');
  onModalOpen(idEvent);
}

function onClickCross() {
  refs.modal.classList.add('is-hidden');
  clearModalContainer();
}

const clearModalContainer = () => {
  refs.modalContentContainer.innerHTML = '';
}

const onModalOpen = (id) => {
  searchEventById(id);
}

export { onClickEvent, onClickCross };
