import React from "react";
import Avatar1 from "../../assets/User Avatar.svg";
import Avatar2 from "../../assets/User Avatar 2.svg";
import Avatar3 from "../../assets/User Avatar 32.svg";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-group">
        <div className="bio">
          <img src={Avatar1} alt="profile image" />
          <div className="name">
            <h3 className="heading">Sarah Andrews</h3>
            <span className="info">$100k in revenue</span>
          </div>
        </div>
        <p className="text">
          Setting up my portfolio with Fiber took no <br />
          more than 10 minutes. Since then, my <br />
          portfolio has attracted a lot of clients and <br />
          made me more than $100k
        </p>
        <button id="cta-portfolio" className="cta-btn">
          View Sarah's Portfolio
        </button>
      </div>
      <div className="testimonial-group">
        <div className="bio">
          <img src={Avatar2} alt="profile image" />
          <div className="name">
            <h3 className="heading">Sarah Andrews</h3>
            <span className="info">$100k in revenue</span>
          </div>
        </div>
        <p className="text">
          Setting up my portfolio with Fiber took no <br />
          more than 10 minutes. Since then, my <br />
          portfolio has attracted a lot of clients and <br />
          made me more than $100k
        </p>
        <button id="cta-portfolio" className="cta-btn">
          View Sarah's Portfolio
        </button>
      </div>
      <div className="testimonial-group">
        <div className="bio">
          <img src={Avatar3} alt="profile image" />
          <div className="name">
            <h3 className="heading">Sarah Andrews</h3>
            <span className="info">$100k in revenue</span>
          </div>
        </div>
        <p className="text">
          Setting up my portfolio with Fiber took no <br />
          more than 10 minutes. Since then, my <br />
          portfolio has attracted a lot of clients and <br />
          made me more than $100k
        </p>
        <button id="cta-portfolio" className="cta-btn">
          View Sarah's Portfolio
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
