import { refs } from './refs';
import './modal-content-render';
import api from './apiService';
import eventContentTpl from '../templates/modal-container.hbs';

// function onClickEvent(e) {
//   e.preventDefault();

//   const selectedEl = e.target;
//   console.log(selectedEl);

//   if (selectedEl.classList.contains('card-container')) {
//     onClickCross();
//   } else refs.modal.classList.remove('is-hidden');
// }

// function onClickCross() {
//   refs.modal.classList.add('is-hidden');
// }

// export { onClickEvent, onClickCross };

function onClickEvent(e) {
  e.preventDefault();

  const selectedEl = e.target;

  if (selectedEl.classList.contains('card-container')) {
    onClickCross();
  }

  refs.modal.classList.remove('is-hidden');

  const idEvent = e.target.closest('#card').getAttribute('data-id');
  eventApiService.id = idEvent;
  onModalOpen(idEvent);
}

function onClickCross() {
  refs.modal.classList.add('is-hidden');
  clearModalContainer();
}

const onModalOpen = (id) => {
  searchEventById();
  console.log(id);
}

const eventApiService = new api.EventApiService();

const searchEventById = async () => {
  try {
    const result = await eventApiService.fetchEventById();
    console.log(result);
    appendEventContent(result);
  } catch (error) {
    console.log('Error');
  }
};

const clearModalContainer = () => {
  refs.modalContentContainer.innerHTML = '';
}

const appendEventContent = (result) => {
  refs.modalContentContainer.insertAdjacentHTML('beforeend', eventContentTpl(result));
}

export { onClickEvent, onClickCross };
