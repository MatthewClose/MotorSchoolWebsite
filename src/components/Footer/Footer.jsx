import React from "react";
import "./Footer.css";
import Email from "../../assets/mail.png";
import Mobile from "../../assets/mobile.png";
import ExtraLearning from "../../assets/extraLearn.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="date-time">
          <span>Monday - Friday</span>
          <span>7:30 am - 5:00 pm</span>
          <span>Saturday & Sunday</span>
          <span>Closed</span>
        </div>
        <div className="social-links">
          <img
            onClick={() => window.open("mailto: billyh147@yahoo.com", "_blank")}
            src={Email}
            alt="Email"
          />
          <p>Email</p>
          <br />
          <img
            onClick={() => window.open("tel:+44 793215684", "_blank")}
            src={Mobile}
            alt="Phone"
          />
          <p>Phone</p>
          <br />
          <img
            onClick={() =>
              window.open("https://linktr.ee/billyhughesmotorschool", "_blank")
            }
            src={ExtraLearning}
            alt="Extra Learning Resources"
          />
          <p>Learning Materials</p>
        </div>
        <div className="logo-f">
          <span>
            Billy Hughes
            <br />
          </span>
          <span> School of Motoring</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
