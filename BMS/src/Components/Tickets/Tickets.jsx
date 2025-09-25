import "../../css/Tickets.css";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { FiShare2 } from "react-icons/fi";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import TicketModal from "./TicketModal"; // ✅ Importing the modal
import Footer from "../Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";

function Tickets() {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const {
    paymentId,
    title,
    theaterName,
    releaseDate,
    time,
    seatGroups,
    totalTicketPrice,
    convenienceFees,
    subTotal,
    navLanguage,
    navScreen,
    navRating,
    image
  } = location.state || {};

  // console.log("Received Data:", image)

  const totalTickets = Object.values(seatGroups || {}).reduce((acc, group) => acc + group.length, 0);

  const seatInfo = Object.entries(seatGroups || {}).map(([category, seats]) => {
    const seatNames = seats
      .map(seat => seat.seatId)  // seatId use karo name ki jagah
      .filter(id => id && id.trim() !== "")
      .join(", ");

    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
    return `${formattedCategory} - ${seatNames}`;
  });



  const handleOverlayClick = (e) => {
    if (
      e.target.classList.contains("modal-ticket-overlay") ||
      e.target.classList.contains("modal-ticket-divider")
    ) {
      setShowModal(false);
    }
  };


  return (
    <>

      {/* This section Code For Mobile View................................................... */}
      <div className="ticket-wrapper-mobile">
        <div className="ticket-top-sec">
          <div className="ticket-left-mobile">
            <h3>Your Ticket</h3>
            <span className="ticket-share"><FiShare2 /></span>
          </div>
          <span className="ticket-cancel" onClick={() => navigate("/")}><MdOutlineCancel /></span>
        </div>

        <div className="ticket-content-container">
          <div className="ticket-box">
            <div className="ticket-box-header">
              <img src={image} alt="Poster" />
              <div className="ticket-box-details">
                <h2>{title}</h2>
                <p className="ticket-cert">({navRating})</p>
                <p>{navLanguage}, {navScreen}</p>
                <p>Sun, {releaseDate} | {time}</p>
                <p>{theaterName}</p>
              </div>
            </div>

            <div className="ticket-box-action" onClick={() => setShowModal(true)}>
              Tap for support, details & more actions
            </div>

            <div className="ticket-box-body">
              <div className="ticket-body-content">
                {/* Left: QR Code */}
                <div className="ticket-qr">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?data=T9ADJRN&size=100x100" alt="QR Code" />
                </div>

                {/* Right: Ticket Info */}
                <div className="ticket-details">
                  <p>{totalTickets} Ticket(s)</p>
                  <h3>SCREEN 2</h3>
                  {seatInfo.map((info, index) => (
                    <p key={index}>{info}</p>
                  ))}
                  <p className="ticket-booking-id">BOOKING ID: T9ADJRN</p>
                </div>
              </div>
            </div>

            <div className="ticket-box-footer">
              <p className="ticket-cancel-info">
                Cancellation unavailable : cut-off time of 20 minutes before showtime has passed
              </p>
            </div>

            <div className="ticket-box-amount">
              <span>Total Amount</span>
              <span>₹ 1.00</span>
            </div>
          </div>
        </div>

        <div className="rate-movie-button">
          <span className="rate-icon">⭐</span>
          <span className="rate-text">Rate Movie</span>
        </div>


      </div>

      <div className="mobile-ticket-right">
        <div className="ticket-card ticket-reward-card">
          <p className="ticket-reward-title">You've won 1 Reward!</p>
          <img src="./reward.png" alt="reward" />
          <p className="ticket-reward-open">Tap to open</p>
        </div>

        <div className="ticket-card ticket-food-card">
          <p className="ticket-food-title">Pre-order your snacks to enjoy the movie!</p>
          <img src="./bevarages.png" alt="food" />
        </div>

        <div className="ticket-card ticket-stream-card">
          <p className="ticket-stream-title">Watch latest Movie Direct To BMS Stream</p>
          <img src="./stream.png" alt="stream" />
        </div>

        <div className="web-logo">
          <img src="./logo.png" alt="" />
        </div>


        {/* ✅ Use TicketModal here */}
        <TicketModal
          showModal={showModal}
          setShowModal={setShowModal}
          handleOverlayClick={handleOverlayClick}
          title={title}
          theaterName={theaterName}
          releaseDate={releaseDate}
          time={time}
          seatGroups={seatGroups}
          totalTicketPrice={totalTicketPrice}
          convenienceFees={convenienceFees}
          subTotal={subTotal}
          navLanguage={navLanguage}
          navScreen={navScreen}
          navRating={navRating}
          image={image}
        />

      </div>








      {/* This Section Code For Desktop View.......................................... */}
      <div className="ticket-desktop-view">
        <Navbar />
        <div className="ticket-wrapper">
          <div className="ticket-left">
            <div className="ticket-header-top">
              <span className="ticket-back-icon" onClick={() => navigate("/")}><IoIosArrowBack /></span>
              <h1 className="ticket-sec-title">Your Ticket</h1>
              <span className="ticket-share-icon"><CiShare2 /></span>
            </div>

            <div className="ticket-scan-banner">
              <img src="https://in.bmscdn.com/moviesmaster/ptm/web-ptm-ticket-banner.gif" alt="scan-code" />
            </div>

            <div className="ticket-content-container">
              <div className="ticket-box">
                <div className="ticket-box-header">
                  <img src={image} alt="Trailers Screening Show" />
                  <div className="ticket-box-details">
                    <h2>{title}</h2>
                    <p className="ticket-cert">({navRating})</p>
                    <p>{navLanguage}, {navScreen}</p>
                    <p>Sun, {releaseDate} | {time}</p>
                    <p>{theaterName}</p>
                  </div>
                </div>

                <div className="ticket-box-action" onClick={() => setShowModal(true)}>
                  Tap for support, details & more actions
                </div>

                <div className="ticket-box-body">
                  <p>{totalTickets} Ticket(s)</p>
                  <h3>SCREEN 2</h3>
                  {seatInfo.map((info, index) => (
                    <p key={index}>{info}</p>
                  ))}
                  <p className="ticket-booking-id">BOOKING ID: T9ADJRN</p>
                </div>

                <div className="ticket-box-footer">
                  <p className="ticket-cancel-info">
                    Cancellation unavailable : cut-off time of 20 minutes before showtime has passed
                  </p>
                </div>

                <div className="ticket-box-amount">
                  <span>Total Amount</span>
                  <span>₹ {subTotal}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="ticket-right">
            <div className="ticket-card ticket-reward-card">
              <p className="ticket-reward-title">You've won 1 Reward!</p>
              <img src="./reward.png" alt="reward" />
              <p className="ticket-reward-open">Tap to open</p>
            </div>

            <div className="ticket-card ticket-food-card">
              <p className="ticket-food-title">Pre-order your snacks to enjoy the movie!</p>
              <img src="./bevarages.png" alt="food" />
            </div>

            <div className="ticket-card ticket-stream-card">
              <p className="ticket-stream-title">Watch latest Movie Direct To BMS Stream</p>
              <img src="./stream.png" alt="stream" />
            </div>

            <div className="web-logo">
              <img src="./logo.png" alt="" />
            </div>

          </div>
        </div>


        {/* ✅ Use TicketModal here */}
        <TicketModal
          showModal={showModal}
          setShowModal={setShowModal}
          handleOverlayClick={handleOverlayClick}
          title={title}
          theaterName={theaterName}
          releaseDate={releaseDate}
          time={time}
          seatGroups={seatGroups}
          totalTicketPrice={totalTicketPrice}
          convenienceFees={convenienceFees}
          subTotal={subTotal}
          navLanguage={navLanguage}
          navScreen={navScreen}
          navRating={navRating}
          image={image}
        />

        <div className="ticket-footer-section">
          <h3>Privacy Note</h3>
          <p>By using www.bookmyshow.com(our website), you are fully accepting the Privacy Policy available at  governing your access to Bookmyshow and provision of services by Bookmyshow to you. If you do not accept terms mentioned in the , you must not share any of your personal information and immediately exit Bookmyshow. </p>
        </div>

        <Footer />
      </div>


    </>
  );
}

export default Tickets;
