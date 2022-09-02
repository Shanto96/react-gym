import React from "react";
import "./Programs.css";
import Card from "../Card/Card";
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
      <div className="p-cards df-flex">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Programs;
