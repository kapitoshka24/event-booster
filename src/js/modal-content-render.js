import { refs } from './refs';
import eventContentTpl from '../templates/modal-container.hbs';
import api from './apiService';

const eventApiService = new api.EventApiService();

export default async id => {
  eventApiService.id = id;
  try {
    const result = await eventApiService.fetchEventById();
    appendEventContent(result);

    animateButtons();
  } catch (error) {
    console.log(error);
  }
};

const appendEventContent = result => {
  refs.modalContentContainer.insertAdjacentHTML(
    'beforeend',
    eventContentTpl(result),
  );
};

const animateButtons = () => {
  const refsAnimation = {
    btnAnim: document.querySelectorAll('.btn-tickets'),
    moreBtnAnim: document.querySelector(
      '.modal-author-button-container button',
    ),
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
