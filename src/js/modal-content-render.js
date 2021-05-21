import { refs } from './refs';
import eventContentTpl from '../templates/modal-container.hbs';
import { eventApiService } from './api-service';
import { toggleSpinner } from './spinner';

function getEventsByUniquePlace(arr) {
  const uniqueArrPlaceId = [];
  const uniqueArrPlace = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]._embedded) {
      continue;
    }
    if (
      !uniqueArrPlaceId.includes(arr[i]._embedded.venues[0].id) &
      (uniqueArrPlaceId.length < 10)
    ) {
      uniqueArrPlaceId.push(arr[i]._embedded.venues[0].id);
      uniqueArrPlace.push(arr[i]);
    }
  }
  return uniqueArrPlace;
}

export default async id => {
  eventApiService.id = id;
  try {
    const result = await eventApiService.fetchEventById();

    result.eventsAuthor = getEventsByUniquePlace(result.eventsAuthor);

    if (result.response.dates.start.localTime) {
      const eventTime = result.response.dates.start.localTime.slice(0, -3);
      result.response.dates.start.localTime = eventTime;
    }

    let eventLocation = result.response._embedded.venues[0].location;
    let tempSumm =
      parseFloat(eventLocation.latitude) + parseFloat(eventLocation.longitude);
    if (tempSumm == 0) {
      eventLocation.latitude = undefined;
      eventLocation.longitude = undefined;
    }

    appendEventContent(result);

    if (!result.response.url) {
      document
        .querySelector('.btn-tickets')
        .setAttribute('disabled', 'disabled');
      document
        .querySelector('.buy-link')
        .setAttribute('onclick', 'return false');
    }
    else if (!result.response.priceRanges) {
      document
        .querySelector('.btn-tickets')
        .setAttribute('disabled', 'disabled');
      document
        .querySelector('.buy-link')
        .setAttribute('onclick', 'return false');
    }
  } catch (error) {
    console.log(error);
  } finally {
    toggleSpinner('modalContentContainer', 'add');
  }
};

const appendEventContent = result => {
  refs.modalContentContainer.insertAdjacentHTML(
    'beforeend',
    eventContentTpl(result),
  );

  animateButtons();
};

const animateButtons = () => {
  const refsA = {
    btnAnim: document.querySelector('.btn-tickets'),
    btnCont: document.querySelector('.modal-buy-button-container'),
  };

  console.log(refsA.btnAnim.disabled);

  if (refsA.btnAnim.disabled === false) {
    refsA.btnAnim.addEventListener('mouseover', () => {
      refsA.btnAnim.classList.add('animation');
      refsA.btnCont.classList.add('anim');
    });
  }
};
