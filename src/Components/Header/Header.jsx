import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [nav, setNav] = useState(false);
  console.log(mobile);
  return (
    <div className="header d-flex">
      <img src={Logo} alt="" className="logo" />
      <img
        src={Bars}
        alt=""
        className={mobile ? "bars" : "bars"}
        onClick={(e) => setNav(!nav)}
      />

      <ul className={nav ? "nav-menu" : "d-none  nav-menu"}>
        <li onClick={(e) => setNav(false)}>
          <Link to="hero" onClick={(e) => setNav(false)}>
            Home
          </Link>
        </li>
        <li onClick={(e) => setNav(false)}>
          {" "}
          <Link
            to="programs"
            span={true}
            smooth={true}
            onClick={(e) => setNav(false)}
          >
            Programs
          </Link>
        </li>
        <li onClick={(e) => setNav(false)}>
          {" "}
          <Link
            to="reasons"
            span={true}
            smooth={true}
            onClick={(e) => setNav(false)}
          >
            Why Us
          </Link>
        </li>
        <li onClick={(e) => setNav(false)}>
          <Link
            to="testimonials"
            span={true}
            smooth={true}
            onClick={(e) => setNav(false)}
          >
            Testimonials
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
}

export default Header;
