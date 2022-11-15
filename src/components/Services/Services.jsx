import React from "react";
import TimeIcon from "../../assets/time.svg";
import CodeIcon from "../../assets/code.svg";
import ResponsiveIcon from "../../assets/allSizes.svg";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <span className="tagline">Why Fiber?</span>
      <h2 className="service-title">
        A good portfolio means good <br />
        employability
      </h2>

      <div className="service-column">
        <div className="service-group">
          <img src={TimeIcon} alt="icon" />
          <h3 className="heading">Build in minutes</h3>
          <p className="text">
            With a selection of premade templates, <br />
            you ccan build out a portfolio in less than <br />
            10 minutes
          </p>
        </div>
        <div className="service-group">
          <img src={CodeIcon} alt="icon" />
          <h3 className="heading">Build in minutes</h3>
          <p className="text">
            With a selection of premade templates, <br />
            you ccan build out a portfolio in less than <br />
            10 minutes
          </p>
        </div>
        <div className="service-group">
          <img src={ResponsiveIcon} alt="icon" />
          <h3 className="heading">Build in minutes</h3>
          <p className="text">
            With a selection of premade templates, <br />
            you ccan build out a portfolio in less than <br />
            10 minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
