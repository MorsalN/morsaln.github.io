import React from "react";
import "./services.css";
import { FaCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Developed and published 6 scalable apps in Slack, Box and
                Shopify with the ability to link platforms.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Managed API integrations using oAuth 2.0 for 600,000 users,
                resulting in a smooth user experience.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Created and built an admin report dashboard to provide real-time
                data analysis for decision-making.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Integrated server-side API endpoints for Google Drives and
                Dropbox, resulting in 30% more traffic.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Implemented projects for better usability and thoughtfully wired
                for optimal functionality, resulting in +15% user engagement.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Used Figma to design and develop and various UI/UX projects,
                making them responsive for the release dates.{" "}
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Created and desgined dynamic button, on Figma, used across
                company's website
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Worked directly with UX Designer to gain foundational knowledge
                when developing.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Other</h3>
          </div>

          <ul className="service__list">
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Delivered high-quality technical support and customer service to
                end-users through chats and Zoom.
              </p>
            </li>
            <li>
              <FaCheck className="service__list-icon" />
              <p>
                Utilized ESRI's products such as ArcGIS Pro/Online to query and
                observe updates on GeoBC's dashboard.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
