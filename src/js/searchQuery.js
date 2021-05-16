import { options } from './apiService';
import { toggleSpinner } from './spinner';

export const addSearchQuery = evt => {
  window.addEventListener('keydown', key => {
    if (key.code === 'Enter') {
      key.preventDefault();
    }
  });

  if (evt.target.name === 'search') {
    searchEventsByQuery(evt.target.value);
  }
};

const searchEventsByQuery = value => {
  options.searchQuery = value;
  renderEvents();
};

export function onCountrySearch() {
  options.countryQuery = this.value;
  renderEvents();
}

const renderEvents = () => {
  window.dispatchEvent(new Event('UPDATE_PAGES'));
  toggleSpinner('remove');
};

export default { addSearchQuery, onCountrySearch };
