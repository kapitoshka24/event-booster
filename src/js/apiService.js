const API_KEY = '1C29h88u3svXxBVo6fuCgguwojy1aerE';
const options = {
  searchQuery: '',
  countryQuery: '',
};
const BASE_URL = `https://app.ticketmaster.com/discovery/v2/events.json?size=24&apikey=${API_KEY}`;
const URL = 'https://app.ticketmaster.com/discovery/v2/events.json?size=24';

class EventApiService {
  constructor() {
    this.countryQuery = '';
    this.id = '';
  }
  async fetchEvent() {
    const response = await fetch(
      `${URL}&keyword=${options.searchQuery}&countryCode=${options.countryQuery}&apikey=${API_KEY}`,
    );
    const eventObj = await response.json();
    return eventObj._embedded.events;
  }

  async fetchEventByCountryCode() {
    const response = await fetch(
      `${URL}&countryCode=${this.countryQuery}&apikey=${API_KEY}`,
    );
    const eventObj = await response.json();
    return eventObj._embedded.events;
  }

  async fetchEventById() {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?id=${this.id}&apikey=${API_KEY}`,
    );
    const eventObj = await response.json();
    return eventObj._embedded.events[0];
  }
}

export default { EventApiService, options };
