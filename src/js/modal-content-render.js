import { refs } from './refs';
import eventContentTpl from '../templates/modal-container.hbs';
import { eventApiService } from './apiService';

function getEventsByUniquePlace(arr) {
  const uniqueArrPlaceId = []
  const uniqueArrPlace = []
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArrPlaceId.includes(arr[i]._embedded.venues[0].id) || uniqueArrPlaceId.length > 9) {
      continue
    }
    if (!uniqueArrPlaceId.includes(arr[i]._embedded.venues[0].id)) {
      uniqueArrPlaceId.push(arr[i]._embedded.venues[0].id)
      uniqueArrPlace.push(arr[i])
    }
    
  }
  return uniqueArrPlace
}

export default async id => {
  eventApiService.id = id;
  try {
    const result = await eventApiService.fetchEventById();
    console.log(getEventsByUniquePlace(result.eventsAuthor));
    result.eventsAuthor = getEventsByUniquePlace(result.eventsAuthor)
    appendEventContent(result);
    console.log(eventContentTpl(result));
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
