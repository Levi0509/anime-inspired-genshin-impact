import React, { Component } from "react";
import "./Styles.css";
import Sparks from "./Images/Sparks.png";

export default class DefaultCarousal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="SlidesTrg">
        <div className="Ribbon">
          <img src={`https://i.ibb.co/${this.props.Symbols}.png `} alt="Logo" />
        </div>
        <div className="data">
          <div className="NameMain">
            <div className="lineBold"></div>
            <h1 className="title">{this.props.Name}</h1>
          </div>
          <h1>{Audio}</h1>
          <div className="Abt">
            <div className="Abtabt">
              <span className="abt">{this.props.About}</span>
            </div>
          </div>
          <img
            className="none"
            src={`https://i.ibb.co/${this.props.image}.png `}
            alt={this.props.Name}
            id="CharImg"
          />
        </div>
        <div className="Sparks">
          <img src={Sparks} alt="" />
        </div>
        <div className="imgTiles"></div>
        <div className="float">
          <div className="roleSection">
            <div className="material-icons">&#xe5de;&#xe5de;&#xe5de;</div>
            <b className="role">CHARACTER INTRODUCTION</b>
          </div>
          <h2 className="nameShort">
            <span className="m">M</span>ONDSTADT
          </h2>
        </div>
      </div>
    );
  }
}
