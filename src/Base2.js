import React from "react";
import MondstadtNight from "./Audio/Mondstadt Theme (Night).mp3";
import MondstadtDusk from "./Audio/Dusk in Mondstadt.mp3";
import Mobile from "./Mobile";
import Rotate from "./Images/Rotate.png";

export default function Base2() {
  const PageCheck = () => {
    if (window.innerWidth > 420) {
      window.location.replace("/Default");
    }
  };
  var date = new Date();
  var hrs = date.getHours();

  const Time = () => {
    if (hrs < 18 && hrs >= 5) {
      return (
        <audio autoPlay="autoplay" loop="loop" id="audio-id">
          <source src={MondstadtDusk} type="audio/mpeg" />
          <h1>{hrs}</h1>
          Your browser does not support the audio element.
        </audio>
      );
    } else {
      return (
        <audio autoPlay="autoplay" loop="loop" id="audio-id">
          <source src={MondstadtNight} type="audio/mpeg" />
          <h1>{hrs}</h1>
          Your browser does not support the audio element.
        </audio>
      );
    }
  };

  return (
    <div className="Base_page" onLoad={PageCheck}>
      <Time />
      <Mobile />
      <div className="RotateScrn">
        <img src={Rotate} alt="" />
      </div>
    </div>
  );
}
