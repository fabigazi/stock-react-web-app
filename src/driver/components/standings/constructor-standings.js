import React, { useContext } from 'react';
import current_season from '../../../context';
import StandingsTable from '../table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useConstructorRankings } from './api/get_constructor_standings';
import { Link } from 'react-router-dom';

const ConstructorRow = ({ constructor }) => {
  return (
    <TableRow>
      <TableCell />
      <TableCell>{constructor.position}</TableCell>
      <TableCell>
        <Link
          to={`/teams/${constructor.Constructor.constructorId}`}
          className="text-inherit"
        >
          {constructor.Constructor.name}
        </Link>
      </TableCell>
      <TableCell>{constructor.points}</TableCell>
    </TableRow>
  );
};

function ConstructorStandings() {
  const year = 2023;//useContext(current_season);
  const teamRankingsQuery = useConstructorRankings(year);
  const columns = ['Position', 'Constructor', 'Points'];

  if (teamRankingsQuery.isSuccess) {
    const result =
      teamRankingsQuery.data.data.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings;

    if (!result) {
      return (
        <h1>No data found!</h1>
      );
    }

    const constructorRows = (
      <>
        {result.map((team) => {
          return (
            <ConstructorRow
              constructor={team}
              key={team.Constructor.constructorId}
            ></ConstructorRow>
          );
        })}
      </>
    );
    return <StandingsTable rows={constructorRows} columns={columns} />;
  }
}

export default ConstructorStandings;