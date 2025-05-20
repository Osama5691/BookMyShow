import React from "react";
import "../../css/Footer.css"; // Import the CSS file
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaLinkedin } from "react-icons/fa";
import { FaHome, FaVideo, FaTicketAlt, FaUser } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
    
   {/* Desktop Footer */}

    <footer className="footer desktop-footer">
      {/* Top Section */}
      <div className="footer-top">
        <p>
          <strong>📢 List your Show &nbsp;</strong> Got a show, event, activity, or a great experience? 
          Partner with us & get listed on <span className="highlight">BookMyShow</span>
        </p>
        <button className="contact-btn">Contact today!</button>
      </div>

      {/* Middle Section */}
      <div className="footer-middle">
        <div className="footer-item">
          <span className="icon">👤</span>
          <p>24/7 CUSTOMER CARE</p>
        </div>
        <div className="footer-item">
          <span className="icon">🔄</span>
          <p>RESEND BOOKING CONFIRMATION</p>
        </div>
        <div className="footer-item">
          <span className="icon">📧</span>
          <p>SUBSCRIBE TO THE NEWSLETTER</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <h3>MOVIES NOW SHOWING IN MUMBAI</h3>
        <p>
          Chhava | Sanam Teri Kasam | Loveyapa | Badass Ravi Kumar | Captain America: Brave New World | 
          Sky Force | Interstellar | Drea | Umbarro | Vidaamuyarchi
        </p>

        <h3>UPCOMING MOVIES IN MUMBAI</h3>
        <p>
          Namma Preethiya Ramu | Nimitta Matra | Athu Vaangina Ethu Elavasam | Daveed | 
          It's Complicated | Fire (2025) | Otha Muthiaya | Vettu | Badava | Ilti
        </p>
        <h3>COUNTRIES</h3>
        <p>Indonesia | Singapore | UAE | Sri Lanka | West Indies</p>

        <h3>HELP</h3>
        <p>About Us | Contact Us | FAQs | Privacy Policy | Terms and Conditions</p>

        <h3>BOOKMYSHOW EXCLUSIVES</h3>
        <p>Lollapalooza India | BookAChange | Gift Cards | List My Show | Offers | Stream | Trailers</p>

      </div>

      <div className="social-media">
        <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="BookMyShow Logo" className="logo" />
        <div className="icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
          <FaPinterest />
          <FaLinkedin />
        </div>
      </div>

      <p className="copyright">
        Copyright 2025 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved. <br />
        This project is dummy
      </p>

    </footer>

     {/* Mobile Footer  */}

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
      <div className="footer-item">
        <FaUser className="icon" />
        <span>Profile</span>
      </div>
    </div>

    </>
  );
}
