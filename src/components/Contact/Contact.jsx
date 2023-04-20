import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_src16hq",
        "template_vzuuqhh",
        form.current,
        "NOK25UwLLL35UOu4A"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          document.getElementById("form").reset();
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <div className="Contact" id="Contact-us">
      <div className="left-c">
        <span>Contact Billy Hughes</span>
        <span>
          5 Ashgrove close, <br></br> Craigavon BT67 9BT, <br></br> United
          Kingdom
        </span>
        <span>
          Mobile: <a href="tel:+44 793215684">+44 793215684</a>{" "}
        </span>
        <span>
          Email: <a href="mailto: billyh147@yahoo.com">billyh147@yahoo.com</a>
        </span>
      </div>

      <div className="right-c">
        <span>Contact Form</span>
        <span>
          Send us a message and we'll get back to you as soon as we can!
        </span>
        <form ref={form} id="form" onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" required />
          <label>Email Address</label>
          <input type="email" name="user_email" required />
          <label>Your Message</label>
          <textarea name="message" required />
          <input className="btn-c" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
