import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "./../../assets/me-gif4.gif";
import HeaderSocials from "./HeaderSocials";
import { useState } from "react";

const Header = () => {
  const [activeScroll, setActiveScroll] = useState("#");
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Morsal Niyaz</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="" className="img__me" />
        </div>

        <a
          href="#contact"
          onClick={() => setActiveScroll("#contact")}
          className={
            activeScroll === "#contact" ? "active scroll__down" : "scroll__down"
          }
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
