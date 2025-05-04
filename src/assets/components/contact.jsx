import React, { useState } from 'react';
import '../../App.css';
import Navbar from './navbar';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import profilePic from '../pics/me.jpg'; 

const ContactUs = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setFormData({ name: '', email: '', message: '' }); 
    setTimeout(() => setMessageSent(false), 2000); 
  };

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
            <form className="contact-form" onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
              />
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="6" 
                value={formData.message} 
                onChange={handleInputChange} 
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
            {messageSent && (
              <div className="message-sent-popup">
                <p>Your message has been sent successfully!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
