import '../sass/main.scss';
import './apiService';
import { addSearchQuery } from './searchQuery';
import { refs } from './refs';
import searchFormInputMkp from '../templates/search-input.hbs';
import './dropdown-menu';
import eventRender from './eventRender';
import paginationMkp from '../templates/pagination.hbs';
import {
  onClickEvent,
  onClickCross,
  scrollHidden,
  closeModalByEscKey,
  closeModalOnbackdropClick,
} from './modal';
import debounce from 'lodash.debounce';
import './modal-content-render';

refs.form.addEventListener('input', debounce(addSearchQuery, 500));
refs.footer.insertAdjacentHTML('beforebegin', paginationMkp());
eventRender();

refs.form.insertAdjacentHTML('afterbegin', searchFormInputMkp());

refs.closeModalBtn.addEventListener('click', onClickCross);
window.addEventListener('keydown', closeModalByEscKey);
refs.modal.addEventListener('click', closeModalOnbackdropClick);

refs.cardContainer.addEventListener('click', onClickEvent);
