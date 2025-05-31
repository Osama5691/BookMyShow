import "../../css/Snacks.css"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";


function Snacks() {
  const [showDetails, setShowDetails] = useState(false);
  const [donationAdded, setDonationAdded] = useState(false); // Track donation state

  const location = useLocation();

  const { title, time, theaterName, releaseDate, seatGroups, convenienceFees, } = location.state || {};


  // Calculate totals
  const totalSeats = Object.values(seatGroups).reduce((acc, seats) => acc + seats.length, 0);
  const totalSeatPrice = Object.values(seatGroups).reduce(
    (acc, seats) => acc + seats.reduce((sum, seat) => sum + seat.price, 0),
    0
  );

  // Add ₹1 if donation is added
  const donationAmount = donationAdded ? 1 : 0;

  const subtotal = totalSeatPrice + convenienceFees + donationAmount;


  return (
    <>

      <div className="booking-containerz">
        <div className="header">
          <span className="back-arrow"><MdOutlineKeyboardArrowLeft /></span>
          <span className="title">Confirm booking</span>
        </div>

        <div className="booking-card">
          <div className="movie-details">
            <div className="movie-title-row">
              <h3 className="movie-title">{title}</h3>
              <span className="ticket-count">{totalSeats}</span>
              <span className="m-ticket">🎟 M-Ticket</span>
            </div>
            <div className="showtime">
              Sat, {releaseDate} | {time}
            </div>
            <div className="ticket-type">
              Hindi (2D)

            </div>
            <div className="venue">
              {theaterName} (AUDI 6)
            </div>
          </div>

          <div className="cancellation-box">
            <strong>Cancellation Available</strong>
            <p>
              This venue supports booking cancellation only upto 20 min(s) prior to show time.
            </p>
          </div>
        </div>
        <div className="order-summary-container">
          <div className="row">
            <span>Ticket(s) price</span>
            <span className="amount">₹{totalSeatPrice.toFixed(2)}</span>
          </div>
          <div className="convenience-section-mobile">
            <div className="convenience-header-mobile" onClick={() => setShowDetails(!showDetails)}>
              <div className="left-flex">
                <span className="arrow-iconz">{showDetails ? <CiCircleChevUp /> : <CiCircleChevDown />}</span>
                <span className="conn-titlez">Convenience fees</span>
              </div>
              <span className="pricesz">₹{convenienceFees}</span>
            </div>

            {showDetails && (
              <div className="convenience-details">
                <div className="detail-rows"><span>Base Amount</span><span>Rs. 40.00</span></div>
                <div className="detail-rows"><span>Central GST (CGST) @ 9%</span><span>Rs. 3.60</span></div>
                <div className="detail-rows"><span>State GST (SGST) @ 9%</span><span>Rs. 3.60</span></div>
              </div>
            )}
          </div>


          <div className="row donate-row">
            <div className="donate-text">
              <img
                src="https://img.icons8.com/fluency/24/heart-with-pulse.png"
                alt="donate"
                className="donate-icon"
              />
              <div>
                <div className="donate-main">Donate to BookAChange</div>
                <div className="donate-sub">(₹1 per ticket) <span className="view-tnc">VIEW T&C</span></div>
              </div>
            </div>
            <div className="donate-actions">
              <div className="amount">₹{donationAmount.toFixed(2)}</div>
              <div className="add-link"
                onClick={() => setDonationAdded(!donationAdded)}
                style={{ cursor: "pointer", color: donationAdded ? "green" : "blue" }}
              >{donationAdded ? "Remove ₹1.00" : "Add ₹1.00"}</div>
            </div>
          </div>

          <hr />

          <div className="row total-row">
            <span>Order total</span>
            <span className="amount">{subtotal.toFixed(2)}</span>
          </div>
        </div>
        <div className="details-section">
          <div className="details-header">
            <div>
              <strong>Your details</strong>{" "}
              <span className="subtext">(For sending booking details)</span>
            </div>
            <div className="edit-text">✎ Edit</div>
          </div>
          <div className="user-info">
            <div>osamachaudhary5691@gmail.com</div>
            <div>7499406023 | Maharashtra</div>
          </div>
        </div>

        <div className="apply-offers">
          <img
            src="https://img.icons8.com/emoji/16/star-emoji.png"
            alt="star"
            className="offer-icon"
          />
          <span>Apply Offers</span>
          <span className="arrow">›</span>
        </div>

        <div className="consent-box">
          By proceeding, I express my consent to complete this transaction.
        </div>

      </div>

      <div className="bottom-summary-bar">
        <div className="total-sec">
          <div className="total-label">Total</div>
          <div className="total-amount">₹{subtotal.toFixed(2)}</div>
        </div>
        <button className="continue-button">Continue</button>
      </div>





    </>
  )
}


export default Snacks;