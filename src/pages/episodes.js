import React, { useState, useEffect } from "react";
import "../styles/global.css";
import Cardepisodes from "../components/cardepisodes.js";
import { Link } from "react-router-dom";

const Episodes = () => {
  const [episodes, Setepisodes] = useState();

  const Getepisodes = async () => {
    const url = "https://breakingbadapi.com/api/episodes?series=Breaking+bad";
    const response = await fetch(url);
    const data = await response.json();
    Setepisodes(data);
  };

  useEffect(() => {
    Getepisodes();
  }, []);

  return (
    <React.Fragment>
      <div className="headerepisodes">
        <div>
          <h2 className="text-center">All episodes</h2>
          <Link to="/">
            <p className=" text-center ctae">Back to HOME</p>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {episodes &&
            episodes.map((e) => (
              <Cardepisodes
                key={e.episode_id}
                airdate={e.air_date}
                episodenumber={e.episode}
                season={e.season}
                name={e.title}
              />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Episodes;
