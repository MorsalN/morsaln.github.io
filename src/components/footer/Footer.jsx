import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        MORSAL
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
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

      <div className="footer__copyright">
        <small>&copy; Morsal Niyaz. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
