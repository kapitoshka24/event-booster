import { refs } from './refs';
import dropdownMenuTpl from '../templates/dropdown-menu.hbs';
import countries from '../../countries.json';
import { onCountrySearch } from './search-query';

refs.form.insertAdjacentHTML('beforeend', dropdownMenuTpl(countries));
refs.form.querySelector('select').addEventListener('change', onCountrySearch);
