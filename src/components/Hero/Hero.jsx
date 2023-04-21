import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/car2.png";
// import NumberCounter from "number-counter";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad"></div>
        {/* Hero text */}
        <div className="hero-text">
          <div>
            <span className="hero-text-red">Best Driving Experience</span>
          </div>
          <div>
            <span>Friendly helpful Atmosphere</span>
          </div>
          <div>
            <span>
              Craigavon and Lurgan area based driving instructor with 20+ years
              of experience.
              <br></br>Get in touch today!
            </span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">
            <Link to="reasons" smooth={true} spy={true}>
              Find out More!
            </Link>
          </button>
        </div>

        {/* experience figures */}
        <div className="figures">
          <div>
            <span>
              20+
              {/* <NumberCounter end={20} start={5} delay={2} preFix="+" /> */}
            </span>
            <span>Years Experience</span>
          </div>
          <div>
            <span>
              1600+
              {/* <NumberCounter end={1600} start={1400} delay={4} preFix="+" /> */}
            </span>
            <span>Pupils Taught and Passed</span>
          </div>
          <div>
            <span>
              70%+
              {/* <NumberCounter
                end={70}
                start={30}
                delay={2}
                postFix="%"
                preFix="+ "
              /> */}
            </span>
            <span>First time pass rate</span>
          </div>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">
          <Link to="Contact" smooth={true} spy={true}>
            Contact
          </Link>
        </button>

        <img className="hero-image" src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
