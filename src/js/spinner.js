import { refs } from './refs';
import spinner from '../templates/spinner.hbs';

export const addSpinner = (ref, place) => {
  refs[ref].insertAdjacentHTML(place, spinner());
};

export const addClassSpinner = ({ search, addClass = 'first-visit' }) => {
  document.querySelector(search).classList.add(addClass);
};

export const toggleSpinner = (ref, param) => {
  refs[ref].querySelector('.spinner').classList[param]('hidden');
};

const addFirstVisitStyles = () => {
  addClassSpinner({ search: '.spinner' });
  addClassSpinner({ search: '.spinner-container' });
  addClassSpinner({ search: 'div.dot-pulse' });
};
const spinnerOverlay = '<div class="spinner-overlay"></div>'
refs.body.insertAdjacentHTML("afterbegin", spinnerOverlay);
  document.querySelector('.spinner-overlay').insertAdjacentHTML("afterbegin", spinner());
  addFirstVisitStyles();
addSpinner('mainPart', 'beforeend');
  refs.body.style = ""
  setTimeout(() => {
    refs.firstVisit.style = ""
    document.querySelector('.spinner-overlay').outerHTML = '';
  }, 1000);
