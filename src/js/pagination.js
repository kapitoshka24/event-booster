import * as $ from 'jquery';
import { options, eventApiService } from './api-service';
import cardContainerMkp from '../templates/card-container.hbs';
import { refs } from './refs';
import { toggleSpinner } from './spinner';
import { successfullRequest, emptyEvents } from './pnotify';
import noEventsCountryTpl from '../templates/no-events-country.hbs';
import noEventsQueryTpl from '../templates/no-events-query.hbs';
import noEventsForTwoQuerisTpl from '../templates/no-events-else.hbs';
import countries from '../../countries.json';

$(async function () {
  const updatePages = async () => {
    const totalPages = (await eventApiService.fetchData(false)).totalPages;

    if (totalPages === 0) {
      refs.cardContainer.innerHTML = '';
    
      refs.paginationList.classList.add('hide-pages');
      emptyEvents();
      toggleSpinner('mainPart', 'add');

      if (options.countryQuery && !(options.searchQuery === '')) {
        const country = countries.find(country => country.countryCode === options.countryQuery);
        const queries = {};

        queries.query = options.searchQuery;
        queries.country = country.name;

        refs.cardContainer.insertAdjacentHTML('beforeend', noEventsForTwoQuerisTpl(queries));
        
        return;
      };

      if (options.countryQuery) {
        const country = countries.find(country => country.countryCode === options.countryQuery);
        refs.cardContainer.insertAdjacentHTML('beforeend', noEventsCountryTpl(country));
      };

      if (!(options.searchQuery === '')) {
        refs.cardContainer.insertAdjacentHTML('beforeend', noEventsQueryTpl(options.searchQuery));
      };

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
          toggleSpinner('mainPart', 'remove');

          eventApiService.page = data;
          const events = (await eventApiService.fetchData(false)).events;

          refs.cardContainer.insertAdjacentHTML(
            'beforeend',
            cardContainerMkp(events),
          );
          successfullRequest();
          toggleSpinner('mainPart', 'add');
        },
      });
    }
  };

  updatePages();

  window.addEventListener('UPDATE_PAGES', () => updatePages());
});
