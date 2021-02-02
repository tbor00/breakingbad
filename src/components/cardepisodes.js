import React from "react";
import "../styles/cardepisodes.css";

class Cardepisodes extends React.Component {
  render() {
    return (
      <div className="col-xl-4 col-md-6 col-lg-4 col-sm-12">
        <div className="card episodes">
          <div className="card-body">
            <p className="card-text text-black">
              <span className="block">Name: {this.props.name}</span>
              <br />
              <span className="block">Air date: {this.props.airdate}</span>
              <br />
              <span className="block">
                Episode Number: {this.props.episodenumber}
              </span>
              <br />
              <span className="block">Season: {this.props.season}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cardepisodes;
