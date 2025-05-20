import "../../css/BookingPage.css";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useState , useEffect } from "react";
import SelectTheater from "./SelectTheater";
import FilterModel from "./FilterModel"
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function BookingPage() {
  const initialDates = [
    { day: "WED", date: "07", month: "MAY" },
    { day: "THU", date: "08", month: "MAY" },
    { day: "FRI", date: "09", month: "MAY" },
    { day: "SAT", date: "10", month: "MAY" },
    { day: "SUN", date: "11", month: "MAY" },
    { day: "MON", date: "12", month: "MAY" },
    { day: "TUE", date: "13", month: "MAY" },
  ];

  const prices = [
    "₹0 - ₹100",
    "₹101 - ₹200",
    "₹201 - ₹300",
    "₹301 - ₹400",
    "₹401 - ₹500",
    "₹501 - ₹600",
  ];

  const handleSearchClick = () => {
    setIsExpanded(true);
  };

  const handleClear = () => {
    setSearchText("");
    setIsExpanded(false);
  };

  
  const navigate = useNavigate();
  const location = useLocation();
  const { title, rating, genre } = location.state || {};
  


  const [selectedIndex, setSelectedIndex] = useState(0); // Initially selecting index 1
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showFilter, setShowFilter] = useState(false);



  const selectTime = (time) => {
    setSelectedTime(time);
    setShowTimeDropdown(false);
  };

  const selectPrice = (price) => {
    setSelectedPrice(price);
    setShowPriceDropdown(false); // Close dropdown on select
  };

  const toggleFilter = () => {
    setShowFilter(prev => !prev);
  };

  // Save some details in session stroge because page re-loded essue......
