import { refs } from './refs';
import dropdownMenuTpl from '../templates/dropdown-menu.hbs';

refs.form.insertAdjacentHTML('beforeend', dropdownMenuTpl());
