import React from "react";
import Star from "../../assets/star.svg";
import Checkmark from "../../assets/Checkmark.svg";
import Illustration from "../../assets/hero-Illustration.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="review">
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />

          <span>Rated 4.8/5 (243 reviews)</span>
        </div>
        <h1 className="title">
          Create your portfolio <br />
          in minutes.
        </h1>
        <p className="subtitle">
          With Fiber, you can setup your own personal portfolio in minutes{" "}
          <br />
          with dozens of premade, beautiful templates.
        </p>
        <div className="hero-cta">
          <button>Start Free Trial</button>
          <a href="view" id="underline">
            View Examples
          </a>
        </div>
        <div className="details">
          <span>
            <img src={Checkmark} alt="checkmark" />
            No Credit Card Required
          </span>
          <span>
            <img src={Checkmark} alt="checkmark" />
            10 Free Templates
          </span>
        </div>
      </div>
      <div className="hero-right">
        <img src={Illustration} alt="3d illustratyion" />
      </div>
    </div>
  );
};

export default Hero;
