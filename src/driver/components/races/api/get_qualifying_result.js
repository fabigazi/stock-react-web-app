import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getQualifyingResult = async (season, round) => {
  try {
    const response = await f1Axios.get(`${season}/${round}/qualifying.json`);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error fetching qualifying result:', error);
    throw new Error('Failed to fetch qualifying result');
  }
};

export const useQualiResult = (season, round) => {
  return useQuery(['qualiResult', season, round], () => getQualifyingResult(season, round));
};