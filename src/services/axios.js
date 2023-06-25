import Axios from 'axios';

// f1 api
export const ergastAxios = Axios.create({
  baseURL: 'https://ergast.com/api/f1',
});

// wiki images api
export const wikiImageAxios = Axios.create({
  baseURL: 'https://en.wikipedia.org/w/',
});