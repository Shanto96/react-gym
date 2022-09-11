import React from "react";
import "./plans.css";
import { plansData } from "./PlansData";
import WhiteTick from "../../assets/whiteTick.png";
import rightArrow from "../../assets/rightArrow.png";
function Plans() {
  return (
    <div className="plans">
      <div className="p-heading d-flex">
        <div>
          <span className="stroke-text">READY TO START</span>
        </div>
        <div>
          <span>YOUR JOURNEY </span>
        </div>
        <div>
          <span className="stroke-text">WITH US</span>
        </div>
      </div>
      <div className="plan-cards">
        {plansData.map((plan, i) => (
          <div className="p-card" key={i}>
            {plan.icon}
            <span>{plan.title}</span>
            <span>$ {plan.price} </span>
            <div className="feture">
              {plan.features.map((feature, i) => (
                <div className="plan" key={i}>
                  <img src={WhiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="see-more">
              See More Benefits <img src={rightArrow} alt="" />
            </div>
            <button className="btn"> Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
