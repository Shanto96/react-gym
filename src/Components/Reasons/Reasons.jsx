import React from "react";
import "./reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import Tick from "../../assets/tick.png";
import Adidas from "../../assets/adidas.png";
import Nb from "../../assets/nb.png";
import Nike from "../../assets/nike.png";

function Reasons() {
  return (
    <div className="reasons d-flex">
      <div className="r-left">
        <div className="img-wraper d-flex">
          <div className="img-left">
            {" "}
            <img src={image1} className="w-100" alt="" />
          </div>
          <div className="img-right">
            <div className="top">
              {" "}
              <img src={image2} alt="" className="w-100" />
            </div>
            <div className="button">
              <div className="b-left">
                {" "}
                <img src={image3} alt="" className="w-100 h-100" />
              </div>
              <div className="b-right">
                <img src={image4} alt="" className="w-100 h-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="r-right">
        <span>Some Reasons</span>
        <div className="chose">
          <span className="stroke-text">Why </span>
          <span className="text">Choose Us?</span>
        </div>
        <div className="r-details">
          <div>
            <img src={Tick} alt="" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>{" "}
          <div>
            <img src={Tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>{" "}
          <div>
            <img src={Tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>{" "}
          <div>
            <img src={Tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>

        <span className="partner-text">Our Partners</span>
        <div className="partners">
          <img src={Adidas} alt="" />
          <img src={Nb} alt="" />
          <img src={Nike} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Reasons;
