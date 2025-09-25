import "../../css/Navbar.css"; // Ensure this includes the provided CSS
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { useState, useEffect } from "react";
import SignUp from "../../Pages/SignUp";
import { account } from "../../appWrite";

export default function Navbar({ onOpenSignup }) {
  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  


// fetch Logged in user
  useEffect(() => {
  account
    .get()
    .then((res) => setUser(res))
    .catch(() => {
      const guest = localStorage.getItem("guestUser");
      if (guest) {
        setUser(JSON.parse(guest)); // ✅ ab Guest user mil jayega
      } else {
        setUser(null);
      }
    });
}, []);




async function signOut() {
  try {
    // ✅ Clear Appwrite session
    await account.deleteSession("current").catch(() => {});

    // ✅ Clear Guest session
    localStorage.removeItem("guestUser");

    setUser(null);
    setShowProfile(false);

    toast.success("You have been signed out!", {
      position: "top-center",
      autoClose: 3000,
    });

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  } catch (err) {
    console.error("Error signing out:", err);
    toast.error("Failed to sign out. Try again.", {
      position: "top-center",
      autoClose: 3000,
    });
  }
}







  // Function to get first name from email or full name
const getFirstName = (email, name) => {
  if (name && name.trim().length > 0) {
    return name.split(" ")[0];
  }
  return email ? email.split("@")[0] : "Guest";
};



  return (
    <div>
      {/* Primary Navbar */}
      <nav className="fnav">
        <div className="left">
          <img src="./bms.png" alt="Logo" />
          <input
            type="search"
            placeholder="Search For Movies, Events, Plays and More"
          />
        </div>

        <div className="right">
          <select name="City" id="drop">
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>


          {user ? (
            <div className="user-profile"
              style={{
                display: "flex",
                alignItems: "start",
                gap: "8px",
                cursor: "pointer"
              }}
              onClick={()=> setShowProfile(true)}   // <-- Open sidebar

            >
              <img
                src={
                  user.prefs?.avatar ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="Profile"
                style={{ width: "32px", height: "32px", borderRadius: "50%" }}
              />
              <span
              style={{ width:"90px" , overflow: "hidden" , whiteSpace:"nowrap", textOverflow:"ellipsis" , marginTop:"4px"}}
              >Hello, {getFirstName(user.email, user.name ,)}</span>
              
            </div>
          ) : (
            <>
              <button className="right-button" onClick={onOpenSignup}>
                Sign In
              </button>
            </>
          )}


          <i>
            <FaBars />
          </i>
        </div>
      </nav>

      {/* Secondary Navbar */}
      <nav className="sec-nav">
        <div className="s-left">
          <p>Movies</p>
          <p>Stream</p>
          <p>Events</p>
          <p>Plays</p>
          <p>Sports</p>
          <p>Activities</p>
          <p>Buzz</p>
        </div>

        <div className="s-right">
          <p>List Your Show</p>
          <p>Corporates</p>
          <p>Offers</p>
          <p>Gift Card</p>
        </div>
      </nav>



      {/* Mobile Navbar...................................... */}
      <div className="Nav2">
        <nav className="Mnav">
          <div className="left-section">
            <h1>
              It All Starts Here! <br /> <span>Mumbai</span>
            </h1>
          </div>
          <div className="right-section">
            <div className="search">
              <FaSearch />
            </div>
            <div className="notification">
              <IoNotificationsOutline />
            </div>
            <div className="scan">
              <MdOutlineQrCodeScanner />
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile View Secondary Navbar */}

      <nav className="Snav">
        <img src="./MI.png" alt="" />
        <img src="./MI2.png" alt="" />
        <img src="./MI3.png" alt="" />
        <img src="./MI4.png" alt="" />
        <img src="./MI5.png" alt="" />
        <img src="./MI6.png" alt="" />
        <img src="./MI7.png" alt="" />
      </nav>



     {/* Profile Sidebar .......................*/}
<div className={`profile-sidebar ${showProfile ? "open" : ""}`}>
  <div className="profile-header">
    <div>
      <h2>Hey!</h2>
      <p className="edit-profile">Edit Profile &gt;</p>
    </div>
    <img
      src={
        user?.prefs?.avatar ||
        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
      }
      alt="Profile Avatar"
      className="profile-avatar"
    />
  </div>

  <ul className="profile-menu">
    <li>
      <span className="icon">🔔</span>
      <div>
        <h4>Notifications</h4>
        <p>Stay updated with latest updates</p>
      </div>
    </li>
    <li>
      <span className="icon">📦</span>
      <div>
        <h4>Your Orders</h4>
        <p>View all your bookings & purchases</p>
      </div>
    </li>
    <li>
      <span className="icon">🎬</span>
      <div>
        <h4>Stream Library</h4>
        <p>Rented & Purchased Movies</p>
      </div>
    </li>
    <li>
      <span className="icon">💳</span>
      <div>
        <h4>Play Credit Card</h4>
        <p>View your Play Credit Card details and offers</p>
      </div>
    </li>
    <li>
      <span className="icon">❓</span>
      <div>
        <h4>Help & Support</h4>
        <p>View commonly asked queries and Chat</p>
      </div>
    </li>
    <li>
      <span className="icon">⚙️</span>
      <div>
        <h4>Accounts & Settings</h4>
        <p>Location, Payments, Permissions & More</p>
      </div>
    </li>
    <li>
      <span className="icon">🎁</span>
      <div>
        <h4>Rewards</h4>
        <p>View your rewards & unlock new ones</p>
      </div>
    </li>
  </ul>

  <button className="signout-btn" onClick={signOut}>Sign out</button>
</div>

{/* Overlay */}
{showProfile && (
  <div className="sidebar-overlay" onClick={() => setShowProfile(false)}></div>
)}


<ToastContainer />


</div>

  );
}
