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
            you can build out a portfolio in less than <br />
            10 minutes
          </p>
        </div>
        <div className="service-group">
          <img src={CodeIcon} alt="icon" />
          <h3 className="heading">Add custom CSS</h3>
          <p className="text">
            Customize your personal portfolio even <br />
            more with ability to add your own <br />
            custom CSS styles.
          </p>
        </div>
        <div className="service-group">
          <img src={ResponsiveIcon} alt="icon" />
          <h3 className="heading">Responsive</h3>
          <p className="text">
            All Fiber templates are fully responsive to <br />
            ensure the experience is seemless <br />
            across all devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
