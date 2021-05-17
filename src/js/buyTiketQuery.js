import { refs } from './refs';

function onClickBtn(urlLink) {
  window.open(urlLink);
}

refs.backdrop.addEventListener('click', event => {
  if (event.target.matches('.modal-btn-buy-tickets')) {
    let urlLink = event.target.getAttribute('link');
    onClickBtn(urlLink);
    event.target.blur(event);
  }
});
