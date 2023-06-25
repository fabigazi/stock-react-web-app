import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getSprintResult = async (season, round) => {
  try {
    const response = await f1Axios.get(`${season}/${round}/sprint.json`);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error fetching sprint result:', error);
    throw new Error('Failed to fetch sprint result');
  }
};

export const useSprintResult = (season, round) => {
  return useQuery(['sprintResult', season, round], () => getSprintResult(season, round));
};