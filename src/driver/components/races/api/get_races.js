import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getRaces = async (season) => {
  try {
    const response = await f1Axios.get(`${season}.json`);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error fetching races:', error);
    throw new Error('Failed to fetch races');
  }
};

export const useRaces = (season) => {
  return useQuery(['races', season], () => getRaces(season));
};