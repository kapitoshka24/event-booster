import '../sass/main.scss';
import './apiService';
import {refs} from './refs';
import cardContainerMkp from '../templates/card-container.hbs';

// заменить на корректный: при отрисовке карточек, после ввода запроса
refs.cardContainer.innerHTML = cardContainerMkp({ card: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3] })