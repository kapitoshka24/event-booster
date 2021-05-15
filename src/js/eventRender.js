import EventApiService from './apiService';
import { refs } from './refs';
import { toggleSpinner } from './spinner';
import cardContainerMkp from '../templates/card-container.hbs';

export const searchOptions = {query: "", country: ""}

export const eventRender = async () => {
  const eventApiService = new EventApiService(searchOptions);
  toggleSpinner('remove');
  try {
      const result = await eventApiService.fetchEvent();
      refs.cardContainer.insertAdjacentHTML('beforeend', cardContainerMkp(result))
      } catch (error) {
    console.log(error);
  } finally {
    toggleSpinner('add');
  }
};
