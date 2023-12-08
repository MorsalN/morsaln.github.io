import React from "react";
import "./portfolio.css";
import IMG1 from "./../../assets/silk.jpeg";
import IMG2 from "./../../assets/condo1.png";
import IMG3 from "./../../assets/food1.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Silk Carpet Business Website for Client",
    github: "https://github.com/MorsalN/silk",
    demo: "https://www.samarkandsilkcarpets.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Condo Books",
    github: "https://github.com/MorsalN/bookingCondoAmenities",
    // demo: "https://github.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Uber Eats Clone",
    github: "https://github.com",
    // demo: "https://github.com",
  },
];

const Portfolio = ({ demo }) => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <div>
                  {demo && (
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
