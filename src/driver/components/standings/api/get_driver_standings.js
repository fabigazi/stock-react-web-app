import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getDriverRankings = async (season) => {
    try {
        const response = await f1Axios.get(`${season}/driverStandings.json`);
        const raceResults = response.data;
        console.log(raceResults);
    } catch (error) {
        console.error('Error fetching race results:', error);
    }
    return;
};

export const useDriverRankings = (season) => {
    return useQuery({
        queryKey: ['driverStandings', season],
        queryFn: () => getDriverRankings(season),
    });
};