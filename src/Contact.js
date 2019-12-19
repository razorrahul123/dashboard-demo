import React, { Component } from "react";
import profile from "./assets/profile.png";
const Contact = () => {
  return (
    <div className="content-container contact-wrapper-main">
      <nav className="navbar-container">
        <div className="navbar-wrapper">
          <div className="nav-header">
            <a href="/contact">Contact</a>
          </div>
          <div className="nav-logo">
            <img src={profile} />
          </div>
        </div>
      </nav>
      <h2>Contact</h2>
    </div>
  );
};

export default Contact;
