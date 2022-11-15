import React from "react";
import PageImg from "../../assets/Page Image.png";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="feature">
      <div className="feature-left">
        <h2 className="header">Diversify your portfolio</h2>
        <p className="text">
          Create an even more impressive portfolio by <br />
          creating case studies for your projects. Simply <br />
          follow our step-by-step guide.
        </p>
        <button id="cta-feature" className="cta-btn">
          Start Free Trial
        </button>
      </div>
      <div className="feature-right">
        <img src={PageImg} alt="realestate webpage" />
      </div>
    </div>
  );
};

export default Feature;
