import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getNextRace = async () => {
  try {
    const response = await f1Axios.get(`current/next.json`);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error fetching next race:', error);
    throw new Error('Failed to fetch next race');
  }
};

export const useNextRace = () => {
  return useQuery(['nextRace'], () => getNextRace());
};