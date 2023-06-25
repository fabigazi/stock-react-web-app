import SpeedSummaryList from "../speed-summary-list";
import SpeedSummaryItem from "../speed-summary-list/speed-summary-item";
import RaceStandings from "../components/standings/standings";
import "./index.css";

function ExploreScreen() {
  return (
    <div>
      <h1>Explore Formula 1</h1>

      <ul className="nav nav-pills mb-2 mt-2">
        <li className="nav-item">
          <a className="nav-link active">Standings</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Races</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Drivers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Teams</a>
        </li>
      </ul>
      <div className="position-relative mb-2">
        <img src="/images/monaco.jpeg" className="w-100" />
        <h1 className="position-absolute wd-nudge-up text-white">
          Race Standings
        </h1>
      </div>
      <RaceStandings />
      {/* <SpeedSummaryList /> */}
    </div>
  );
}

export default ExploreScreen;
