const API_KEY = '1C29h88u3svXxBVo6fuCgguwojy1aerE';
const URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
const ATR_URL = 'https://app.ticketmaster.com/discovery/v2/attractions.json';

export const options = {
  searchQuery: '',
  countryQuery: '',
};

class EventApiService {
  constructor() {
    this.countryQuery = '';
    this.id = '';
    this.events = [];
    this.page = 0;
    this.totalPages = 0;
  }

  async fetchData(doPagesRefresh = true) {
    const response = await fetch(
      `${URL}?size=24&keyword=${options.searchQuery}&page=${this.page}&countryCode=${options.countryQuery}&apikey=${API_KEY}`,
    ).then(r => r.json());

    this.events = response._embedded ? response._embedded.events : [];

    if (this.page !== response.page.number) {
      this.page = response.page.number;
    }

    this.totalPages = Math.min(1000 / 24, response.page.totalPages);

    if (doPagesRefresh) {
      window.dispatchEvent(new Event('UPDATE_PAGES'));
    }

    return {
      events: this.events,
      page: this.page,
      totalPages: this.totalPages,
    };
  }

  async fetchEventById() {
    const response = await fetch(`${URL}?id=${this.id}&apikey=${API_KEY}`).then(
      r => r.json(),
    );
    const eventsAuthor = await fetch(`${URL}?size=100&keyword=${response._embedded.events[0]._embedded.attractions[0].name}}&sort=date,asc&apikey=${API_KEY}`).then(
      r => r.json(),
    );

    return {response: response._embedded.events[0], eventsAuthor: eventsAuthor._embedded.events};
  }
}

export const eventApiService = new EventApiService();
