/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Background from "./Background";
import Slider from "react-slick";
import "./StylesMob.css";
import MobileCarousal from "./MobileCarousal";
import Jean from "./Audio/Jean1.mp3";
import Amber from "./Audio/Amber1.mp3";
import Kaeya from "./Audio/Kaeya1.mp3";
import Diluc from "./Audio/Diluc1.mp3";
import Razor from "./Audio/Razor1.mp3";
import Bennet from "./Audio/Bennet1.mp3";
import Rosaria from "./Audio/Rosaria1.mp3";

export default class Mobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: "",
      images: [
        "fNpxN2M/Jean2",
        "DWD2PJS/Amber2",
        "3BBnVhH/Kaeya2",
        "5YJ3qfq/Diluc2",
        "W0Hsc7V/Razor2",
        "TTVgqhy/Bennet2",
        "G0PQhfQ/Rosaria2",
      ],
      quotes: [
        "0CdtwVS/Jeanq",
        "85119fQ/Amberq",
        "TcJr4th/Kaeyaq",
        "0hx8gs2/Dilucq",
        "b71gmRR/Razorq",
        "fqvQYcX/Bennetq",
        "VVnkhz6/Rosariaq",
      ],
      Symbols: [
        "XVdSNVC/Anemo-2",
        "MM8rLk8/Pyro-2",
        "Ws2zLPM/Cryo-2",
        "MM8rLk8/Pyro-2",
        "tBJh3Vm/Electro-2",
        "MM8rLk8/Pyro-2",
        "Ws2zLPM/Cryo-2",
      ],
      names: ["Jean", "Amber", "Kaeya", "Diluc", "Razor", "Bennet", "Rosaria"],
      AudioFiles: [
        "/static/media/Jean1.b89e8ae9.mp3",
        "/static/media/Amber1.45e10e47.mp3",
        "/static/media/Kaeya1.d4f0be97.mp3",
        "/static/media/Diluc1.8cb6d4f3.mp3",
        "/static/media/Razor1.e310a46e.mp3",
        "/static/media/Bennet1.6c81d265.mp3",
        "/static/media/Rosaria1.2dfa210e.mp3",
      ],
      abouts: [
        "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt. \n She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always.",
        "A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. \n Her amazing mastery of the glider has made her a three-time winner of the Gliding Champion in Mondstadt. \n As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.",
        `In the Knights of Favonius, Kaeya is the most trusted aide for the Acting Grand Master Jean. You can always count on him to solve any intractable problems. 
        Everyone in Mondstadt loves Kaeya, but no one knows what secrets this witty, charming knight has...`,
        "As the wealthiest gentleman in Mondstadt, the ever-dapper Diluc always presents himself as the epitome of perfection. \n But behind the courteous visage burns a zealous soul that has sworn to protect Mondstadt at all costs, allowing him to mercilessly vanquish all who threaten his city.",
        "Some say he is an orphan raised by wolves. Others say he is a wolf spirit in human form.\n He is most at home in the wild, fighting with claw and thunder.\n To this day the wolf boy can be found prowling the forest, where he and his wolf pack hunt to survive using nothing more than their animal instincts.",
        "One of the few young adventurers of the Mondstadt Adventurers' Guild, he is always plagued with inexplicable bad luck. \n He is the only active member of his own adventure group, known as ``Benny's Adventure Team``, after all the other members decided to 'take leave' following a series of unfortunate incidents. As a result, the team is currently on the verge of being dissolved. \n Being unable to break the poor boy's heart, Katheryne of the Adventurers' Guild has kept 'Benny's Adventure Team' on the books, whilst also hiding from him the fact that all the other members have long since officially left the team.",
        "Rosaria, a sister in Mondstadt's Church of Favonius. \n A sister of the church, though you wouldn't know it if it weren't for her attire. An unusual woman with sharp, piercing words and a cold manner. \n Her movements are unpredictable. She often leaves without notifying anyone. She acts with some kind of purpose, but others don't seem to know exactly what she stands for...",
      ],
      imageIndex: 0,
    };
  }
  handleIndex = (next) => {
    this.setState({
      imageIndex: next,
    });
  };

  render() {
    const NextArrow = ({ onClick }) => {
      return (
        <div className="Arrow next" onClick={onClick}>
          <div className="material-icons">&#xe5cc;</div>
        </div>
      );
    };
    const PrevArrow = ({ onClick }) => {
      return (
        <div
          className="Arrow prev"
          onClick={() => {
            onClick();
          }}
        >
          <div className="material-icons">&#xe5cb;</div>
        </div>
      );
    };
    const AudioReturn = ({ onClick }) => {
      return (
        <audio autoPlay="autoplay" id="audio-id">
          <source
            src={this.state.AudioFiles[this.state.imageIndex]}
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      );
    };
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      lazyLoad: false,
      speed: 1000,
      slidesToShow: 1,
      centerMode: true,
      centerPaddiing: 0,
      nextArrow: <NextArrow onClick={this.AudioReturn} />,
      prevArrow: <PrevArrow onClick={this.AudioReturn} />,
      beforeChange: (current, next) => this.handleIndex(next),
    };
    console.log(
      { Jean },
      { Kaeya },
      { Amber },
      { Diluc },
      { Bennet },
      { Rosaria },
      { Razor }
    );

    return (
      <div className="bakabakabakaMob" onLoad={this.AudioReturn}>
        <div className="backgroundDynamic">
          <Background />
          <AudioReturn />
        </div>
        <div className="bakabaka">
          <Slider {...settings}>
            {this.state.images.map((img, id) => (
              <div
                className={
                  id === this.imageIndex ? "slide activeSlide" : "slide"
                }
                id="SLIDE"
              >
                <MobileCarousal
                  image={img}
                  About={this.state.abouts[this.state.imageIndex]}
                  Name={this.state.names[this.state.imageIndex]}
                  Symbols={this.state.Symbols[this.state.imageIndex]}
                  Quote={this.state.quotes[this.state.imageIndex]}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
