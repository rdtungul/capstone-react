import React from "react";
import HeroImage from "../assets/img/HeroImg.png";

export default function Main() {
  return (
    <div>
      <main>
        <div className="mainContent">
          <h1 className="heroTitle">
            Little Lemon <br />
            <p>Chicago</p>
          </h1>

          <p className="mainText">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="reserveButton">Reserve a Table</button>
        </div>
        <div className="mainImageContainer">
          <img className="mainImage" src={HeroImage} alt="logo" />
        </div>
      </main>
    </div>
  );
}
