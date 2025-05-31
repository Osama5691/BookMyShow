import "../../css/BookingSummary.css";
import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";



function BookingSummary() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedType, setSelectedType] = useState();
  const [donate, setDonate] = useState(false);


  

  const navigate = useNavigate();
  const location = useLocation();
  const {
    title,
    theaterName,
    time,
    format,
    releaseDate,
    seatDetails = [],
    totalAmount = 0
  } = location.state || {};


  const seatGroups = seatDetails.reduce((acc, seat) => {
    if (!acc[seat.category]) {
      acc[seat.category] = [];
    }
    acc[seat.category].push(seat);
    return acc;
  }, {});



  const allSeats = Object.values(seatGroups).flat();
  const totalTickets = allSeats.length;
  const totalTicketPrice = allSeats.reduce((sum, seat) => sum + seat.price, 0);
  const convenienceFees = totalTickets * 27.14;
  const donation = donate ? totalTickets * 1 : 0;
  const subTotal = totalTicketPrice + convenienceFees + donation;


  // useEffect(()=>{
  //   if (releaseDate) localStorage.setItem("movieRelease", releaseDate);
  // }, [releaseDate])

  const movieTitle = title || localStorage.getItem("movieTitle");
  const theatername = theaterName || localStorage.getItem('theater');
  const movieFormat = format || localStorage.getItem('Format');
  //  const movieReleaseDate = releaseDate || localStorage.getItem ("movieReleaseDate");




  useEffect(() => {
    // console.log("Component mounted");
    document.body.style.backgroundColor = "#f5f5f5";

    return () => {
      // console.log("Component unmounted");
      document.body.style.backgroundColor = "white";
    };
  }, []);


  const handleSkip = () => {
  const movieTitle = title || localStorage.getItem("movieTitle");
  const theatername = theaterName || localStorage.getItem("theater");
  const showTime = time || localStorage.getItem("movieTime");
  const movieReleaseDate = releaseDate || localStorage.getItem("movieReleaseDate");

  if (movieTitle && showTime && theatername && movieReleaseDate && seatGroups && convenienceFees && subTotal) {
    navigate("/confirm-booking", {
      state: {
        title: movieTitle,
        time: showTime,
        theaterName: theatername,
        releaseDate: movieReleaseDate,

        seatGroups: seatGroups,              // aapke seat groups ka object
        convenienceFees: convenienceFees,    // convenience fee ka number
        subTotal: subTotal,                   // total amount
        
      }
      
    });
  } else {
    alert("Data missing! Please go back and reselect.");
  }
};

  return (
    <>


      <div className="top">
        <div className="back-arrow"
          onClick={() =>
            navigate('/select-seats', {
              state: {
                title: movieTitle,
                theaterName: theatername,
                format: movieFormat,
                releaseDate: releaseDate,
              },
            })
          }
        >
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div className="center">
          <h1>Grab a Bite!</h1>
          <p>{theaterName}</p>
        </div>
        <div className="skip"
          onClick={handleSkip}
        >
          <button>Skip</button>
        </div>
      </div>

      <div className="search-filter-container">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search for F&B Items" />
        </div>

        <div className="filter-tabs">
          <div className="tab active">All</div>
          <div className="tab">Popcorn</div>
          <div className="tab">Combos</div>
          <div className="tab">Beverages</div>
          <div className="tab">Snacks</div>
        </div>
      </div>

      {/* This Is desktop view Code......................................... */}

      {/* Top Header */}
      <div className="movie-container">
        <div className="top-section">
          <div className="left-sec">
            <span className="arrow"
              onClick={() =>
                navigate('/select-seats', {
                  state: {
                    title: localStorage.getItem("movieTitle"),
                    theaterName: localStorage.getItem("theatername"),
                    format: localStorage.getItem("movieFormat"),
                  },
                })
              }
            >
              <IoIosArrowBack />
            </span>
            <div className="movie-info">
              <h3>{title}</h3>
              <p>{theaterName} | Wednesday,{releaseDate}, {time} ({format})</p>
            </div>
          </div>
          <div className="right-sec">
            <button className="cancel-button">X</button>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="summary-bann">
        <img
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1692195492309_15web.png"
          alt="banner"
        />
      </div>

      {/* Flex wrapper for Snacks and Ticket Summary */}
      <div className="main-flex-container">
        {/* Snacks Section */}
        <div className="snacks-container">
          <h1>
            Grab a <span>bite !</span>
          </h1>
          <p>
            Now get your Favorite snack at a <span>discount price!</span>
          </p>

          <div className="snacks-filter">
            <span>ALL</span> &nbsp;
            <span>POPCORN</span> &nbsp;
            <span>SNACKS</span> &nbsp;
            <span>COMBOS</span> &nbsp;
            <span>BEVERAGES</span> &nbsp;
          </div>

          <div className="snack-section">
            <div className="snack-items">
              {/* Multiple Cards */}
              {/* CARD 1 */}
              <div className="snack-card">
                <div className="card-top">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png"
                    alt="veg"
                    className="veg-icon"
                  />
                  <img
                    src="https://in.bmscdn.com/fnb/v3/xxhdpi/2001054_26122022174031.png"
                    alt="Popcorn"
                    className="snack-image"
                  />
                  <div className="snack-info">
                    <h3 className="snack-title">Jumbo Cheese Popcorn</h3>
                    <p className="snack-desc">
                      Jumbo Cheese Popcorn 240g | 1380 kcal
                    </p>
                  </div>
                </div>
                <div className="card-bottom">
                  <span className="price">₹640</span>
                  <button className="add-btn">Add</button>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="snack-card">
                <div className="card-top">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png"
                    alt="veg"
                    className="veg-icon"
                  />
                  <img
                    src="https://in.bmscdn.com/fnb/v3/xxhdpi/1020006_06082018135441.png"
                    alt="Nachos"
                    className="snack-image"
                  />
                  <div className="snack-info">
                    <h3 className="snack-title">Nachos</h3>
                    <p className="snack-desc">
                      Nachos 80g with Cheese Dip 50g | 382 kcal
                    </p>
                  </div>
                </div>
                <div className="card-bottom">
                  <span className="price">₹400</span>
                  <button className="add-btn">Add</button>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="snack-card">
                <div className="card-top">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png"
                    alt="veg"
                    className="veg-icon"
                  />
                  <img
                    src="https://in.bmscdn.com/fnb/v3/xxhdpi/2000492_01082023133741.png"
                    alt="Nachos"
                    className="snack-image"
                  />
                  <div className="snack-info">
                    <h3 className="snack-title">Nachos Combo (Flavoured)</h3>
                    <p className="snack-desc">
                      Jumbo Tub Flavoured Popcorn 240g
                    </p>
                  </div>
                </div>
                <div className="card-bottom">
                  <span className="price">₹1150</span>
                  <button className="add-btn">Add</button>
                </div>
              </div>


              {/* CARD 4 */}
              <div className="snack-card">
                <div className="card-top">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png"
                    alt="veg"
                    className="veg-icon"
                  />
                  <img
                    src="https://in.bmscdn.com/fnb/v3/xxhdpi/2001054_26122022174031.png"
                    alt="Nachos"
                    className="snack-image"
                  />
                  <div className="snack-info">
                    <h3 className="snack-title">Jumbo Salted Popcorn</h3>
                    <p className="snack-desc">
                      Jumbo Salted Popcorn 240g | 1311 kcal
                    </p>
                  </div>
                </div>
                <div className="card-bottom">
                  <span className="price">₹600</span>
                  <button className="add-btn">Add</button>
                </div>
              </div>


              {/* CARD 5 */}
              <div className="snack-card">
                <div className="card-top">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png"
                    alt="veg"
                    className="veg-icon"
                  />
                  <img
                    src="https://in.bmscdn.com/fnb/v3/xxhdpi/1020011_17082018145045.png"
                    alt="Nachos"
                    className="snack-image"
                  />
                  <div className="snack-info">
                    <h3 className="snack-title">Coke 810ml</h3>
                    <p className="snack-desc">
                      Coke 810ml | 373 kcal
                    </p>
                  </div>
                </div>
                <div className="card-bottom">
                  <span className="price">₹450</span>
                  <button className="add-btn">Add</button>
                </div>
              </div>


              {/* CARD 6 */}
              <div className="snack-card">
                <div className="card-top">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png"
                    alt="veg"
                    className="veg-icon"
                  />
                  <img
                    src="https://in.bmscdn.com/fnb/v3/xxhdpi/1020080_17082018155618.png"
                    alt="Nachos"
                    className="snack-image"
                  />
                  <div className="snack-info">
                    <h3 className="snack-title">Cappuccino 150ml</h3>
                    <p className="snack-desc">
                      Cappuccino 150ml | 99 kcal
                    </p>
                  </div>
                </div>
                <div className="card-bottom">
                  <span className="price">₹400</span>
                  <button className="add-btn">Add</button>
                </div>
              </div>



            </div>
          </div>

          <div className="instructions">
            <h5>Note:</h5>
            <span>1. Images are for representation purposes only.</span>
            <br />
            <span>2. Prices inclusive of taxes.</span>
            <br />
            <span>
              3. All nutritional information is indicative, values are per serve
              as shared by the Cinema and may vary depending on the ingredients
              and portion size.
            </span>
            <br />
            <span>
              4. An average active adult requires 2000 kcal energy per day,
              however, calorie needs may vary.
            </span>
            <br /> <br />
            <span>Kids above the age of 3 years will be charged separately.</span>
          </div>
        </div>

        {/* Ticket Summary on Right */}
        <div className="page-wrapper">
          <div className="ticket-shape">
            <h2 className="booking-heading">BOOKING SUMMARY</h2>

            {Object.entries(seatGroups).map(([category, seats]) => {
              const seatIds = seats.map(seat => seat.seatId).join(", ");
              const totalPrice = seats.reduce((sum, seat) => sum + seat.price, 0);

              return (
                <div className="ticket-info" key={category}>
                  <div className="ticket-row">
                    <span className="ticket-title">
                      {category.toUpperCase()} - {seatIds} ({seats.length} Ticket{seats.length > 1 ? "s" : ""})
                    </span>
                    <span className="pricess">Rs. {totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="ticket-subtitle">AUDI 6</div>
                </div>
              );
            })}


            <div className="convenience-section">
              <div className="convenience-header" onClick={() => setShowDetails(!showDetails)}>
                <span className="arrow-icon">{showDetails ? <CiCircleChevUp /> : <CiCircleChevDown />}</span>
                <span className="conn-title">Convenience fees</span>
                <span className="prices">Rs. {convenienceFees.toFixed(2)}</span>
              </div>

              {showDetails && (
                <div className="convenience-details">
                  <div className="detail-row"><span>Base Amount</span><span>Rs. {(convenienceFees * 0.85).toFixed(2)}</span></div>
                  <div className="detail-row"><span>Central GST (CGST) @ 9%</span><span>Rs. {(convenienceFees * 0.075).toFixed(2)}</span></div>
                  <div className="detail-row"><span>State GST (SGST) @ 9%</span><span>Rs. {(convenienceFees * 0.075).toFixed(2)}</span></div>
                </div>
              )}
            </div>


            <hr className="divider" />

            <div className="subtotal-text-line">
              <span>Sub total</span>
            </div>
            <div className="subtotal-amount">Rs.{subTotal.toFixed(2)}</div>

            <div className="donation-box">
              <div className="donate-top">
                <div className="donate-left">
                  <img src="./Donate.png" alt="Donate Icon" className="donate-icon" />
                  <span className="donate-title">Donate to BookAChange</span>
                </div>
                <div className="donate-right">
                  <span className="donate-price">Rs. 0</span>
                </div>
              </div>

              <div className="donate-subrow">
                <span className="donate-subtext">(₹1 per ticket has been added)</span>
                <span className="add-link" onClick={() => setDonate(!donate)}>
                  {donate ? "Remove Rs. 1" : "Add Rs. 1"}
                </span>
              </div>

              <div className="donate-tnc">VIEW T&C</div>
            </div>

            <div className="state-note">
              Your current state is <span className="state-name">Maharashtra</span>
            </div>
            <div className="amount-box">
              <span className="amount-label">Amount Payable</span>
              <span className="amount-value">Rs.{subTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* this scetion for Donation and Total............................ */}

          <div className="final-section">
            <div className="ticket-container">

              <h2 className="ticket-heading">SELECT TICKET TYPE</h2>

              <div className="ticket-options">
                <div
                  className={`ticket-option ${selectedType === 'm-ticket' ? 'selected' : ''}`}
                  onClick={() => setSelectedType('m-ticket')}
                >
                  <div className="left">
                    <img src="https://img.icons8.com/ios-filled/24/credit-card.png" alt="icon" />
                    <span>M-Ticket</span>
                  </div>
                  <input
                    type="radio"
                    name="ticketType"
                    checked={selectedType === 'm-ticket'}
                    onChange={() => setSelectedType('m-ticket')}
                  />
                </div>

                <div
                  className={`ticket-option ${selectedType === 'box-office' ? 'selected' : ''}`}
                  onClick={() => setSelectedType('box-office')}
                >
                  <div className="left">
                    <img src="https://img.icons8.com/ios-filled/24/cinema-.png" alt="icon" />
                    <span>Box Office Pickup</span>
                  </div>
                  <input
                    type="radio"
                    name="ticketType"
                    checked={selectedType === 'box-office'}
                    onChange={() => setSelectedType('box-office')}
                  />
                </div>
              </div>

              <p className="info-text">
                Show the m-ticket QR Code on your mobile to enter the cinema.
              </p>

              <p className="consent-text">
                <span>ℹ️</span> By proceeding, I express my consent to complete this transaction.
              </p>

              <div className="total-sectionz">
                <span className="total-text">TOTAL: Rs.{subTotal.toFixed(2)}</span>
                <button className="proceed-btn">Proceed</button>
              </div>

              <p className="cancel-note">
                You can cancel the tickets 20 min(s) before the show. Refunds will be done according to
                <span className="cancel-link"> Cancellation Policy</span>
              </p>
            </div>

          </div>
        </div>
      </div>














    </>
  );
}

export default BookingSummary;
