import api from './apiService';
import { refs } from './refs';
import { showHideSpinner } from './spinner';
import cardContainerMkp from '../templates/card-container.hbs';
const eventApiService = new api.EventApiService();
export default async () => {
  showHideSpinner("remove")
  try {
    const result = await eventApiService.fetchEvent();
    refs.cardContainer.insertAdjacentHTML(
      'beforeend',
      cardContainerMkp(result),
    );
  } catch (error) {
    console.log(error);
  } finally {
    showHideSpinner("add")
  }
};
