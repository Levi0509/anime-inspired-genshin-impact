import React, { Component } from "react";
import "./Styles.css";
import Sparks from "./Images/Sparks.png";

export default class MobileCarousal extends Component {
  render() {
    return (
      <div className="SlidesTrgMob">
        <div className="RibbonMob">
          <img src={`https://i.ibb.co/${this.props.Symbols}.png `} alt="Logo" />
        </div>
        <div className="dataMob">
          <div className="NameMainMob">
            <div className="lineBoldMob"></div>
            <h1 className="title">{this.props.Name}</h1>
          </div>
          <h1>{Audio}</h1>
          <div className="AbtMob">
            <img src={`https://i.ibb.co/${this.props.Quote}.png`} alt="" />
          </div>
          <img
            className="defImageMob"
            src={`https://i.ibb.co/${this.props.image}.png `}
            alt={this.props.Name}
          />
        </div>
        <div className="SparksMob">
          <img src={Sparks} alt="" />
        </div>
        <div className="floatMob">
          <div className="roleSectionMob">
            <div className="material-icons">&#xe5de;&#xe5de;&#xe5de;</div>
            <b className="roleMob">CHARACTER INTRO</b>
          </div>
          <h2 className="nameShortMob">
            <span className="mMob">M</span>ONDSTADT
          </h2>
        </div>
      </div>
    );
  }
}
