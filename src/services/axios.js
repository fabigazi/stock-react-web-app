import axios from 'axios';

// f1 api
export const f1Axios = axios.create({
  baseURL: 'https://ergast.com/api/f1',
});

// // wiki images api
// export const wikiImageAxios = axios.create({
//   baseURL: 'https://en.wikipedia.org/w/',
// });

// node server api
export const nodeAxios = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// flag api
export const flagAxios = axios.create({
  baseURL: 'https://flagcdn.com/w20',
});