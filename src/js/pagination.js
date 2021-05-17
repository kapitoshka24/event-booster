import * as $ from 'jquery';
import { eventApiService } from './api-service';
import cardContainerMkp from '../templates/card-container.hbs';
import { refs } from './refs';
import { toggleSpinner } from './spinner';
import { successfullRequest, emptyEvents } from './pnotify';

$(async function () {
  const updatePages = async () => {
    const totalPages = (await eventApiService.fetchData(false)).totalPages;

    if (totalPages === 0) {
      refs.cardContainer.innerHTML = '';
      refs.paginationList.classList.add('hide-pages');
      emptyEvents();
      toggleSpinner('add');

      return;
    } else {
      refs.paginationList.classList.remove('hide-pages');
      const pages = Array.from({ length: totalPages }, (_, i) => i);

      $('.pagination-list').pagination({
        dataSource: pages,
        pageSize: 1,
        autoHidePrevious: true,
        autoHideNext: true,
        callback: async function (data) {
          refs.cardContainer.innerHTML = '';
          toggleSpinner('remove');

          eventApiService.page = data;
          const events = (await eventApiService.fetchData(false)).events;

          refs.cardContainer.insertAdjacentHTML(
            'beforeend',
            cardContainerMkp(events),
          );
          successfullRequest();
          toggleSpinner('add');
        },
      });
    }
  };

  updatePages();

  window.addEventListener('UPDATE_PAGES', () => updatePages());
});
