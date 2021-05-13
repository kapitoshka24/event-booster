import '../sass/main.scss';
import './apiService';
import './spinner';
import { addSearchQuery } from './searchQuery';
import { refs } from './refs';
import './dropdown-menu';
import { onClickEvent, onClickCross } from './modal';
import searchFormInputMkp from '../templates/search-input.hbs';
import paginationMkp from '../templates/pagination.hbs';
import debounce from 'lodash.debounce';

refs.form.addEventListener('input', debounce(addSearchQuery, 500));
refs.form.insertAdjacentHTML('afterbegin', searchFormInputMkp());
refs.footer.insertAdjacentHTML('beforebegin', paginationMkp());

refs.closeModalBtn.addEventListener('click', onClickCross);
refs.cardContainer.addEventListener('click', onClickEvent);
