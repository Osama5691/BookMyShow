import React, { useState } from 'react';
import '../../css/FilterModel.css';

const FilterModel = ({ onClose }) => {
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedTimes, setSelectedTimes] = useState([]);

  const priceRanges = [
    "₹0 - ₹100", "₹101 - ₹200", "₹201 - ₹300", "₹301 - ₹400", "₹401 - ₹500",
    "₹501 - ₹600", "₹601 - ₹700", "₹701 - ₹800", "₹801 - ₹900", "₹901 - ₹1000",
    "₹1001 - ₹1100", "₹1101 - ₹1200", "₹1201 - ₹1300", "₹1301 - ₹1400", "₹1401 - ₹1500"
  ];

  const timeSlots = [
  { label: 'Morning', time: '12:00 AM - 11:59 AM', value: 'morning', icon: '🌅' },
  { label: 'Afternoon', time: '12:00 PM - 3:59 PM', value: 'afternoon', icon: '🌤️' },
  { label: 'Evening', time: '4:00 PM - 6:59 PM', value: 'evening', icon: '🌇' },
  { label: 'Night', time: '7:00 PM - 11:59 PM', value: 'night', icon: '🌙' }
];


  const togglePrice = (range) => {
    setSelectedPrices(prev =>
      prev.includes(range) ? prev.filter(p => p !== range) : [...prev, range]
    );
  };

  const toggleTime = (value) => {
    setSelectedTimes(prev =>
      prev.includes(value) ? prev.filter(t => t !== value) : [...prev, value]
    );
  };

  const handleReset = () => {
    setSelectedPrices([]);
    setSelectedTimes([]);
  };

  const handleApply = () => {
    console.log("Applied Filters:", { selectedPrices, selectedTimes });
    onClose(); // close modal
  };

  return (
    
    <div className="filter-modal">
  <div className="filter-box">
    <div className="content-section">
      <h3>Filters</h3>

      <div className="section">
        <p className="section-title">PRICE RANGE</p>
        <div className="price-options">
          {priceRanges.map((range, idx) => (
            <button
              key={idx}
              className={`price-btnz ${selectedPrices.includes(range) ? 'selected' : ''}`}
              onClick={() => togglePrice(range)}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
  <p className="section-title">PREFERRED TIME</p>
  <div className="time-options">
    {timeSlots.map((slot, idx) => (
      <label key={idx} className="time-slot">
        <div className="time-slot-container">
          <div className="time-slot-left">
            <span className="time-icon">{slot.icon}</span>
            <div className="time-text">
              <span className="slot-label">{slot.label}</span>
              <span className="slot-time">{slot.time}</span>
            </div>
          </div>
          <input
            type="checkbox"
            checked={selectedTimes.includes(slot.value)}
            onChange={() => toggleTime(slot.value)}
            className="time-checkbox"
          />
        </div>
      </label>
    ))}
  </div>
</div>

    </div>

    <div className="filter-buttons">
      <button className="reset-btn" onClick={handleReset}>Reset</button>
      <button className="apply-btn" onClick={handleApply}>Apply Filters</button>
    </div>
  </div>
</div>

  );
};

export default FilterModel;
