import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-group">
        <h3 id="header">Fiber</h3>
        <p className="info">
          With Fiber, you can setup your own personal <br />
          portfolio in minutes with dozens of premade, <br />
          beautiful templates.
        </p>
      </div>
      <div className="footer-group">
        <h3 id="header">Sitemap</h3>
        <ul className="footer-links">
          <li>
            <a href="link">Homepage</a>
          </li>
          <li>
            <a href="link">Pricing</a>
          </li>
          <li>
            <a href="link">Testimonials</a>
          </li>
          <li>
            <a href="link">Features</a>
          </li>
        </ul>
      </div>
      <div className="footer-group">
        <h3 id="header">Resources</h3>
        <ul className="footer-links">
          <li>
            <a href="link">Support</a>
          </li>
          <li>
            <a href="link">Contact</a>
          </li>
          <li>
            <a href="link">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="footer-group">
        <h3 id="header">Company</h3>
        <ul className="footer-links">
          <li>
            <a href="link">About</a>
          </li>
          <li>
            <a href="link">Customers</a>
          </li>
          <li>
            <a href="link">Blog</a>
          </li>
        </ul>
      </div>
      <div className="footer-group">
        <h3 id="header">Portfolios</h3>
        <ul className="footer-links">
          <li>
            <a href="link">Sarah Andrews</a>
          </li>
          <li>
            <a href="link">Mathew Higgins</a>
          </li>
          <li>
            <a href="link">Janice Dave</a>
          </li>
        </ul>
      </div>

      <div className="attribution">Made with ❤ in the Netherlands</div>
    </div>
  );
};

export default Footer;
