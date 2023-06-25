import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getConstructorStandings = async (season) => {
    try {
        const response = await f1Axios.get(`${season}/constructorStandings.json`);
        console.log(response);
        return response;
    } catch (error) {
        console.error('Error fetching constructor standings:', error);
        throw new Error('Failed to fetch constructor standings');
    }
};

export const useConstructorStandings = (season) => {
    return useQuery(['constructorStandings', season], () => getConstructorStandings(season));
};
