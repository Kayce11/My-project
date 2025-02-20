import hakdog from "../pics/me.jpg";
import "../../App.css";

function Hero() {
    return (
      <div className="hero-container">
      <header className="hero-header">
        <nav>
          <ul className="hero-nav-links">
            <li>About Me</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello.</h1>
          <h1>I’m Kayce</h1>
          <h1>A WMSU Student</h1>
          <p>
            I am an aspiring IT professional with technical skills acquired through
            practical experience and self-learning. I am adept at problem-solving
            and adapting to new challenges. I am enthusiastic about advancing my
            career in IT while continuing my formal education.
          </p>
          <button className="hero-cv-button">About me</button>
        </div>
    
        <div className="hero-image-container">
          <img src={hakdog} alt="Hero" className="hero-image" />
        </div>
      </div>
    </div>
    
    );
  }
  
  export default Hero;

