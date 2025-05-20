import React from 'react';
import "../../css/SelectSeats.css";
import { FaPencil , FaWheelchair } from "react-icons/fa6";


const SelectSeats = () => {

  //Define handicap seat positions
  const handicapSeats = ['D-18', 'D-19', 'D-4', 'D-5' , 'D-16', 'D-17'];

  const reclinerSeats = [['M', 17]];
  const primeSeats = [['L', 21], ['K', 21], ['J', 21], ['H', 21], ['G', 21], ['F', 21], ['E', 21], ['D', 21], ['C', 14]];
  const classicSeats = [['B', 18], ['A', 18]];

  const renderSeats = (label, count, extraClass = '') => {
    const isPrimeRow = count === 21;

    const leftSeats = isPrimeRow ? Array.from({ length: 3 }, (_, i) => i + 1) : [];
    const middleSeats = isPrimeRow ? Array.from({ length: 14 }, (_, i) => i + 4) : [];
    const rightSeats = isPrimeRow ? Array.from({ length: 4 }, (_, i) => i + 18) : [];
    const defaultSeats = Array.from({ length: count }, (_, i) => i + 1);

     const renderSeat = (rowLabel, seatNum) => {
      const seatId = `${rowLabel}-${seatNum}`;
      const isHandicap = handicapSeats.includes(seatId);

    return (
        <div key={seatNum} className={`seat ${isHandicap ? 'handicap' : ''}`}>
          {isHandicap ? <FaWheelchair size={14} /> : seatNum}
        </div>
      );
    };

    return (
        <div className={`row ${extraClass}`}>
        <span className="row-label">{label}</span>
        <div className="seats-row">
          {isPrimeRow ? (
            <>
              <div className="seat-group left-group">
                {leftSeats.map((num) => renderSeat(label, num))}
              </div>
              <div className="seat-group middle-group">
                {middleSeats.map((num) => renderSeat(label, num))}
              </div>
              <div className="seat-group right-group">
                {rightSeats.map((num) => renderSeat(label, num))}
              </div>
            </>
          ) : (
            <div className="seat-group full-row">
              {defaultSeats.map((num) => renderSeat(label, num))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
        
        
      <div className="seat-layout-container">
        {/* Recliner Section */}
        <div className="section">
          <div className="section-title">Rs. 410 RECLINER</div>
          {reclinerSeats.map(([label, count]) => renderSeats(label, count))}
        </div>

        {/* Prime Section */}
        <div className="section">
          <div className="section-title">Rs. 230 PRIME</div>
          {primeSeats.map(([label, count], index) => 
            renderSeats(label, count, label === 'C' ? 'gap-row' : '') // Add space below row C
          )}
        </div>

        {/* Classic Section */}
        <div className="section">
          <div className="section-title">Rs. 210 CLASSIC</div>
          {classicSeats.map(([label, count]) => renderSeats(label, count))}
        </div>

        <div className="screen-note">
  <div className="screen-box"></div>
  <p>All eyes this way please!</p>
</div>

      </div>
    </>
  );
};

export default SelectSeats;
