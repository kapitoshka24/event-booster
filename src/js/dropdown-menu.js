import { refs } from './refs';
import dropdownMenuTpl from '../templates/dropdown-menu.hbs';
import countries from '../../countries.json';
import EventApiService from './searchCountryApiService';
import cardContainerMkp from '../templates/card-container.hbs';

refs.form.insertAdjacentHTML('beforeend', dropdownMenuTpl(countries));

const eventApiService = new EventApiService();

console.log(document.querySelector('select'));

const fetchEventByCountry = async () => {
  try {
    const result = await eventApiService.fetchEventByCountryCode();
    console.log('RESULT', result);
    clearCardContainer();
    renderEventCards(result);
  } catch (error) {
    console.log('Error');
  }
};

const renderEventCards = (result) => {
    refs.cardContainer.insertAdjacentHTML(
        'beforeend',
        cardContainerMkp(result),
    );
};

const clearCardContainer = () => {
    refs.cardContainer.innerHTML = '';
};

function onCountrySearch() {
    eventApiService.countryQuery = this.value;
    const value = this.value;
    console.log(value);
    fetchEventByCountry();
};

refs.form.querySelector('select').addEventListener('change', onCountrySearch);