useEffect(() => {
  if (title) localStorage.setItem('movieTitle', title);
  if (rating) localStorage.setItem('movieRating', rating);
  if (genre) localStorage.setItem('movieGenre', genre);
}, [title, rating, genre]);



  // Split genre string by comma and trim spaces
  const genreArray = genre ? genre.split(",").map(item => item.trim()) : [];


  return (
    <>



      <div className="mobile-container">
        <div className="movie-nav">
          <div className="left-section">
            <span className="book-arrow-icon" onClick={() => navigate('/movie-details')}>
              <MdOutlineKeyboardArrowLeft />
            </span>
            <h3>{title}</h3>
          </div>
          <div className="right-section">
            <span className="search-icon"><FaSearch /></span>
            <img
              src="./filter.png"
              alt="Filter"
              onClick={toggleFilter}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        {/* Place modal OUTSIDE the fixed navbar */}
        {showFilter && <FilterModel onClose={toggleFilter} />}
      </div>




      <hr className="date-hr" />

      <div className="date-selector-container">
        <div className="date-row">
          {initialDates.map((item, i) => (
            <div
              key={i}
              className={`date-card ${selectedIndex === i ? "active" : ""}`}
              onClick={() => setSelectedIndex(i)}
            >
              <div className="day">{item.day}</div>
              <div className="date">{item.date}</div>
              <div className="month">{item.month}</div>
            </div>
          ))}
        </div>

        <div className="language-tag">Hindi • 2D</div>

        <hr className="sort-hr" />
        <div className="filter-container">
          <button className="sort-btn">🔽 Sort by</button>
          <div className="price-scroll">
            {prices.map((price, i) => (
              <button key={i} className="price-btn">{price}</button>
            ))}
          </div>
        </div>
      </div>




      {/* This section code For Desktop view Only................................................. */}



      <div className="desktop-view">
        {/* <Navbar/> */}
        <div className="container1">
          <h1>{title}</h1>
          <div className="info">
            <span>{rating}</span>
            {genreArray.map((g, index) => (
              <span key={index}>{g}</span>
            ))}
          </div>

          <div className="booking-strip">
            <div className="date-row">
              {initialDates.map((item, i) => (
                <div
                  key={i}
                  className={`date-card ${selectedIndex === i ? "active" : ""}`}
                  onClick={() => setSelectedIndex(i)}
                >
                  <div className="day">{item.day}</div>
                  <div className="date">{item.date}</div>
                  <div className="month">{item.month}</div>
                </div>
              ))}
            </div>

            <div className="filters">
              <div className="filter-tab active">Hindi - 2D</div>
              <div className="filter-tab active"
                onClick={() => setShowPriceDropdown(!showPriceDropdown)}
                style={{ position: "relative" }} // <--- Add this
              >
                {selectedPrice || "Price Range"}
                <span className={`arrow-icon ${showPriceDropdown ? "rotate" : ""}`}>▾</span>

                {showPriceDropdown && (
                  <div className="price-dropdown">
                    {prices.map((price) => (
                      <div
                        key={price}
                        className="price-option"
                        onClick={() => selectPrice(price)}
                      >
                        <span>{price}</span>
                        <input
                          type="checkbox"
                          readOnly
                          checked={selectedPrice === price}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="filter-tab active preferred-time-tab"
                onClick={() => setShowTimeDropdown(!showTimeDropdown)}
              >
                {selectedTime || "Preferred Time"}
                <span className={`arrow-icon ${showTimeDropdown ? "rotate" : ""}`}>▾</span>

                {showTimeDropdown && (
                  <div className="dropdown-container">
                    <div className="dropdown-option" onClick={() => selectTime("Morning")}>
                      <span className="icon">🌅</span>
                      <div>
                        <div className="label">Morning</div>
                        <div className="time-range">12:00 AM - 11:59 AM</div>
                      </div>
                      <input type="checkbox" checked={selectedTime === "Morning"} readOnly />
                    </div>

                    <div className="dropdown-option" onClick={() => selectTime("Afternoon")}>
                      <span className="icon">🌤️</span>
                      <div>
                        <div className="label">Afternoon</div>
                        <div className="time-range">12:00 PM - 3:59 PM</div>
                      </div>
                      <input type="checkbox" checked={selectedTime === "Afternoon"} readOnly />
                    </div>

                    <div className="dropdown-option" onClick={() => selectTime("Evening")}>
                      <span className="icon">🌇</span>
                      <div>
                        <div className="label">Evening</div>
                        <div className="time-range">4:00 PM - 6:59 PM</div>
                      </div>
                      <input type="checkbox" checked={selectedTime === "Evening"} readOnly />
                    </div>

                    <div className="dropdown-option" onClick={() => selectTime("Night")}>
                      <span className="icon">🌙</span>
                      <div>
                        <div className="label">Night</div>
                        <div className="time-range">7:00 PM - 11:59 PM</div>
                      </div>
                      <input type="checkbox" checked={selectedTime === "Night"} readOnly />
                    </div>
                  </div>
                )}
              </div>

              <div className="search-container">
                {!isExpanded ? (
                  <div className="search-icon-wrapper" onClick={handleSearchClick}>
                    <FaSearch />
                  </div>
                ) : (
                  <div className="search-expanded">
                    <FaSearch className="search-icon" />
                    <input
                      type="text"
                      placeholder="Search by cinema or area"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                    <IoMdClose className="close-icon" onClick={handleClear} />
                  </div>
                )}
              </div>

            </div>
          </div>

          <div className="legend-wrapper">
            <div className="legend-left">
              <span>
                <span className="lan-box">LAN</span> indicates subtitle language, if subtitles are available
              </span>
            </div>
            <div className="legend-right">
              <span>
                <span className="legend-dot green"></span>AVAILABLE
              </span>
              <span>
                <span className="legend-dot yellow"></span>FAST FILLING
              </span>
              <span>
                <span className="lan-box">LAN</span> SUBTITLES LANGUAGE
              </span>
            </div>
          </div>

          <SelectTheater 
          movieTitle={title}
          />

        </div>
      </div>

    </>
  );
}
