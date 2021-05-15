export default {
  getItem(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return console.error(error);
    }
  },
  setItem(key, value) {
    try {
      return localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      return console.error(error);
    }
  },
};
