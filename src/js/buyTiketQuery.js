import { refs } from './refs';

// open new window dy link from Api.url
function onClickBtn(urlLink) {
  window.open(urlLink);
  // window.location.replace(link);
}

// use addEventListener on event 'click' on btn to by ticket
refs.backdrop.addEventListener('click', event => {
  if (event.target.matches('.modal-btn-buy-tickets')) {
    let urlLink = event.target.getAttribute('link');
    onClickBtn(urlLink);
  }
});
