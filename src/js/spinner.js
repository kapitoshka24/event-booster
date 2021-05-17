import { refs } from './refs';
import storage from './storage';
import spinner from '../templates/spinner.hbs';

const addSpinner = (ref, place) => {
  refs[ref].insertAdjacentHTML(place, spinner());
};

const addClassSpinner = ({ search, addClass = 'first-visit' }) => {
  document.querySelector(search).classList.add(addClass);
};

export const toggleSpinner = param => {
  refs.mainPart.querySelector('.spinner').classList[param]('hidden');
};

const addFirstVisitStyles = () => {
  refs.firstVisit.classList.add('first-visit-container');
  addClassSpinner({ search: '.spinner' });
  addClassSpinner({ search: 'div.dot-pulse' });
  document.querySelector('.first-visit-container').style =
    'transition: opacity 2s';
};

if (!storage.getItem('first-visit')) {
  addSpinner('firstVisit', 'afterend');
  addFirstVisitStyles();
  window.addEventListener('load', function() {
  setTimeout(() => {
    refs.firstVisit.classList.remove('first-visit-container');
    document.querySelector('.spinner.first-visit').outerHTML = '';
    addSpinner('mainPart', 'beforeend');
    window.dispatchEvent(new Event('UPDATE_PAGES'));
    storage.setItem('first-visit', true);
  }, 2500);
})
} else {
  addSpinner('mainPart', 'beforeend');
  window.dispatchEvent(new Event('UPDATE_PAGES'));
}
