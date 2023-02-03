import React from "react";
import HomePageImg from "../assets/img/HeroImg.png";
import Specials from "../pages/Specials";
import CallToAction from "./CallToAction";

export default function HomePage() {
  return (
    <>
      <div className="HomePage d-flex space-between text-align-left align-items-center">
        <div className="row HomePage--LeftPane">
          <h1 className="Heading HomePage--Heading">
            Little Lemon <br />
            <span className="Subheading HomePage--Subheading">Chicago</span>
          </h1>
          <p className="HomePage--p">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <CallToAction />
        </div>
        <div className="row HomePage--RightPane">
          <img src={HomePageImg} alt="Homepage Img" className="HomePage--Img" />
        </div>
      </div>
      <Specials />
    </>
  );
}
