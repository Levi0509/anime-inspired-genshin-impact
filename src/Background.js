import React from "react";
import Slider from "react-slick";
import "./Styles.css";

export default function Background() {
  const imageUrlArrayDay = [
    "jMtMYt5/Mondstadt-Day1.jpg",
    "3NVPypy/Mondstadt-Day2.jpg",
    "27nvN8r/Mondstadt-Day3.png",
    "brD9F1S/Mondstadt-Day4.jpg",
  ];
  const imageUrlArrayNight = [
    "p1BqDyL/Mondstadt-Night1.png",
    "VxZVhBk/Mondstadt-Night3.png",
    "W2dSfdH/Mondstadt-Night4.png",
  ];

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    centerMode: false,
    nextArrow: false,
    prevArrow: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 15000,
  };
  var date = new Date();
  var hrs = date.getHours();

  const Time2 = () => {
    if (hrs < 18 && hrs >= 6) {
      return (
        <Slider {...settings}>
          {imageUrlArrayDay.map((img, id) => (
            <div className="background">
              <img src={`https://i.ibb.co/${img} `} alt="" />
            </div>
          ))}
        </Slider>
      );
    } else {
      return (
        <Slider {...settings}>
          {imageUrlArrayNight.map((img, id) => (
            <div className="background">
              <img src={`https://i.ibb.co/${img} `} alt="" />
            </div>
          ))}
        </Slider>
      );
    }
  };

  return (
    //     <Slider {...settings}>
    //       {imageUrlArrayDay.map((img, id) => (
    //         <div className="background">
    //           <img src={`https://i.ibb.co/${img} `} alt="" />
    //         </div>
    //       ))}
    //     </Slider>
    <Time2 />
  );
}
