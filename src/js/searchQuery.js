import api from './apiService';
import { refs } from './refs';
import eventRender from './eventRender';

const addSearchQuery = el => {
  if (el.target.name === 'search') {
    searchEventsByQuery(el.target.value);
  }
  // для инпута со странами подставить подходящий класс или свой if
  if (el.target.name === 'country') {
    searchEventsByCountry(el.target.value);
  } else {
    return;
  }
};

const searchEventsByQuery = value => {
  refs.cardContainer.innerHTML = '';
  refs.spinner.classList.remove("hidden")
  api.options.searchQuery = value;
  eventRender();
};

// функция поиска по странам. заменить на корректную
// value -- код страны
const searchEventsByCountry = value => {
  api.options.countryQuery = value;
  eventRender();
};

export default addSearchQuery;
