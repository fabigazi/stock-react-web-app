import React, { useState, useEffect, useCallback } from 'react';
import { flagAxios } from '../../../services/axios';
import { useGetCircuit } from './api/get_circuit';
import getCountryCode from '../country_to_code';






const CircuitFlag = ({ circuitId }) => {
  const [flagUrl, setFlagUrl] = useState('');

  // Use the useGetCircuit hook here
  const { data, isLoading, isError } = useGetCircuit(circuitId);

  // Get the circuit from the returned data
  const circuit = data?.MRData?.CircuitTable?.Circuits[0];

  const fetchFlag = useCallback(async () => {
    try {
      // Ensure that `circuit` and `circuit.Location` are defined
      if (circuit && circuit.Location) {
        const country = circuit.Location.country;
        console.log(country);

        if (country) {
          const country_code = getCountryCode(country);
          console.log(country_code);
          // Fetch the flag image based on the country code
          const response = await flagAxios.get(`https://flagcdn.com/w20/${country_code}.png`);

          // Set the flag URL in the state
          setFlagUrl(response.config.url);
        }
      }
    } catch (error) {
      console.error('Error fetching circuit flag:', error);
    }
  }, [circuit]);

  // Fetch flag when `circuit` changes
  useEffect(() => {
    if (!isLoading && !isError) {
      fetchFlag();
    }
  }, [fetchFlag, isLoading, isError]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching circuit data</div>;
  }

  return (
    <>
      {<img src={flagUrl} height="50px" alt="Circuit Flag" />}
    </>
  );
};

export default CircuitFlag;
