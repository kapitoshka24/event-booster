import { refs } from './refs';
import eventContentTpl from '../templates/modal-container.hbs';
import api from './apiService';

const eventApiService = new api.EventApiService();

export default async id => {
  eventApiService.id = id;
  try {
    const result = await eventApiService.fetchEventById();
    const eventTime = result.dates.start.localTime.slice(0, -3);
    result.dates.start.localTime = eventTime;
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
