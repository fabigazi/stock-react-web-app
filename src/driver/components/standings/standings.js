import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DriverStandings from './driver-standings';
import ConstructorStandings from './constructor-standings';
//import SeasonFilter from '../../../components/Select/SeasonFilter';

function Standings() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <SeasonFilter /> */}
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Drivers" />
          <Tab label="Constructors" />
        </Tabs>
        {!value ? <DriverStandings /> : <ConstructorStandings />}
      </Box>
    </>
  );
}

export default Standings;