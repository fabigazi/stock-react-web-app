import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getDriverRankings = (season) => {
    return f1Axios.get(`${season}/driverStandings.json`);
};

export const useDriverRankings = (season) => {
    return useQuery({
        queryKey: ['driverRankings', season],
        queryFn: () => getDriverRankings(season),
    });
};