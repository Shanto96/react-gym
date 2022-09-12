import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import Heart from "../../assets/heart.png";
import HeroImg from "../../assets/hero_image.png";
import HeroBack from "../../assets/hero_image_back.png";
import HeartHealth from "../../assets/calories.png";
import { motion } from "framer-motion";
function Hero() {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero d-flex">
      <div className="blur h-blur"></div>
      <div className="h-left">
        <Header />
        <div className="best-add">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "9px" }}
            transition={transition}
            className="add-box"
          ></motion.div>
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
        <motion.div
          className="h-container"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116bpm</span>
        </motion.div>
        <img src={HeroImg} alt="" className="hero-img" />
        <motion.img
          src={HeroBack}
          alt=""
          className="hero-back"
          initial={{ right: "16rem" }}
          transition={transition}
          whileInView={{ right: "20rem" }}
        />

        <motion.div
          className="calory-container"
          initial={{ left: "-5rem" }}
          whileInView={{ left: "-10rem" }}
          transition={transition}
        >
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
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
