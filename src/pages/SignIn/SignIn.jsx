import React from "react";
import EyeIcon from "../../assets/hide password.svg";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="signin">
      <form action="">
        <Link to="/">Back</Link>
        <div id="logo">Fiber</div>
        <h1 className="header">Welcome</h1>

        <div className="form-group">
          <label htmlFor="username">Username or Email</label>
          <input type="text" name="username" id="username" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />

          <span className="eye-icon">
            <img src={EyeIcon} alt="eye icon" />
          </span>
        </div>

        <div className="terms">
          <input type="checkbox" name="checkbox" id="checkbox" />
          By continuing, you agree to the{" "}
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
          Log In
        </button>

        <div className="signin">
          <p className="login-option">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>

    // <form action="">
    //   <h1 className="heading">Welcome</h1>
    //   <div className="form-group">
    //     <label htmlFor="username">Username</label>
    //     <input type="text" name="username" id="username" />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="password">Password</label>
    //     <input type="password" name="password" id="password" />

    //     <span className="eye-icon">
    //       <img src={EyeIcon} alt="eye icon" />
    //     </span>
    //   </div>
    //   <div className="password-option">
    //     <div className="save-action">
    //       <input type="checkbox" name="remember" id="remember" />
    //       <span className="checkbox-text"> Remember Me</span>
    //     </div>
    //   </div>
    //   <div className="terms">
    //     By continuing, you agree to the <a href="#t">Terms of Use</a> and
    //     <a href="#t"> Privacy Policy</a>.
    //   </div>
    //   <button type="submit" className="login">
    //     Log In
    //   </button>
    //   <a href="pass">Forgot Password?</a>
    // </form>
  );
};

export default SignIn;
