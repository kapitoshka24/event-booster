const API_KEY = 'ARJZnVEmUrYNGar66goghRYaXKGawgDn';
const BASE_URL = `https://app.ticketmaster.com/discovery/v2/events.json?size=24&apikey=${API_KEY}`;

export default class EventApiService {
  constructor() {}
  async fetchEvent() {
    const response = await fetch(`${BASE_URL}`);
    const eventObj = await response.json();
    return eventObj._embedded.events;
  }
}
