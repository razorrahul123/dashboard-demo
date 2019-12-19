import React, { Component } from "react";
import profile from "./assets/profile.png";
const About = () => {
  return (
    <div className="content-container about-wrapper-main">
      <nav className="navbar-container">
        <div className="navbar-wrapper">
          <div className="nav-header">
            <a href="/about">About US</a>
          </div>
          <div className="nav-logo">
            <img src={profile} />
          </div>
        </div>
      </nav>
      <h2>About</h2>
    </div>
  );
};

export default About;
