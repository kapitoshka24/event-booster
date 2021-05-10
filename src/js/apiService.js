const API_KEY = 'ARJZnVEmUrYNGar66goghRYaXKGawgDn';
const options = {
  searchQuery: "",
  countryQuery: ""
}
const BASE_URL = `https://app.ticketmaster.com/discovery/v2/events.json?size=24&apikey=${API_KEY}`;

class EventApiService {
  constructor() {}
  async fetchEvent() {
    // &countryCode удалить если фильтрация событий будет без запроса на сервер, а по полученным событиям с сервера после запроса
    const response = await fetch(`${BASE_URL}&keyword=${options.searchQuery}&countryCode${options.countryQuery}`);
    const eventObj = await response.json();
    return eventObj._embedded.events;
  }
}

export default {EventApiService, options}