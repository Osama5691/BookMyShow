import React from "react";
import "../../css/Footer.css"; // Import the CSS file
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaLinkedin } from "react-icons/fa";
import { FaHome, FaVideo, FaTicketAlt, FaUser } from 'react-icons/fa';

export default function Footer({ onOpenSignup }) {
  return (
    <>
    
   {/* Desktop Footer */}

   <footer className="bms-footer">
  {/* Top Section */}
  <div className="bms-footer-top">
    <p>
      <strong>📢 List your Show &nbsp;</strong> Got a show, event, activity, or a great experience? 
      Partner with us & get listed on <span className="bms-highlight">BookMyShow</span>
    </p>
    <button className="bms-contact-btn">Contact today!</button>
  </div>

  {/* Middle Section */}
  <div className="bms-footer-services">
    <div className="bms-footer-service">
      <span className="bms-icon">👤</span>
      <p>24/7 CUSTOMER CARE</p>
    </div>
    <div className="bms-footer-service">
      <span className="bms-icon">🔄</span>
      <p>RESEND BOOKING CONFIRMATION</p>
    </div>
    <div className="bms-footer-service">
      <span className="bms-icon">📧</span>
      <p>SUBSCRIBE TO THE NEWSLETTER</p>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="bms-footer-info">
    <div className="bms-footer-section">
      <h3>Movies Now Showing in Mumbai</h3>
      <p>
        Chhava | Sanam Teri Kasam | Loveyapa | Badass Ravi Kumar | Captain America: Brave New World | 
        Sky Force | Interstellar | Drea | Umbarro | Vidaamuyarchi
      </p>
    </div>

    <div className="bms-footer-section">
      <h3>Upcoming Movies in Mumbai</h3>
      <p>
        Namma Preethiya Ramu | Nimitta Matra | Athu Vaangina Ethu Elavasam | Daveed | 
        It's Complicated | Fire (2025) | Otha Muthiaya | Vettu | Badava | Ilti
      </p>
    </div>

    <div className="bms-footer-section">
      <h3>Countries</h3>
      <p>Indonesia | Singapore | UAE | Sri Lanka | West Indies</p>
    </div>

    <div className="bms-footer-section">
      <h3>Help</h3>
      <p>About Us | Contact Us | FAQs | Privacy Policy | Terms and Conditions</p>
    </div>

    <div className="bms-footer-section">
      <h3>BookMyShow Exclusives</h3>
      <p>Lollapalooza India | BookAChange | Gift Cards | List My Show | Offers | Stream | Trailers</p>
    </div>
  </div>

  {/* Social Section */}
  <div className="bms-footer-social">
    <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="BookMyShow Logo" className="bms-logo" />
    <div className="bms-social-icons">
      <FaFacebookF />
      <FaTwitter />
      <FaInstagram />
      <FaYoutube />
      <FaPinterest />
      <FaLinkedin />
    </div>
  </div>

  {/* Copyright */}
  <p className="bms-footer-copy">
    Copyright 2025 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved. <br />
    This project is dummy
  </p>
</footer>

     {/* Mobile Footer.........................  */}

    <div className="mobile-footer-wrapper mobile-footer">
      <div className="footer-item active">
        <FaHome className="icon" />
        <span>Home</span>
      </div>
      <div className="footer-item">
        <FaVideo className="icon" />
        <span>Movies</span>
      </div>
      <div className="footer-item">
        <FaTicketAlt className="icon" />
        <span>Live Events</span>
      </div>
      <div className="footer-item" onClick={onOpenSignup}>
        <FaUser className="icon" />
        <span>Profile</span>
      </div>
    </div>

    </>
  );
}
