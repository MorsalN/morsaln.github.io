import React from "react";
import "./about.css";
import Me from "./../../assets/me-pic.png";
import { FaAward } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
import { FaRegFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>
        <div className="about__content"></div>
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>2+ Years</small>
          </article>
          <article className="about__card">
            <TbSchool className="about__icon" />
            <h5>Education</h5>
            <small>Lighthouse Labs - Full Stack Web Development</small>
            <small>BCIT - Full Stack Web Development</small>
            <small>UBC - </small>
          </article>
          <article className="about__card">
            <FaRegFolderOpen className="about__icon" />
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
        </div>
        <p>More info for about me! </p>

        <a href="#contact" className="btn btn-primary">
          Let's Connect
        </a>
      </div>
    </section>
  );
};

export default About;
