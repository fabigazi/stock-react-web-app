import { useQuery } from '@tanstack/react-query';
import { f1Axios } from '../../../../services/axios';

export const getCircuit = async (circuitId) => {
    try {
        const response = await f1Axios.get(`circuits/${circuitId}.json`);
        console.log(response); // Log the response data
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error fetching circuit:', error);
        throw new Error('Failed to fetch circuit');
    }
};

export const useGetCircuit = (circuitId) => {
    return useQuery(['circuit', circuitId], () => getCircuit(circuitId));
};
