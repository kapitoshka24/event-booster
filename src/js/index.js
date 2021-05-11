import '../sass/main.scss';
import './apiService';
import addSearchQuery from './searchQuery';
import { refs } from './refs';
import './dropdown-menu';
import eventRender from './eventRender';
import paginationMkp from '../templates/pagination.hbs';
import debounce from 'lodash.debounce';

refs.form.addEventListener('input', debounce(addSearchQuery, 500));
refs.footer.insertAdjacentHTML('beforebegin', paginationMkp());
eventRender();

refs.closeModalBtn.addEventListener('click', onClickCross);

function onClickCross() {
  refs.modal.classList.toggle('is-hidden');
}
