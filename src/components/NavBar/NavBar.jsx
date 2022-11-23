import React, { useState } from "react";
import Hamburger from "../../assets/Hamburger Menu.svg";
import Close from "../../assets/Close icon.svg";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    document.body.classList.toggle("hidden");
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      <Link to="/">
        <div className="logo">Fiber</div>
      </Link>

      <div className="hamburger-icon" onClick={handleMenu}>
        {showMenu ? (
          <img src={Close} alt="close menu" />
        ) : (
          <img src={Hamburger} alt="hamburger menu" />
        )}
      </div>

      <ul className={`${showMenu ? "nav-links mobile-nav" : "nav-links"}`}>
        <li onClick={handleMenu}>
          <a href="community">Community</a>
        </li>
        <li onClick={handleMenu}>
          <a href="pricing">Pricing</a>
        </li>
        <li onClick={handleMenu}>
          <a href="features">Features</a>
        </li>
        <div className="user-auth">
          <Link to="signin" className="sign-in">
            Sign In
          </Link>
          <Link to="signup" id="nav-btn" className="sign-up">
            Sign Up
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
