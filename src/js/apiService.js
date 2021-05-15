const API_KEY = 'ARJZnVEmUrYNGar66goghRYaXKGawgDn';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?';

class EventApiService {
  constructor( {query="", country="", id=""} ) {
    this.query = query;
    this.country = country;
    this.id = id;
  }
  async fetchEvent() {
    const response = await fetch(`${BASE_URL}size=24&keyword=${this.query}&countryCode=${this.country}&apikey=${API_KEY}`);
    const eventObj = await response.json();
    return eventObj._embedded.events;
  }

  async fetchEventById() {
    const response = await fetch(`${BASE_URL}id=${this.id}&apikey=${API_KEY}`);
    const eventObj = await response.json();
    return eventObj._embedded.events;
  }

}

export default EventApiService;