import { refs } from './refs';
import dropdownMenuTpl from '../templates/dropdown-menu.hbs';
import countries from '../../countries.json';
import { onCountrySearch } from './search-query';

refs.form.insertAdjacentHTML('beforeend', dropdownMenuTpl(countries));
refs.form.querySelector('select').addEventListener('change', onCountrySearch);
refs.form.querySelector('select').addEventListener('blur', onFocusLoss);

function onFocusLoss() {
    refs.form.querySelector('select').classList.remove('arrow-down');
};

$('select').on('change', function () {
    $(this).trigger('blur');
})