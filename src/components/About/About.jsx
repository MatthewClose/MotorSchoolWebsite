import React from "react";
import "./About.css";
import Billy_car from "../../assets/about-billy.jpg";
import { motion } from "framer-motion";

const About = () => {
  const transition = { type: "spring", duration: 2 };
  return (
    <div className="about">
      <div className="left-a">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={Billy_car}
          alt=""
        />
      </div>
      <div className="right-a">
        <span>About Billy Hughes</span>
        <span>
          Craigavon and Lurgan driving lessons. Been a driving instructor for
          the past 21 years.
        </span>
        <span>
          I have taught over 1600 pupils driving skills for life and put them
          through their driving tests
        </span>
        <span>
          Manual and Automatic instruction available, list of prices available
          on request.
        </span>
        <span>-------</span>
        <span>Billy Hughes</span>
        <span>Billy Hughes School of Motoring</span>
      </div>
    </div>
  );
};

export default About;
