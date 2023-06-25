import React, { useEffect, useState } from 'react';

const CircuitFlag = ({ circuitId }) => {
  const [flagUrl, setFlagUrl] = useState('');

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const response = await fetch(`http://ergast.com/api/f1/circuits/${circuitId}`);
        const data = await response.json();

        // Extract country information from the response
        const country = data?.MRData?.CircuitTable?.Circuits[0]?.Location?.country;

        if (country) {
          // Replace spaces in the country name with underscores
          const formattedCountry = country.replace(/ /g, '_');

          // Fetch the flag image based on the country name
          const flagResponse = await fetch(`https://countryflagsapi.com/png/${formattedCountry}`);
          const flagData = await flagResponse.blob();

          // Create an object URL for the flag image
          const flagObjectUrl = URL.createObjectURL(flagData);
          setFlagUrl(flagObjectUrl);
        }
      } catch (error) {
        console.error('Error fetching circuit flag:', error);
      }
    };

    fetchFlag();

    // Clean up the flag URL when the component unmounts
    return () => {
      if (flagUrl) {
        URL.revokeObjectURL(flagUrl);
      }
    };
  }, [circuitId]);

  if (flagUrl) {
    return <img src={flagUrl} height="30px" alt="Circuit Flag" />;
  }

  return null;
};

export default CircuitFlag;
