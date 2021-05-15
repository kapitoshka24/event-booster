import '../sass/main.scss';
import './apiService';
import './spinner';
import { addSearchQuery } from './searchQuery';
import { refs } from './refs';
import './dropdown-menu';
import searchFormInputMkp from '../templates/search-input.hbs';
import paginationMkp from '../templates/pagination.hbs';
import {
  onClickEvent,
  onClickCross,
  closeModalByEscKey,
  closeModalOnbackdropClick,
} from './modal';
import debounce from 'lodash.debounce';
import './modal-content-render';
import './buyTiketQuery';

refs.form.addEventListener('input', debounce(addSearchQuery, 500));
refs.form.insertAdjacentHTML('afterbegin', searchFormInputMkp());
refs.footer.insertAdjacentHTML('beforebegin', paginationMkp());

refs.closeModalBtn.addEventListener('click', onClickCross);
window.addEventListener('keydown', closeModalByEscKey);
refs.modal.addEventListener('click', closeModalOnbackdropClick);
refs.cardContainer.addEventListener('click', onClickEvent);
