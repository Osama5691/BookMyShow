import React from "react";
import "../../css/Footer.css"; // Import the CSS file
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaLinkedin } from "react-icons/fa";
import { FaHome, FaVideo, FaTicketAlt, FaUser, FaUserCircle } from 'react-icons/fa';
import { toast, ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

export default function Footer({ onOpenSignup }) {

  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth(); // ✅ get user from context

  // ✅ Helper function to check if a path is active
const isActive = (path) => location.pathname === path;



  useEffect(() => {
    const checkLoginStatus = () => {
      const user = localStorage.getItem("guestUser");
      setIsSignedIn(!!user);
    };
    // Run once on mount
    checkLoginStatus();
    // // Listen for localStorage changes
    window.addEventListener("storage", checkLoginStatus);
    // // Cleanup 
    return () => { window.removeEventListener("storage", checkLoginStatus); };
  }, []);


   // ✅ handle profile icon click
  const handleProfileClick = () => {
    if (user) {
      navigate("/profile-page"); // navigate if signed in
    } else {
      onOpenSignup(); // open signup modal if not signed in
    }
  };


  return (
    <>

      <ToastContainer />

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
        {/* HOME */}
        <div
          className={`footer-item ${isActive("/") ? "active" : ""}`}
          onClick={() => navigate("/")}
        >
          <FaHome className="icon" />
          <span>Home</span>
        </div>

        {/* MOVIES */}
        <div
          className={`footer-item ${isActive("/movies") ? "active" : ""}`}
          onClick={() => navigate("")}
        >
          <FaVideo className="icon" />
          <span>Movies</span>
        </div>

        {/* LIVE EVENTS */}
        <div
          className={`footer-item ${isActive("/live-events") ? "active" : ""}`}
          onClick={() => navigate("")}
        >
          <FaTicketAlt className="icon" />
          <span>Live Events</span>
        </div>

        {/* ✅ PROFILE / MY ACCOUNT */}
        <div
          className={`footer-item ${isActive("/profile-page") ? "active" : ""}`}
          onClick={handleProfileClick}
        >
          {user ? (
            <FaUserCircle className="icon" />
          ) : (
            <FaUser className="icon" />
          )}
          <span>{user ? "My Account" : "Profile"}</span>
        </div>
      </div>

    </>
  );
}
