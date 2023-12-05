import React from "react";
import "./contact.css";
import { MdMailOutline } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const email = process.env.REACT_APP_CONTACT_EMAIL;
const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    // Resetting the Send Message button
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            {/* <h5>email is: {email}</h5> */}
            <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Morsal Niyaz</h5>
            <a
              href="https://www.linkedin.com/in/morsalniyaz/"
              target="_blank"
              rel="noreferrer"
            >
              Connect
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
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
