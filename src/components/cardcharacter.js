import React from "react";
import "../styles/cardepisodes.css";

class Cardcharacters extends React.Component {
  render() {
    return (
      <div className="col-xl-4 col-md-6 col-lg-4 col-sm-12">
        <div className="card characteres">
          <img src={this.props.img} className="card-img-top stat" />
          <div className="card-body">
            <p className="card-text text-black">
              <span className="block">Name: {this.props.name}</span>
              <br />
              <span className="block">Nickname: {this.props.nickname}</span>
              <br />
              <span className="block">Ocuppation: {this.props.ocupattion}</span>
              <br />
              <span className="block">Status: {this.props.status}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cardcharacters;
