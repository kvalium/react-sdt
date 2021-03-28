import React from "react";
import { Link } from "react-router-dom";
import logo from "./rusty.png"; // Tell webpack this JS file uses this image

export const Header = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/">
        <img src={logo} alt="rusty aircraft" height="30" />
      </Link>

      <button
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/users">
          Users
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/users/new" className="button is-primary">
              <strong>Sign up</strong>
            </Link>
            <Link to="/users/login" className="button is-light">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
