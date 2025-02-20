import hakdog from "../pics/me.jpg";
import "../../App.css";
import ReactDOM from "react-dom";

function AboutMe() {
    return (
      <div className="hero-container">
      <header className="hero-header">
        <nav>
          <ul className="hero-nav-links">
          <li><a href="Hero.jsx"></a>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    
      <div className="hero-content">
        <div className="hero-text">
          <h1>About Me</h1>
          <p>
            Hi, I'm Kayce, a dedicated student at WMSU with a passion for IT.
            I enjoy exploring new technologies and improving my skills through
            hands-on experience. My goal is to become a proficient IT professional,
            constantly learning and growing in this ever-evolving field.
          </p>
          <p>
            In my journey, I've tackled various projects that have enhanced my
            problem-solving abilities and technical expertise. I am always open
            to collaboration and new opportunities to expand my knowledge.
          </p>
        </div>
    
        <div className="hero-image-container">
          <img src={hakdog} alt="About Me" className="hero-image" />
        </div>
      </div>
    </div>
    );
}
  
export default AboutMe;
