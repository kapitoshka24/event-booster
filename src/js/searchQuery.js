import api from './apiService';
import { refs } from './refs';
import eventRender from './eventRender';
import cardContainerMkp from '../templates/card-container.hbs';

export const addSearchQuery = el => {
  if (el.target.name === 'search') {
    searchEventsByQuery(el.target.value);
  }
  else {
    return;
  }
};

const searchEventsByQuery = value => {
  clearCardContainer();
  api.options.searchQuery = value;
  eventRender();
};

const eventApiService = new api.EventApiService();

export function onCountrySearch() {
  // this.value - значення атрибуту value тега <option>, яке відповідає значенню countryCode
  // function declaration тому що this
  api.options.countryQuery = this.value;
  refs.spinner.classList.remove('hidden')
  clearCardContainer();
  searchEventsByCountry();
}

const searchEventsByCountry = async () => {
  try {
    const result = await eventApiService.fetchEvent();
    renderEventCards(result);
  } catch (error) {
    console.log('Error');
  } finally {
    refs.spinner.classList.add('hidden');
  }
};

const clearCardContainer = () => {
  refs.cardContainer.innerHTML = '';
};

const renderEventCards = result => {
  refs.cardContainer.insertAdjacentHTML('beforeend', cardContainerMkp(result));
};

export default { addSearchQuery, onCountrySearch };
