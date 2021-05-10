export default class GetEvent {
  constructor() {}
  fetchEvent() {
    const API_KEY = 'ARJZnVEmUrYNGar66goghRYaXKGawgDn';
    const BASE_URL = `https://app.ticketmaster.com/discovery/v2/events.json?size=24&apikey=${API_KEY}`;
    return fetch(`${BASE_URL}`)
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(({ _embedded }) => {
        return _embedded.events;
      });
  }
}
