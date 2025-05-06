import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar"; 
import "../../App.css";
import profilePic from "../pics/me.jpg"; 

const AboutMe = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="main-box">
          <div className="left-side">
            <div className="image-wrappers">
              <img src={profilePic} alt="Kayce Vergara" className="small-profile-pic" />
            </div>

            <div className="skills-section">
              <h3>Skills</h3>
              <div className="skills-grid">
                <div className="skill"><i className="fas fa-video skill-icon"></i> Video Editing (CapCut)</div>
                <div className="skill"><i className="fab fa-html5 skill-icon"></i> Basic Frontend (HTML, CSS)</div>
                <div className="skill"><i className="fas fa-database skill-icon"></i> Basic Database</div>
                <div className="skill"><i className="fas fa-pencil-ruler skill-icon"></i> Drafting</div>
              </div>
            </div>
          </div>

          <div className="right-side">
            <h2 className="section-title">About Me</h2>
            <p>Hi, I'm Kayce, a dedicated student at WMSU with a passion for IT. I enjoy exploring new technologies and improving my skills through hands-on experience. My goal is to become a proficient IT professional, constantly learning and growing in this ever-evolving field.</p>
            <p>In my journey, I've tackled various projects that have enhanced my problem-solving abilities and technical expertise. I am always open to collaboration and new opportunities to expand my knowledge.</p>
          </div>
        </div>

        <div className="more">
          <h3>More About Me</h3>
        </div>

        <div className="extra-box">
          <div className="interests-section">
            <h3>Interests</h3>
            <ul>
              <li>📷 Video/Photo Editing</li>
              <li>✈️ Travelling</li>
              <li>📱 Making TikTok Content</li>
              <li>📚 Learning New Things</li>
              <li>🏕️ Adventure</li>
            </ul>
          </div>

          <div id="certifications" className="certifications-section">
  <h3>Certifications</h3>
  <ul>
    <li>📜 Civil Service Exam Passer (Professional Level)</li>
    <li>🚑 Code Red Online Learning Program</li>
    <li>📘 Simplilearn Online Learning Program</li>
  </ul>

  <div className="see-more-certifications">
    <Link to="/certs">📎 See All Certifications</Link>
  </div>
</div>


        </div>
      </div>
    </>
  );
};

export default AboutMe;
