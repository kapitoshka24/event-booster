import { refs } from './refs';
import locationTpl from '../templates/modal-location.hbs';
import { eventApiService } from './api-service';

// foo of getting data from API and put it to result
export default async id => {
  eventApiService.id = id;
  try {
    const result = await eventApiService.fetchEventById();

    console.log(result);

    appendEventContent(result);
  } catch (error) {
    console.log(error);
  }
};

// foo of innerHTML of locationTpl template to refs.modalLocation
const appendEventContent = result => {
  refs.modalLocation.innerHTML(locationTpl(result));
};

// foo of click  to open new window with location
function onClickLink(link) {
  window.open(link);
}

// foo of generate location link from API data
refs.backdrop.addEventListener('click', event => {
  if (event.target.matches('.maps')) {
    let mapLink = event.target.getAttribute('href');
    event.preventDefault();
    onClickLink(mapLink);
  }
});
