import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getLastRace = async () => {
    try {
        const response = await f1Axios.get(`current/last.json`);
        console.log(response);
        return response;
    } catch (error) {
        console.error('Error fetching last race:', error);
        throw new Error('Failed to fetch last race');
    }
};

export const useLastRace = () => {
    return useQuery(['lastRace'], () => getLastRace());
};