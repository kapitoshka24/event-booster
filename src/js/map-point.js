import { refs } from './refs';

// foo of click  to open new window with location
function onClickLink(link) {
  window.open(link);
}

// foo of generate location link from API data
refs.backdrop.addEventListener('click', event => {
  if (event.target.matches('.maps')) {
    let mapLink = event.target.getAttribute('href');
    event.preventDefault();
    if (mapLink.length > 1) onClickLink(mapLink);
  }
});
