import React from "react";
import Billy_car from "../../assets/Car_Collage.png";
import tick from "../../assets/RedCircleTick.png";
import "./Reasons.css";
const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={Billy_car} alt="" />
      </div>
      <div className="right-r">
        <span>The Best</span>
        <div>
          <span>Expert Driving Lessons</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>over 21+ years experience</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Motorway and driver refresher courses available</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Manual and Automatic instruction available</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>
              Friendly professional driving lessons perfect for nervous and
              anxious drivers
            </span>
          </div>

          <div>
            <img src={tick} alt="" />
            <span>
              Very patient allowing you to hone your driving skills at your own
              pace
            </span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>
              Expert in helping students develop confidence helping you pass the
              driving test with ease
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
