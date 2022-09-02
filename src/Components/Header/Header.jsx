import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
function Header() {
  return (
    <div className="header d-flex">
      <img src={Logo} alt="" className="logo" />

      <ul className="nav-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
}

export default Header;
