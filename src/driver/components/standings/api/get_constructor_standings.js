import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getConstructorRankings = async (season) => {
    try {
        const response = await f1Axios.get(`${season}/constructorStandings.json`);
        const raceResults = response.data;
        console.log(raceResults);
    } catch (error) {
        console.error('Error fetching constructor results:', error);
    }
};

export const useConstructorRankings = (season) => {
    return useQuery({
        queryKey: ['constructorStandings', season],
        queryFn: () => getConstructorRankings(season),
    });
};