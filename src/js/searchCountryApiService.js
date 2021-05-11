const API_KEY = 'ARJZnVEmUrYNGar66goghRYaXKGawgDn';
const URL = 'https://app.ticketmaster.com/discovery/v2/events.json';

export default class EventApiService {
    constructor() {
        this.countryQuery = '';
    }

    async fetchEventByCountryCode() {
        const response = await fetch(`${URL}?countryCode=${this.countryQuery}&apikey=${API_KEY}`);
        const eventObj = await response.json();
        return eventObj._embedded.events;
    }
}