import React, { useState, useEffect } from "react";
import EyeIcon from "../../assets/hide password.svg";
import { Link } from "react-router-dom";
import { images } from "../../data/images";
import "./SignUp.css";

const SignUp = () => {
  const [position, setPosition] = useState(0);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    let autoPlay =
      play &&
      setTimeout(() => {
        setPosition(position === images.length - 1 ? 0 : position + 1);
      }, 3000);
  });

  return (
    <div className="signup">
      <div className="signup-left">
        <Link to="/">Back</Link>
        <form action="">
          <div id="logo">Fiber</div>
          <h1 className="header">Create your Fiber account</h1>

          <div className="form-group">
            <label htmlFor="full-name">Your Name </label>
            <input
              type="text"
              name="fullname"
              id="full-name"
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="At least 8 characters"
            />

            <span className="eye-icon">
              <img src={EyeIcon} alt="eye icon" />
            </span>
          </div>

          <div className="terms">
            <input type="checkbox" name="checkbox" id="checkbox" />
            By creating an account on Fiber, you agree to the{" "}
            <a href="#t" id="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#t" id="underline">
              Conditions
            </a>
            .
          </div>

          <button className="cta-form" type="submit">
            Create Account
          </button>

          <div className="signin">
            <p className="login-option">
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
      <div className="signup-right">
        <div
          className="carousel"
          onMouseEnter={() => {
            setPlay(false);
            clearTimeout(autoPlay);
          }}
          onMouseLeave={() => setPlay(true)}
        >
          {images.map((img, index) => {
            return (
              <div
                key={index}
                className={
                  index === position ? "carousel-card active" : "carousel-card"
                }
              >
                <img src={img.image} alt="signup image" />
              </div>
            );
          })}
        </div>

        <div className="carousel-text">
          <h2 className="subtitle">Unparallelled Templates</h2>
          <p className="text">
            Crafted by a team of professional designers, our <br />
            templates are unparalleled in the market.
          </p>
        </div>
        <div className="carousel-dots">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={index === position ? "dot active" : "dot"}
                onClick={() => setPosition(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
