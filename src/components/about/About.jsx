import React from "react";
import "./about.css";
import Me from "./../../assets/me-pic4.avif";
import { FaAward } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
import { FaRegFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about_me-container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={Me} alt="About" />
            </div>
          </div>
          <div className="about__me-description">
            <p>
              More info for about me! More info for about me!More info for about
              me!More info for about me!More info for about me!More info for
              about me!More info for about me!
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Connect
            </a>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className="about__card">
              <TbSchool className="about__icon" />
              <h5>Education</h5>
              <small>
                <strong>Lighthouse Labs</strong> | Diploma - Full Stack
                Development
              </small>
              <br />
              <small>
                <strong>BCIT</strong> | Advanced Diploma - GIS
              </small>
              <br />
              <small>
                <strong>UBC</strong> | BSc - Environmental Science
              </small>
            </article>
            <article className="about__card">
              <FaRegFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
