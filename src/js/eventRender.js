import EventApiService from './apiService';
import { refs } from './refs';
import cardContainerMkp from '../templates/card-container.hbs';

const eventApiService = new EventApiService();
export default async () => {
  try {
    const result = await eventApiService.fetchEvent();
    refs.cardContainer.innerHTML = cardContainerMkp(result);
  } catch (error) {
    console.log('Error');
  }
};
