import { refs } from './refs';
import eventContentTpl from '../templates/modal-container.hbs';
import { eventApiService } from './apiService';

export default async id => {
  eventApiService.id = id;
  try {
    const result = await eventApiService.fetchEventById();
    appendEventContent(result);
  } catch (error) {
    console.log(error);
  }
};

const appendEventContent = result => {
  refs.modalContentContainer.insertAdjacentHTML(
    'beforeend',
    eventContentTpl(result),
  );
};
