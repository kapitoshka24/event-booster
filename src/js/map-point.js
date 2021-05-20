import { refs } from './refs';

function onClickLink(link) {
  window.open(link);
}

refs.backdrop.addEventListener('click', event => {
  if (event.target.matches('.maps')) {
    let mapLink = event.target.getAttribute('href');
    event.preventDefault();
    if (mapLink.length > 1) onClickLink(mapLink);
  }
});
