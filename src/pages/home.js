import React, { useState } from "react";
import "../styles/global.css";
import Cardcharacters from "../components/cardcharacter";
import { Link } from "react-router-dom";

const Home = () => {
  const [findChar, SetChar] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    let name = e.target.value;
    if (name == "") {
      console.log("No hay datos");
    } else {
      getChar(name);
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
  };

  const getChar = async (name) => {
    let url = `https://breakingbadapi.com/api/characters?name=${name}`;
    const response = await fetch(url);
    const data = await response.json();
    SetChar(data);
    console.log(data);
  };

  return (
    <React.Fragment>
      <div className="headerhome">
        <div className="fv">
          <h3 className="text-left">Find your favorite character</h3>
          <p>Your favorite character is here</p>
          <a href="#handsbm" id="border">
            Find
          </a>
        </div>
      </div>
      <div className="infohome">
        <form id="handsbm" onSubmit={HandleSubmit}>
          <input
            type="text"
            className="mt-5"
            id="find"
            placeholder="Find your favorite character"
            required
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="container">
        <div className="row">
          {findChar &&
            findChar
              .slice(0, 3)
              .map((element) => (
                <Cardcharacters
                  img={element.img}
                  key={element.char_id}
                  nickname={element.nickname}
                  name={element.name}
                  ocupattion={element.occupation}
                  status={element.status}
                />
              ))}
        </div>
      </div>

      <div className="allepisodes container">
        <Link to="/episodes">
          <p className="fv text-center ctae">Visit all episodes</p>
        </Link>
      </div>

      <div className="allcharacters container">
        <Link to="/characters">
          <p className="fv text-center ctae">Visit all characters</p>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Home;
