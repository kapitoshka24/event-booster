import '../sass/main.scss';
import './apiService';
import { refs } from './refs';
import './dropdown-menu';
import cardContainerMkp from '../templates/card-container.hbs';
import eventRender from './eventRender';
import paginationMkp from '../templates/pagination.hbs';

refs.footer.insertAdjacentHTML('beforebegin', paginationMkp());
eventRender();
