import React, { useState, useEffect } from "react";
import * as speedsService from "../speeds-service";

function HomeScreen() {
  const [speed, setSpeed] = useState("");
  const [allSpeeds, setAllSpeeds] = useState([]);

  useEffect(() => {
    const fetchAllSpeeds = async () => {
      try {
        const speeds = await speedsService.findAllSpeeds();
        setAllSpeeds(speeds);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllSpeeds();
  }, []);

  const handleSpeed = async () => {
    try {
      await speedsService.createSpeed({ speed: speed });
      setSpeed("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Home Screen</h1>
      <textarea
        placeholder="What's happening?"
        className="form-control"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
      ></textarea>
      <button
        onClick={handleSpeed}
        className="btn btn-primary rounded-pill w-100"
      >
        Speed
      </button>
      <pre>{JSON.stringify(allSpeeds, null, 2)}</pre>
    </div>
  );
}

export default HomeScreen;
