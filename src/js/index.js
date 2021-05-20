import '../sass/main.scss';
import './api-service';
import './spinner';
import { addSearchQuery } from './search-query';
import { refs } from './refs';
import './spinner';
import './dropdown-menu';
import searchFormInputMkp from '../templates/search-input.hbs';
import {
  onClickEvent,
  onClickCross,
  closeModalByEscKey,
  closeModalOnbackdropClick,
} from './modal';
import debounce from 'lodash.debounce';
import './modal-content-render';
import './pagination';
import './buy-ticket';
import './btn-back-to-top';
import './map-point';

refs.form.addEventListener('input', debounce(addSearchQuery, 500));
refs.form.insertAdjacentHTML('afterbegin', searchFormInputMkp());
refs.closeModalBtn.addEventListener('click', onClickCross);
refs.modal.addEventListener('click', closeModalOnbackdropClick);
refs.cardContainer.addEventListener('click', onClickEvent);

refs.cardContainer.addEventListener('animationend', () => {
  refs.cardContainer.classList.remove('card-animation');
});
