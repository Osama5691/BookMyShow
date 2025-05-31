import React, { useState, useEffect } from 'react';
import "../../css/SelectSeats.css";
import { FaWheelchair } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const SelectSeats = ({ selectedSeats, setShowPriceButton , title, theaterName, time, format , releaseDate }) => {
  const [selectedSeatIds, setSelectedSeatIds] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPayButton, setShowPayButton] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigate = useNavigate();

    // console.log("Format in SelectSeatNav:", releaseDate); // 👈 yeh add karo



const handlePayClick = () => {
  const seatDetails = selectedSeatIds.map((seatId) => {
    const row = seatId.split("-")[0];
    let category = '';
    if (reclinerSeats.find(([label]) => label === row)) category = 'RECLINER';
    else if (primeSeats.find(([label]) => label === row)) category = 'PRIME';
    else if (classicSeats.find(([label]) => label === row)) category = 'CLASSIC';
    return {
      seatId,
      category,
      price: getSeatPrice(seatId)
    };
  });

  navigate('/booking-summary', {
    state: {
      title,
      theaterName,
      time,
      format,
      releaseDate,
      seatDetails,
      totalAmount
    }
  });
};
  

  const bestsellerSeats = ['M-4', 'M-5', 'M-12', 'M-13' , 'G-10', 'G-11', 'H-12', 'H-13'];
  const handicapSeats = ['D-18', 'D-19', 'D-4', 'D-5', 'D-16', 'D-17'];
  const reclinerSeats = [['M', 17]];
  const primeSeats = [['L', 21], ['K', 21], ['J', 21], ['H', 21], ['G', 21], ['F', 21], ['E', 21], ['D', 21], ['C', 14]];
  const classicSeats = [['B', 18], ['A', 18]];

  // 🧠 Define seat prices by row
  const seatPrices = {
    recliner: 410,
    prime: 230,
    classic: 210
  };

  const getSeatPrice = (seatId) => {
    const row = seatId.split("-")[0];
    if (reclinerSeats.find(([label]) => label === row)) return seatPrices.recliner;
    if (primeSeats.find(([label]) => label === row)) return seatPrices.prime;
    if (classicSeats.find(([label]) => label === row)) return seatPrices.classic;
    return 0;
  };

  const totalAmount = selectedSeatIds.reduce((acc, id) => acc + getSeatPrice(id), 0);

  const toggleSeat = (seatId) => {
  let updatedSeats;

  // If seat already selected, remove it
  if (selectedSeatIds.includes(seatId)) {
    updatedSeats = selectedSeatIds.filter(id => id !== seatId);
  } else {
    // If seat not selected and limit not reached, add it
    if (selectedSeatIds.length >= selectedSeats) return;
    updatedSeats = [...selectedSeatIds, seatId];
  }

  setSelectedSeatIds(updatedSeats);

  // Show price button if there's at least 1 seat selected
  setShowPriceButton(updatedSeats.length > 0);

  // Show success if all seats are selected
  setShowSuccess(updatedSeats.length === selectedSeats);

  // Hide pay button if not all seats are selected
  setShowPayButton(updatedSeats.length === selectedSeats ? false : false);
};

  


  useEffect(() => {
    if (selectedSeatIds.length === selectedSeats && selectedSeats > 0) {
      setShowSuccess(true);
      setShowPayButton(false);

      const timeout = setTimeout(() => {
        setShowSuccess(false);
        setShowPayButton(true); // Show button after success message disappears
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [selectedSeatIds, selectedSeats]);

  const renderSeats = (label, count, extraClass = '') => {
    const isPrimeRow = count === 21;

    const leftSeats = isPrimeRow ? Array.from({ length: 3 }, (_, i) => i + 1) : [];
    const middleSeats = isPrimeRow ? Array.from({ length: 14 }, (_, i) => i + 4) : [];
    const rightSeats = isPrimeRow ? Array.from({ length: 4 }, (_, i) => i + 18) : [];
    const defaultSeats = Array.from({ length: count }, (_, i) => i + 1);

    const renderSeat = (rowLabel, seatNum) => {
      const seatId = `${rowLabel}-${seatNum}`;
      const isHandicap = handicapSeats.includes(seatId);
      const isSelected = selectedSeatIds.includes(seatId);
      const isBestseller = bestsellerSeats.includes(seatId);


      return (
        <div
          key={seatId}
          className={`seat ${isHandicap ? 'handicap' : ''} ${isSelected ? 'selected' : ''} ${isBestseller ? 'bestseller' : ''}`}
          onClick={() => toggleSeat(seatId)}
        >
          {isHandicap ? <FaWheelchair size={14} /> : seatNum}
        </div>
      );
    };

    return (
      <div className={`row ${extraClass}`} key={label}>
        <span className="row-label">{label}</span>
        <div className="seats-row">
          {isPrimeRow ? (
            <>
              <div className="seat-group left-group">{leftSeats.map((num) => renderSeat(label, num))}</div>
              <div className="seat-group middle-group">{middleSeats.map((num) => renderSeat(label, num))}</div>
              <div className="seat-group right-group">{rightSeats.map((num) => renderSeat(label, num))}</div>
            </>
          ) : (
            <div className="seat-group full-row">{defaultSeats.map((num) => renderSeat(label, num))}</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="seat-layout-container">
        <div className="section">
          <div className="section-title">Rs. 410 RECLINER</div>
          {reclinerSeats.map(([label, count]) => renderSeats(label, count))}
        </div>

        <div className="section">
          <div className="section-title">Rs. 230 PRIME</div>
          {primeSeats.map(([label, count]) =>
            renderSeats(label, count, label === 'C' ? 'gap-row' : '')
          )}
        </div>

        <div className="section">
          <div className="section-title">Rs. 210 CLASSIC</div>
          {classicSeats.map(([label, count]) => renderSeats(label, count))}
        </div>

        <div className="screen-note">
          <div className="screen-box"></div>
          <p>All eyes this way please!</p>
        </div>

        {showSuccess && (
          <div className="success-message">
            <h2>🎉 Awesome!</h2>
            <p>You’ve selected {selectedSeats} seat{selectedSeats > 1 ? "s" : ""}! Enjoy your show 🍿</p>
          </div>
        )}

        {showPayButton && (
          <div className="pay-button-wrapper">
            <button
              className="pay-button"
              onClick={() => {
                setShowTermsModal(true);
              
              }}
            >
              Pay Rs.{totalAmount}.00
            </button>
          </div>
        )}
      </div>


      {showTermsModal && (
        <div className="modal-overlay-tc">
          <div className="modal-tc">
            <h2>Terms & Conditions</h2>
            <ul className="terms-list">
              <li>1. Ticket is compulsory for children of 3 years & above.</li>
              <li>2. Person below the age of 18 years cannot be admitted for movies certified `A`.</li>
              <li>3. Items like laptops, cameras, knives, lighter, match box , cigarettes, firearms, and all types of inflammable objects are strictly prohibited.</li>
              <li>4. Items like carry-bags eatables , helmets , handbags are not allowed inside the theatres and are strictly prohibited. Kindly deposit at the baggage counter of mall/cinema.</li>
              <li>5. For 3D movies, ticket price includes charges towards usage of 3D glasses.</li>
              <li>6. Seat Layout Page for Cinepolis is for representational purpose only and actual seat layout might vary.</li>
              <li>7. Outside food & beverages are not allowed in the cinema premises.</li>
              <li>8. Decision(s) taken by Cinepolis management is final & abiding, Rights of Admissions reserved.</li>
              <li>9. Tickets once purchased cannot be cancelled, exchanged, or refunded.</li>
              <li>10. Cinepolis may contact the guest for the purpose of seeking feedback for improvement in services.</li>
            </ul>
            <div className="modal-actions-tc">
              <label>
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                />
                I agree to the Terms & Conditions
              </label>
              <div className="modal-buttons">
                <button
                  className="btn-accept"
                  disabled={!termsAccepted}
                  onClick={() => {
                    setShowTermsModal(false);
                    handlePayClick();
                  }}
                >
                  Accept
                </button>
                <button className="btn-cancel" onClick={() => setShowTermsModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}








    </>
  );
};

export default SelectSeats;
