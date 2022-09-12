import React from "react";
import "./footer.css";
import Github from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";
import Logo from "../../assets/logo.png";
function Footer() {
  return (
    <div className="footer footer-container">
      <div className="blur f-blur-1"></div>
      <div className="blur f-blur-2"></div>
      <hr />
      <div className="social-container">
        <img src={Github} alt="" />
        <img src={LinkedIn} alt="" />
        <img src={Instagram} alt="" />
      </div>
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}

export default Footer;
