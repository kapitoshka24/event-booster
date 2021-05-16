import { errorFromServer, errorFromServerById } from './pnotify';

const API_KEY = '1C29h88u3svXxBVo6fuCgguwojy1aerE';
const URL = 'https://app.ticketmaster.com/discovery/v2/events.json';

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
    )
      .then(r => r.json())
      .catch(() => {
        errorFromServer();
      });

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
    const response = await fetch(`${URL}?id=${this.id}&apikey=${API_KEY}`)
      .then(r => r.json())
      .catch(() => {
        errorFromServerById();
      });

    return response._embedded.events[0];
  }
}

export const eventApiService = new EventApiService();
