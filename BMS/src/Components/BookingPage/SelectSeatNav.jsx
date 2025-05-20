import "../../css/SelectSeatNav.css"
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaPencil } from "react-icons/fa6";
import SelectSeats from "./SelectSeats";


export default function SelectSeatNav() {

  const [showModal, setShowModal] = useState(false);
  const [selectedSeats, setSelectedSeats] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const { title, rating, genre, time, format, theaterName } = location.state || {};

  const movieTitle = title || localStorage.getItem("movieTitle");
  const movieRating = rating || localStorage.getItem('movieRating');
  const movieGenre = genre || localStorage.getItem('movieGenre');

  // ✅ Define available seat-specific images
  const seatImages = {
    1: "/images/image1.png",
    2: "/images/image2.png",
    3: "/images/image3.png",
    4: "/images/image4.png",
    6: "/images/image5.png",
    8: "/images/image6.png"
  };


  // ✅ Get image for seat or fallback to previous available
  const getSeatImage = (seatNumber) => {
    for (let i = seatNumber; i >= 1; i--) {
      if (seatImages[i]) {
        return seatImages[i];
      }
    }
    return "/images/default.png"; // Default if none found
  };

  const selectedImage = getSeatImage(selectedSeats);


  // 👉 Automatically open modal when page loads
  useEffect(() => {
    setShowModal(true);
  }, []);


  return (

    <>

      {/* This is desktop section code ............................................. */}

      <div className="desktop-views">
        <div className='Top-section'>
          <div className="movie-container">
            <div className="top-section">
              <div className="left-sec">
                <span className="back-arrow"
                  onClick={() =>
                    navigate('/booking-details', {
                      state: {
                        title: movieTitle,
                        rating: movieRating,
                        genre: movieGenre,
                      },
                    })
                  }
                >
                  <IoIosArrowBack />
                </span>
                <div>
                  <h3>{title || "Movie Title"}</h3>
                  <p>
                    <strong>{theaterName || "Theater Name"}</strong> | Saturday, May 17, 2025, {time} ({format})
                  </p>
                </div>
              </div>
              <div className="right-sec">
                <button className="ticket-button" onClick={() => setShowModal(true)}>
                  {selectedSeats} Ticket{selectedSeats > 1 ? 's' : ''} <FaPencil />
                </button>
                &nbsp; &nbsp; &nbsp;
                <button className="cancel-button"
                  onClick={() => navigate('/booking-details')}
                >X</button>
              </div>
            </div>
          </div>


          {showModal && (
            <div className="modal-overlay">
              <div className="modal-boxs">
                <h2 className="modal-heading">How Many Seats?</h2>

                {/* 🖼️ Dynamic Image */}
                <img
                  key={selectedSeats}  // 👈 ensures re-render to retrigger animation
                  src={selectedImage}
                  alt={`Seat ${selectedSeats}`}
                  className="scooty-image fade-in"
                />

                {/* Seat Circle Selector */}
                <div className="seat-selector">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div
                      key={i}
                      className={`seat-circle ${selectedSeats === i + 1 ? "selected" : ""
                        }`}
                      onClick={() => setSelectedSeats(i + 1)}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>

                <hr className="divider" />

                <div className="seat-types">
                  <div>
                    <div className="type">NORMAL</div>
                    <div className="price">Rs. 200</div>
                    <div className="available">Available</div>
                  </div>
                  <div>
                    <div className="type">EXECUTIVE</div>
                    <div className="price">Rs. 200</div>
                    <div className="available">Available</div>
                  </div>
                  <div>
                    <div className="type">PREMIUM</div>
                    <div className="price">Rs. 200</div>
                    <div className="available">Available</div>
                  </div>
                  <div>
                    <div className="type">VIP</div>
                    <div className="price">Rs. 400</div>
                    <div className="available">Available</div>
                  </div>
                </div>

                <button className="select-button" onClick={() => setShowModal(false)}>
                  Select Seats
                </button>
              </div>
            </div>
          )}



          <div className="timing-section">
            {[
              '12:05 PM', '01:05 PM', '03:40 PM',
              '04:40 PM', '07:15 PM', '08:15 PM',
              '10:50 PM', '11:50 PM'
            ].map((time, index) => (
              <div key={index} className={`time-card ${index === 0 ? 'selected' : ''}`}>
                <span>{time}</span>
                <p>DOLBY 7.1</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* This is Mobile-section Code ........................................................... */}

      <div className="mobile-views">
        <div className='Top-section'>
          <div className="movie-container">
            <div className="top-section">
              <div className="left-sec">
                <div className="left-icon">
                  <span className="back-arrow"
                    onClick={() =>
                      navigate('/booking-details', {
                        state: {
                          title: movieTitle, // yeh title wapas bhej raha hai
                        },
                      })
                    }
                  >
                    <IoIosArrowBack />
                  </span>
                </div>
                <h3>{title || "Movie Title"}</h3>
              </div>
              <div className="cinema-info">
                <p><strong>{theaterName || "Theater Name"}</strong></p>
              </div>
              <div className="right-sec">
                <p>Mon, 19 May</p>
                <button className="ticket-button" onClick={() => setShowModal(true)}>
                  {selectedSeats} Ticket{selectedSeats > 1 ? 's' : ''} <FaPencil />
                </button>
                <button className="cancel-button">X</button> {/* hidden on mobile */}
              </div>
            </div>
          </div>


          {showModal && (
            <div className="modal-overlay">
              <div className="modal-boxs">
                <h2 className="modal-heading">How Many Seats?</h2>

                {/* 🖼️ Dynamic Image */}
                <img
                  key={selectedSeats}  // 👈 ensures re-render to retrigger animation
                  src={selectedImage}
                  alt={`Seat ${selectedSeats}`}
                  className="scooty-image fade-in"
                />

                {/* Seat Circle Selector */}
                <div className="seat-selector">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div
                      key={i}
                      className={`seat-circle ${selectedSeats === i + 1 ? "selected" : ""
                        }`}
                      onClick={() => setSelectedSeats(i + 1)}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>

                <hr className="divider" />

                <div className="seat-types">
                  <div>
                    <div className="type">NORMAL</div>
                    <div className="price">Rs. 200</div>
                    <div className="available">Available</div>
                  </div>
                  <div>
                    <div className="type">EXECUTIVE</div>
                    <div className="price">Rs. 200</div>
                    <div className="available">Available</div>
                  </div>
                  <div>
                    <div className="type">PREMIUM</div>
                    <div className="price">Rs. 200</div>
                    <div className="available">Available</div>
                  </div>
                  <div>
                    <div className="type">VIP</div>
                    <div className="price">Rs. 400</div>
                    <div className="available">Available</div>
                  </div>
                </div>

                <button className="select-button" onClick={() => setShowModal(false)}>
                  Select Seats
                </button>
              </div>
            </div>
          )}




          <div className="timing-section">
            {[
              '11:05 AM', '02:40 PM', '06:15 PM', '09:50 PM',
            ].map((time, index) => (
              <div key={index} className={`time-card ${index === 0 ? 'selected' : ''}`}>
                <span>{time}</span>
                <p>DOLBY 7.1</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ends here........................................................... */}

      <SelectSeats />

      {/* this section Code for check Availabilty etc......................... */}
      {!showModal && (
        <div className="seat-info-wrapper">
          <div className="seat-info">
            <div className="seat-box sold"></div>
            <span>BestSeller</span>

            <div className="seat-box available"></div>
            <span>Available</span>

            <div className="seat-box selected"></div>
            <span>Selected</span>

            <div className="seat-box sold"></div>
            <span>Sold</span>
          </div>
        </div>
      )};

    </>
  )
}