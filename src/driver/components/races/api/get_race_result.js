import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getRaceResult = async (season, round) => {
  try {
    const response = await f1Axios.get(`${season}/${round}/results.json`);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error fetching race result:', error);
    throw new Error('Failed to fetch race result');
  }
};

export const useRaceResult = (season, round) => {
  return useQuery(['raceResult', season, round], () => getRaceResult(season, round));
};