import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import Heart from "../../assets/heart.png";
import HeroImg from "../../assets/hero_image.png";
import HeroBack from "../../assets/hero_image_back.png";
import HeartHealth from "../../assets/calories.png";
function Hero() {
  return (
    <div className="hero d-flex">
      <div className="h-left">
        <Header />
        <div className="best-add">
          <div className="add-box"></div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text d-flex">
          <div>
            <span className="stroke-text">Shape </span> <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className="span">
            <span>
              In here we will help you to shape your ideal body and live up your
              life to the fullest
            </span>
          </div>
        </div>

        <div className="figures  d-flex">
          <div>
            <span className="count">+140</span>
            <span className="text">expert coaches</span>
          </div>
          <div>
            <span className="count">+978</span>
            <span className="text">members joined</span>
          </div>
          <div>
            <span className="count">+50</span>
            <span className="text">fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons d-flex">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="h-right">
        <button className="btn h-right-btn">Join Now</button>
        <div className="h-container">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116bpm</span>
        </div>
        <img src={HeroImg} alt="" className="hero-img" />
        <img src={HeroBack} alt="" className="hero-back" />

        <div className="calory-container">
          <img src={HeartHealth} alt="" className="hero-health" />
          <div className="calory-text">
            <span>
              Calories <br />
              Burned
            </span>
            <span>
              220 <br /> kcal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
