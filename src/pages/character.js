import React, { useState, useEffect } from "react";
import "../styles/global.css";
import Cardcharacters from "../components/cardcharacter";
import { Link } from "react-router-dom";

const Characters = () => {
  const [char, Setchar] = useState();

  const Getchar = async () => {
    const url =
      "https://breakingbadapi.com/api/characters?category=Breaking+bad";
    const response = await fetch(url);
    const data = await response.json();
    Setchar(data);
  };

  useEffect(() => {
    Getchar();
  }, []);

  return (
    <React.Fragment>
      <div className="headercharacter">
        <div>
          <h3 className="text-center">All characters from Breaking Bad</h3>
          <Link to="/">
            <p className="text-center ctae">Back to HOME</p>
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {char &&
            char.map((e) => (
              <Cardcharacters
                key={e.char_id}
                img={e.img}
                name={e.name}
                nickname={e.nickname}
                status={e.status}
                ocupattion={e.occupation}
              />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Characters;
