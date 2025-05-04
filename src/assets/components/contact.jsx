import React from 'react';
import '../../App.css';
import Navbar from './navbar';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import profilePic from '../pics/me.jpg'; 

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-left">
            <img src={profilePic} alt="My Profile" className="contact-profile" />
            <h2>Kayce Evangelista</h2>
            <p>Frontend Developer & Video Editor</p>

            <div className="contact-details">
              <p><FaPhoneAlt /> +63 997 631 7588 </p>
              <p><FaEnvelope /> vergarakayce24@gmail.com</p>
              <p><FaMapMarkerAlt /> Baliwasan, Zamboanga City, 7000</p>
            </div>

            <div className="social-links">
              <a href="https://www.facebook.com/kayceRamosVergara" target="_blank" rel="noreferrer">
                <FaFacebookF /> Facebook
              </a>
              <a href="https://www.instagram.com/lunavergara01?igsh=eXZodmluZjBqZ2lz" target="_blank" rel="noreferrer">
                <FaInstagram /> Instagram
              </a>
              <a href="www.linkedin.com/in/kayce-ramos-vergara-15bb35359" target="_blank" rel="noreferrer">
                <FaLinkedinIn /> LinkedIn
              </a>
            </div>
          </div>

          <div className="contact-right">
            <h2>Contact Me</h2>
            <p>Any questions or remarks? Just send me a message!</p>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="6" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
