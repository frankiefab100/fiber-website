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
          Setting up my portfolio with Fiber took no more than 10 minutes. Since
          then, my portfolio has attracted a lot of clients and made me more
          than $100k
        </p>
        <button id="cta-portfolio" className="cta-btn">
          View Sarah's Portfolio
        </button>
      </div>
      <div className="testimonial-group">
        <div className="bio">
          <img src={Avatar2} alt="profile image" />
          <div className="name">
            <h3 className="heading">Mathew Higgins</h3>
            <span className="info">$20k in revenue</span>
          </div>
        </div>
        <p className="text">
          I have been getting A LOT of leads ever since I used Fiber's premade
          templates, now I just need to work on my case studies and I'll be
          ready to go!
        </p>
        <button id="cta-portfolio" className="cta-btn">
          View Mathew's Portfolio
        </button>
      </div>
      <div className="testimonial-group">
        <div className="bio">
          <img src={Avatar3} alt="profile image" />
          <div className="name">
            <h3 className="heading">Janice Dave</h3>
            <span className="info">$30k in revenue</span>
          </div>
        </div>
        <p className="text">
          I only just started freelancing this year and I have already made more
          than I ever made in my full-time job. The templates are so amazing.
        </p>
        <button id="cta-portfolio" className="cta-btn">
          View Janice's Portfolio
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
