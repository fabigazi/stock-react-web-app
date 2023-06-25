import React, { useContext } from 'react';
import StandingsTable from '../table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import current_season from '../../../context';
import { useDriverRankings } from './api/get_driver_standings';
import { Link } from 'react-router-dom';

const DriverRow = ({ driver }) => {
  return (
    <TableRow>
      <TableCell />
      <TableCell>{driver.position}</TableCell>
      <TableCell>
        <Link to={`/drivers/${driver.Driver.driverId}`} className="text-inherit">
          {driver.Driver.givenName + ' ' + driver.Driver.familyName}
        </Link>
        <div className='text-xs'>
          {driver.Constructors[0].name}
        </div>
      </TableCell>
      <TableCell>{driver.points}</TableCell>
    </TableRow>
  );
};

function DriverStandings() {
  const year  = 2023;//useContext(current_season);
  const columns = ['Position', 'Driver', 'Points'];
  const driverRankingsQuery = useDriverRankings(year);

  if (driverRankingsQuery.isSuccess) {
    const driverRankings =
      driverRankingsQuery.data.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    const driverRows = (
      <>
        {driverRankings.map((driver) => {
          return <DriverRow key={`${driver.Driver.driverId}`} driver={driver}></DriverRow>;
        })}
      </>
    );
    return <StandingsTable rows={driverRows} columns={columns} />;
  }
}

export default DriverStandings;