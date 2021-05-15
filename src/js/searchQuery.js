import { refs } from './refs';
import {eventRender} from './eventRender';
import {searchOptions} from './eventRender';

export const searchEvents = value => {
  searchOptions[Object.keys(value)[0]] = Object.values(value)[0]
};

const clearCardContainer = () => {
  refs.cardContainer.innerHTML = '';
};

const addNewEvents = () => {
  clearCardContainer();
  eventRender();
};

export const addSearchQuery = el => {
  if (el.target.name === 'search') {
    searchEvents({ query: el.target.value })
    addNewEvents()
  }
  else {
    return;
  }
};

export function onCountrySearch() {
  searchEvents({ country: this.value })
  addNewEvents()
}

