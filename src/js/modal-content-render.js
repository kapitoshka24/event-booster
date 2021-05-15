import { refs } from './refs';
import eventContentTpl from '../templates/modal-container.hbs';
import { toggleSpinner } from './spinner';
import EventApiService from './apiService';

export const searchOptionsById = {id: ""}

export const eventRenderById = async () => {
  const eventApiService = new EventApiService(searchOptionsById);
  toggleSpinner('remove');
  try {
      const result = await eventApiService.fetchEventById();
      refs.modalContentContainer.insertAdjacentHTML('beforeend', eventContentTpl(result))
      } catch (error) {
    console.log(error);
  } finally {
    toggleSpinner('add');
  }
};
