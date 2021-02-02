import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import "../styles/global.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav
        id="menu"
        className="navbar navbar-expand-lg navbar-black  fixed-top"
      >
        <Link to="/">
          <p className="navbar-brand">
            <img src={Logo} alt="" className="logo" />
          </p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <Link to="/" className="flex">
              <p className="nav-link active ">
                Home <span className="sr-only">(current)</span>
              </p>
            </Link>
            <Link to="/episodes" className="flex">
              <p className="nav-link ">Episodes</p>
            </Link>
            <Link to="/characters" className="flex">
              <p className="nav-link ">Characters</p>
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
