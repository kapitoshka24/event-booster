import '../sass/main.scss';
import './apiService';
import { refs } from './refs';
import './dropdown-menu';
import cardContainerMkp from '../templates/card-container.hbs';
import eventRender from './eventRender';
import paginationMkp from '../templates/pagination.hbs';

eventRender();

// заменить на корректный: при отрисовке карточек, после ввода запроса
refs.cardContainer.innerHTML = cardContainerMkp({
  card: [
    1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
  ],
});

refs.cardContainer.insertAdjacentHTML('beforeend', paginationMkp());
