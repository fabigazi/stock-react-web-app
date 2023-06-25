import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getTeamRankings = async (season) => {
    try {
        const response = await f1Axios.get(`${season}/constructorStandings.json`);
        const raceResults = response.data;
        console.log(raceResults);
    } catch (error) {
        console.error('Error fetching race results:', error);
    }
};

export const useTeamRankings = (season) => {
    return useQuery({
        queryKey: ['teamRankings', season],
        queryFn: () => getTeamRankings(season),
    });
};