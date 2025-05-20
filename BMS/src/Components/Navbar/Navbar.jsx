import "../../css/Navbar.css"; // Ensure this includes the provided CSS
import { FaBars, FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineQrCodeScanner } from "react-icons/md";

export default function Navbar() {
  
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
          <button>Sign In</button>
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

      {/* Mobile Navbar */}
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
      

      </div>  
      );
}
