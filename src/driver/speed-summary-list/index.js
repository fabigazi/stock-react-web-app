import React from "react";
import speedsArray from "./speeds.json";
import SpeedSummaryItem from "./speed-summary-item";

const SpeedSummaryList = () => {
  return (
    <ul className="list-group">
      {speedsArray.map((speed) => (
        <SpeedSummaryItem key={speed._id} speed={speed} />
      ))}
    </ul>
  );
};
export default SpeedSummaryList;
