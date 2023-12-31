import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/morsalniyaz/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/MorsalN" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://medium.com/@morsaln" target="_blank" rel="noreferrer">
        <FaMedium />
      </a>
    </div>
  );
};

export default HeaderSocials;
