import React from "react";
import WhatsHappening from "./whats-happening";
import { useSelector } from "react-redux";

function HomeScreen() {
  const { currentUser } = useSelector((state) => state.users);
  return (
    <div>
      <h1>Home</h1>
      {!currentUser && (
        <WhatsHappening />
      )};
      {/* <NextRace /> */}
    </div>
  );
}

export default HomeScreen;
