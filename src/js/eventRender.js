import GetEvent from './apiService';
import { refs } from './refs';
import cardContainerMkp from '../templates/card-container.hbs';
export default () => {
  const getEvent = new GetEvent();
  getEvent
    .fetchEvent()
    .then(result => {
      refs.cardContainer.innerHTML = cardContainerMkp(result);
    })
    .catch(error => console.log(error));
};
