import { refs } from './refs';
import dropdownMenuTpl from '../templates/dropdown-menu.hbs';
import countries from '../../countries.json';
import { onCountrySearch } from './searchQuery';

refs.form.insertAdjacentHTML('beforeend', dropdownMenuTpl(countries));

// відслідковування події по вибору елемента зі списку (<option>)
refs.form.querySelector('select').addEventListener('change', onCountrySearch);