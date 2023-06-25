import React from "react";
import WhatsHappening from "./whats-happening";
import { useSelector } from "react-redux";
import * as speedsService from "../speeds-service";
//import SpeedList from ??

function HomeScreen() {
  const { currentUser } = useSelector((state) => state.users);
  return (
    <div>
      <h1 className="text-danger fw-bold" style={{ fontFamily: "Helvetica" }}>Home</h1>
      {!currentUser && (
        <WhatsHappening />
      )};
      {/* <SpeedList/> */}
    </div>
  );
}

export default HomeScreen;
