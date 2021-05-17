import { refs } from './refs';
import eventContentTpl from '../templates/modal-container.hbs';
import { eventApiService } from './apiService';

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

    const eventTime = result.response.dates.start.localTime.slice(0, -3);
    result.response.dates.start.localTime = eventTime;

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

  animateButtons();
};

const animateButtons = () => {
  const refsAnimation = {
    btnAnim: document.querySelectorAll('.btn-tickets'),
    moreBtnAnim: document.querySelector('.modal-author-button-container'),
  };

  refsAnimation.btnAnim.forEach(elem =>
    elem.addEventListener('mouseover', () => {
      elem.classList.add('animation');
    }),
  );
  refsAnimation.moreBtnAnim.addEventListener('mouseover', () => {
    refsAnimation.moreBtnAnim.classList.add('animation');
  });
};
