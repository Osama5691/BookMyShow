import React from "react";
import "../css/Profile.css";
import { FaUserCircle, FaEdit, FaLock, FaGift, FaUtensils, FaCog, FaInfoCircle, FaCreditCard, FaFilm, FaTags, FaTicketAlt, FaStar } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Profile = () => {

  const [active, setActive] = useState("Profile"); // default selected
  const [profileImage, setProfileImage] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const fileInputRef = useRef(null);

  const { user, signOut } = useAuth();
  const navigate = useNavigate()


  // Load image from localStorage on first render
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);
  

  // Trigger file input when avatar is clicked
  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  // Handle file change and save to localStorage
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result;
        setProfileImage(imageDataUrl);
        localStorage.setItem("profileImage", imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
  if (!user) {
    navigate("/");
  }
}, [user]);


const handleLogout = async () => {
  await signOut();
};




  return (
    <>

    {/* This section Code For Desktop view only................................ */}
      <div className="desktopview-profile">
        <Navbar />
        <div className="userProfile-nav">
          <p
            className={active === "Your Orders" ? "active" : ""}
            onClick={() => setActive("Your Orders")}
          >
            Your Orders
          </p>

          <p
            className={active === "Stream Library" ? "active" : ""}
            onClick={() => setActive("Stream Library")}
          >
            Stream Library
          </p>

          <p
            className={active === "QuickPay" ? "active" : ""}
            onClick={() => setActive("QuickPay")}
          >
            QuickPay
          </p>

          <p
            className={active === "Rewards" ? "active" : ""}
            onClick={() => setActive("Rewards")}
          >
            Rewards
          </p>

          <p
            className={active === "Profile" ? "active" : ""}
            onClick={() => setActive("Profile")}
          >
            Profile
          </p>

          <p
            className={active === "Saved Devices" ? "active" : ""}
            onClick={() => setActive("Saved Devices")}
          >
            Saved Devices
          </p>
        </div>

        <div className="userProfile-wrapper">
          <div className="userProfile-card">
            <div className="userProfile-header">
              {/* Avatar section */}
              <div className="userProfile-avatar" onClick={handleAvatarClick}>
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="userProfile-image"
                  />
                ) : (
                  <FaUserCircle className="default-avatar" />
                )}
              </div>

              {/* Hidden file input */}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <h2 className="userProfile-title">Guest</h2>
            </div>

            <div className="userProfile-section">
              <h3>Account Details</h3>
              <div className="userProfile-row">
                <div className="userProfile-field">
                  <label>Mobile Number</label>
                  <span className="userProfile-edit">
                    <FaEdit /> Edit
                  </span>
                  <input type="text" placeholder="Enter Mobile Num" />
                </div>
                <div className="userProfile-field">
                  <label>Email Address</label>
                  <span className="userProfile-edit">
                    <FaEdit /> Edit
                  </span>
                  <input
                    type="email"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
            </div>

            <div className="userProfile-section">
              <h3>Personal Details</h3>
              <div className="userProfile-row">
                <div className="userProfile-field">
                  <label>
                    First Name <span>*</span>
                  </label>
                  <input type="text" placeholder="Enter first name here" />
                </div>
                <div className="userProfile-field">
                  <label>
                    Last Name <span>*</span>
                  </label>
                  <input type="text" placeholder="Enter last name here" />
                </div>
              </div>

              <div className="userProfile-row">
                <div className="userProfile-field">
                  <label>Birthday (Optional)</label>
                  <input type="date" placeholder="dd-mm-yyyy" />
                </div>
                <div className="userProfile-field">
                  <label>Identity (Optional)</label>
                  <div className="userProfile-buttons">
                    <button>Woman</button>
                    <button>Man</button>
                  </div>
                </div>
              </div>

              <div className="userProfile-row">
                <div className="userProfile-field">
                  <label>Married ? (Optional)</label>
                  <div className="userProfile-buttons">
                    <button>Yes</button>
                    <button>No</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="userProfile-section">
              <h3>Address</h3>
              <label>
                Save As <span>*</span>
              </label>
              <div className="userProfile-buttons">
                <button className="active">Home</button>
                <button>Work</button>
                <button>Other</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* This is Code For Mobile view Only......................................... */}

      <div className="mobileview-profile">
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-info">
                <h2>Hey!</h2>
                <a href="/" className="edit-profile">Edit Profile &gt;</a>
              </div>
             <div className="mobile-profile-wrapper">
      <div className="mobile-profile-icon" onClick={handleAvatarClick}>
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="mobile-profile-image"
          />
        ) : (
          <FaUserCircle size={42} className="mobile-default-avatar" />
        )}
      </div>

      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

    </div>
            </div>




           <div className="login-logout-section">
  <button className="login-logout-btn" onClick={handleLogout}>
    Logout
  </button>
</div>


          

            <div className="profile-options">
              <div className="option">
                <FaTicketAlt className="profile-icon" />
                <div>
                  <h4>Your Orders</h4>
                  <p>View all your bookings & purchases</p>
                </div>
              </div>

              <div className="option">
                <FaFilm className="profile-icon" />
                <div>
                  <h4>Stream Library</h4>
                  <p>Rented & Purchased Movies</p>
                </div>
              </div>

              <div className="option">
                <FaCreditCard className="profile-icon" />
                <div>
                  <h4>Play Credit Card</h4>
                  <p>View your Play Credit Card details and offers</p>
                </div>
              </div>

              <div className="option">
                <FaInfoCircle className="profile-icon" />
                <div>
                  <h4>Help Centre</h4>
                  <p>Need help or have questions?</p>
                </div>
              </div>

              <div className="option">
                <FaCog className="profile-icon" />
                <div>
                  <h4>Accounts & Settings</h4>
                  <p>Location, Payments, Permissions & More</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="option">
                <FaStar className="profile-icon" />
                <div>
                  <h4>Rewards</h4>
                  <p>View your rewards & unlock new ones</p>
                </div>
              </div>

              <div className="option">
                <FaTags className="profile-icon" />
                <div>
                  <h4>Offers</h4>
                  <p>View available offers</p>
                </div>
              </div>

              <div className="option">
                <FaGift className="profile-icon" />
                <div>
                  <h4>Gift Cards</h4>
                  <p>View & purchase gift cards</p>
                </div>
              </div>

              <div className="option">
                <FaUtensils className="profile-icon" />
                <div>
                  <h4>Food & Beverages</h4>
                  <p>Check available combos</p>
                </div>
              </div>

              <div className="option">
                <FaLock className="profile-icon" />
                <div>
                  <h4>BookAChange</h4>
                  <p>Manage your booking changes</p>
                </div>
              </div>

              <div className="option">
                <FaInfoCircle className="profile-icon" />
                <div>
                  <h4>List your Show</h4>
                  <p>Got an event? Partner with us</p>
                </div>
              </div>
            </div>

            <div className="footer">
              <img src="./bms.png" alt="BookMyShow" className="bms-logo" />
              <div className="footer-links">
                <a href="/">Terms & Conditions</a>  | &nbsp;
                <a href="/">Privacy Policy</a>
              </div>

            </div>
          </div>


        </div>
      </div>

    </>

  );
};

export default Profile;
