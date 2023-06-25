import axios from 'axios';

// f1 api
export const f1Axios = axios.create({
  baseURL: 'https://ergast.com/api/f1',
});

// wiki images api
export const wikiImageAxios = axios.create({
  baseURL: 'https://en.wikipedia.org/w/',
});