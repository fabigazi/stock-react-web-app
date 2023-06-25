import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getDriverStandings = async (season) => {
    try {
        const response = await f1Axios.get(`${season}/driverStandings.json`);
        console.log(response);
        return response;
    } catch (error) {
        console.error('Error fetching driver standings:', error);
        throw new Error('Failed to fetch driver standings');
    }
};

export const useDriverStandings = (season) => {
    return useQuery(['driverStandings', season], () => getDriverStandings(season));
};