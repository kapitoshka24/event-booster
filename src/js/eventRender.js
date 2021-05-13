import api from './apiService';
import { refs } from './refs';
import cardContainerMkp from '../templates/card-container.hbs';

const eventApiService = new api.EventApiService();
export default async () => {
  try {
    const result = await eventApiService.fetchEvent();
    refs.cardContainer.insertAdjacentHTML(
      'beforeend',
      cardContainerMkp(result),
    );
  } catch (error) {
    console.log('Error');
  } finally {
    refs.spinner.classList.add('hidden');
  }
};
