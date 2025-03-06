import React from "react";
import Navbar from "./navbar"; 
import "../../App.css";
import profilePic from "../pics/me.jpg";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="hero-container">
        <div className="hero-content">
          <div className="text-content">
            <p className="intro-text">Hello, It's Me</p>
            <h1>Kayce Vergara</h1>
            <h2>And I'm a <span className="highlight">WMSU STUDENT</span></h2>
            <p className="description">I love learning and improving. I stay updated with the latest trends in web development.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
            <button className="download-cv">Download CV</button>
          </div>
          <div className="image-content">
            <div className="image-wrapper">
              <img src={profilePic} alt="Kayce Vergara" className="profile-pic" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
