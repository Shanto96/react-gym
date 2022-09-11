import React, { useState } from "react";
import "./testimonials.css";
import { TestimonialsData } from "./TestimonialData";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";

function Testimonials() {
  const [selected, setSelected] = useState(0);
  const tLength = TestimonialsData.length;
  return (
    <div className="testimonials">
      <div className="t-left">
        <span>Testimonials</span>
        <span className="stroke-text">What They</span>
        <span>Say About Us</span>
        <span>{TestimonialsData[selected].text}</span>
        <span>
          <span className="t-user">{TestimonialsData[selected].name} </span> -{" "}
          {TestimonialsData[selected].status}
        </span>
      </div>
      <div className="t-right">
        <div></div>
        <div></div>
        <img src={TestimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            src={leftArrow}
            alt=""
            onClick={(e) =>
              selected == 0
                ? setSelected(tLength - 1)
                : setSelected((s) => s - 1)
            }
          />
          <img
            src={rightArrow}
            alt=""
            onClick={(e) =>
              selected == tLength - 1
                ? setSelected(0)
                : setSelected((s) => s + 1)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
