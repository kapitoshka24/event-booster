import api from './apiService';
import { refs } from './refs';
import { toggleSpinner } from './spinner';
import cardContainerMkp from '../templates/card-container.hbs';
const eventApiService = new api.EventApiService();
export default async () => {
  toggleSpinner("remove")
  try {
    const result = await eventApiService.fetchEvent();
    refs.cardContainer.insertAdjacentHTML(
      'beforeend',
      cardContainerMkp(result),
    );
  } catch (error) {
    console.log('Error');
  } finally {
    toggleSpinner("add")
  }
};
