import React from "react";
import WhatsHappening from "./whats-happening";
import { useSelector } from "react-redux";
//import SpeedList from ??

function HomeScreen() {
  const { currentUser } = useSelector((state) => state.users);
  return (
    <div>
      <h1>Home</h1>
      {!currentUser && (
        <WhatsHappening />
      )};
      {/* <SpeedList/> */}
    </div>
  );
}

export default HomeScreen;
