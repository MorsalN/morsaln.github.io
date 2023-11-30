import React from "react";
import "./contact.css";
import { MdMailOutline } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

const email = process.env.CONTACT_EMAIL;

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMailOutline />
            <h4>Email</h4>
            <h5>{email}</h5>
            <a href="mailto:" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin />
            <h4>Linkedin</h4>
            <h5>Morsal Niyaz</h5>
            <a href="https://www.linkedin.com/in/morsalniyaz/" target="_blank">
              Connect
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
