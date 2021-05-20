import { refs } from './refs';

function onClickBtn(link) {
  window.open(link);
}

refs.backdrop.addEventListener('click', event => {
  if (event.target.matches('.btn-tickets')) {
    let urlLink = event.target.getAttribute('link');
    event.target.blur();
    onClickBtn(urlLink);
  }
});
