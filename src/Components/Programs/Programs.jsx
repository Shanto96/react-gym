import React from "react";
import "./Programs.css";
import Card from "../Card/Card";
import { ProgramsData } from "./prgramData";
import Arrow from "../../assets/rightArrow.png";
function Programs() {
  return (
    <div className="programs">
      <div className="p-heading d-flex">
        <div>
          <span className="stroke-text">Explore</span>
        </div>
        <div>
          <span>Our Programs</span>
        </div>
        <div>
          <span className="stroke-text">To Shape You</span>
        </div>
      </div>

      <div className="p-cards d-flex">
        {ProgramsData.map((program) => {
          return (
            <div className="card">
              {program.img}
              <span className="  ">{program.heading}</span>
              <span className="text"> {program.body}</span>
              <span className="join">
                Join Now <img src={Arrow} alt="" />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Programs;
