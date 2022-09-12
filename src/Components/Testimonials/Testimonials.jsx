import React, { useState } from "react";
import "./testimonials.css";
import { TestimonialsData } from "./TestimonialData";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";
import { motion } from "framer-motion";

function Testimonials() {
  const [selected, setSelected] = useState(0);
  const transition = { type: "spring", duration: 3 };
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
        <motion.div
          initial={{ right: "14rem" }}
          whileInView={{ right: "9rem" }}
          transition={transition}
        ></motion.div>
        <motion.div
          initial={{ right: "3rem" }}
          whileInView={{ right: "7rem" }}
          transition={transition}
        ></motion.div>
        <motion.img
          src={TestimonialsData[selected].image}
          alt=""
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        />
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
