import '../sass/main.scss';
import './apiService';
import { refs } from './refs';
import searchFormInputMkp from '../templates/search-input.hbs';
import './dropdown-menu';
import cardContainerMkp from '../templates/card-container.hbs';
import paginationMkp from '../templates/pagination.hbs';

// Adding template of searchFormInput to '.main-part'
refs.headerSection.insertAdjacentHTML('afterbegin', searchFormInputMkp());
// refs.cardContainer.insertAdjacentHTML('afterbegin', searchFormInputMkp());

// заменить на корректный: при отрисовке карточек, после ввода запроса
refs.cardContainer.innerHTML = cardContainerMkp({
  card: [
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
    1,
    2,
    3,
  ],
});

refs.cardContainer.insertAdjacentHTML('beforeend', paginationMkp());
