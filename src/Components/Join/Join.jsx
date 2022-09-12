import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./join.css";

function Join() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0rg8e87",
        "template_maazq4a",
        form.current,
        "GFbMIoPaM7-o57yaz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="join d-flex">
      <div className="j-left">
        <hr />
        <span>
          <span className="stroke-text">Ready To</span> Level Up
        </span>
        <span>
          Your Body
          <span className="stroke-text"> With Us</span>
        </span>
      </div>
      <div className="j-right">
        <form
          action=""
          className="email-container"
          ref={form}
          onSubmit={sendEmail}
        >
          <input type="email" placeholder="Enter You Email Here" name="email" />
          <button className="btn j-btn" type="submit">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
