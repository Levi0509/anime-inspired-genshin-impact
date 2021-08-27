/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Socials.css";

export default function Socials() {
  return (
    <div class="socialMedia">
      <input type="checkbox" className="socialToggle" />
      <div className="socialIcon">
        <div className="socialsHor">
          <ul>
            <li>
              <a
                href="#"
                onClick={() => {
                  alert("Thank You 😊");
                }}
                className="ActiveSocials"
              >
                <img
                  src="https://img.icons8.com/color/24/000000/filled-like.png"
                  alt=""
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.tiktok.com/@levi_0509?lang=en"
                className="ActiveSocials"
              >
                <img
                  src="https://img.icons8.com/ios/100/000000/tiktok--v1.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mr.__no.body/"
                className="ActiveSocials"
              >
                <img
                  src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="socialsVer">
          <ul class="list-unstyled">
            <li>
              <a href="#" className="InactiveSocials">
                <img
                  src="https://img.icons8.com/material-outlined/24/000000/youtube--v1.png"
                  alt=""
                />
              </a>
            </li>

            <li>
              <a href="#" className="InactiveSocials">
                <img
                  src="https://img.icons8.com/material-outlined/48/000000/github.png"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
