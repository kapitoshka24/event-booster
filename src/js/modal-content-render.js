import { refs } from './refs';
import eventContentTpl from '../templates/modal-container.hbs';
import { eventApiService } from './api-service';
import { toggleSpinner } from './spinner';
import { addClassSpinner } from './spinner';

function getEventsByUniquePlace(arr) {
  const uniqueArrPlaceId = [];
  const uniqueArrPlace = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      uniqueArrPlaceId.includes(arr[i]._embedded.venues[0].id) ||
      uniqueArrPlaceId.length > 9
    ) {
      continue;
    }
    if (!uniqueArrPlaceId.includes(arr[i]._embedded.venues[0].id)) {
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

    appendEventContent(result);

    if (!result.response.priceRanges) {
      document
        .querySelector('.btn-tickets')
        .setAttribute('disabled', 'disabled');
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
    btnContainer: document.querySelector('.modal-buy-button-container'),
  };

  if (refsA.btnAnim.disabled === false) {
    refsA.btnAnim.addEventListener('mouseover', () => {
      refsA.btnAnim.classList.add('animation');
    });

    refsA.btnContainer.addEventListener('mouseover', () => {
      refsA.btnContainer.classList.add('anim');
    });
  }
};
