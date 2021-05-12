import api from './apiService';
import { refs } from './refs';
import eventRender from './eventRender';
import cardContainerMkp from '../templates/card-container.hbs';

export const addSearchQuery = el => {
  if (el.target.name === 'search') {
    searchEventsByQuery(el.target.value);
  }
  // для инпута со странами подставить подходящий класс или свой if
  // if (el.target.name === 'country') {
  //   searchEventsByCountry(el.target.value);
  // }
  else {
    return;
  }
};

const searchEventsByQuery = value => {
  clearCardContainer();
  api.options.searchQuery = value;
  eventRender();
};

// функция поиска по странам. заменить на корректную
// value -- код страны
// const searchEventsByCountry = value => {
//   api.options.countryQuery = value;
//   eventRender();
// };

const eventApiService = new api.EventApiService();

export function onCountrySearch() {
  // this.value - значення атрибуту value тега <option>, яке відповідає значенню countryCode
  // function declaration тому що this
    eventApiService.countryQuery = this.value;
    searchEventsByCountry();
};

const searchEventsByCountry = async () => {
  try {
    const result = await eventApiService.fetchEventByCountryCode();
    clearCardContainer();
    renderEventCards(result);
  } catch (error) {
    console.log('Error');
  }
};

const clearCardContainer = () => {
    refs.cardContainer.innerHTML = '';
};

const renderEventCards = (result) => {
    refs.cardContainer.insertAdjacentHTML(
        'beforeend',
        cardContainerMkp(result),
    );
};

export default { addSearchQuery, onCountrySearch };
