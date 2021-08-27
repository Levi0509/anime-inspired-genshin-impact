import React from "react";
import MondstadtNight from "./Audio/Mondstadt Theme (Night).mp3";
import MondstadtDusk from "./Audio/Dusk in Mondstadt.mp3";
import Default from "./Default";
import Socials from "./Socials";

export default function Base() {
  const PageCheck = () => {
    if (window.innerWidth < 420) {
      window.location.replace("/Mobile");
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
      <Socials />
      <Time />
      <Default />
    </div>
  );
}
