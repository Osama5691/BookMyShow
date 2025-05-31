import React from "react";
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../../css/SelectTheater.css"
import { FaHeart } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";


const theaters = [
  {
    name: "Cinepolis: Nexus Seawoods, Navi Mumbai",
    cancellable: true,
    timings: [
      { time: "09:30 AM", format: "DOLBY 7.1" },
      { time: "10:00 AM", format: "DOLBY 7.1" },
      { time: "10:35 AM", format: "DOLBY 7.1" },
      { time: "11:10 AM", format: "DOLBY 7.1" },
      { time: "12:05 PM", format: "DOLBY 7.1" },
      { time: "12:35 PM", format: "DOLBY 7.1" },
      { time: "01:00 PM", format: "DOLBY 7.1" },
      { time: "01:35 PM", format: "DOLBY 7.1" },
      { time: "03:05 PM", format: "DOLBY 7.1" },
      { time: "03:40 PM", format: "DOLBY 7.1" },
      { time: "04:00 PM", format: "DOLBY 7.1" },
      { time: "04:35 PM", format: "DOLBY 7.1" },
      { time: "06:05 PM", format: "DOLBY 7.1" },
      { time: "07:00 PM", format: "DOLBY 7.1" },
      { time: "07:30 PM", format: "DOLBY 7.1" },
      { time: "07:35 PM", format: "DOLBY 7.1" },
      { time: "09:30 PM", format: "DOLBY 7.1" },
      { time: "10:00 PM", format: "DOLBY 7.1" },

    ],
  },
  {
    name: "PVR: The Capital Mall, Nalasopara(E) ",
    cancellable: false,
    timings: [
      { time: "09:00 AM", format: "DOLBY 7.1" },
      { time: "09:50 AM", format: "ATMOS SCREEN" },
      { time: "10:30 AM", format: "DOLBY 7.1" },
      { time: "10:50 AM", format: "DOLBY 7.1" },
      { time: "11:45 AM", format: "DOLBY 7.1" },
      { time: "12:35 PM", format: "ATMOS SCREEN" },
      { time: "01:30 PM", format: "DOLBY 7.1" },
      { time: "02:45 PM", format: "DOLBY 7.1" },
      { time: "03:35 PM", format: "ATMOS SCREEN" },
      { time: "04:30 PM", format: "DOLBY 7.1" },
      { time: "05:45 PM", format: "DOLBY 7.1" },
      { time: "06:35 PM", format: "ATMOS SCREEN" },
      { time: "08:15 PM", format: "DOLBY 7.1" },
      { time: "08:45 PM", format: "DOLBY 7.1" },
      { time: "09:35 PM", format: "ATMOS SCREEN" },
      { time: "11:15 PM", format: "DOLBY 7.1" },
    ],
  },

  {
    name: "Miraj Fun Fiesta Cinema, Nalasopara(W)",
    cancellable: false,
    timings: [
      { time: "09:00 AM", format: "DOLBY 7.1" },
      { time: "09:50 AM", format: "ATMOS SCREEN" },
      { time: "10:30 AM", format: "DOLBY 7.1" },
      { time: "10:50 AM", format: "DOLBY 7.1" },
      { time: "11:45 AM", format: "DOLBY 7.1" },
      { time: "12:35 PM", format: "ATMOS SCREEN" },
      { time: "01:30 PM", format: "DOLBY 7.1" },
      { time: "02:45 PM", format: "DOLBY 7.1" },
      { time: "03:35 PM", format: "ATMOS SCREEN" },
      { time: "04:30 PM", format: "DOLBY 7.1" },
      { time: "05:45 PM", format: "DOLBY 7.1" },
      { time: "06:35 PM", format: "ATMOS SCREEN" },
      { time: "08:15 PM", format: "DOLBY 7.1" },
      { time: "08:45 PM", format: "DOLBY 7.1" },
      { time: "09:35 PM", format: "ATMOS SCREEN" },
      { time: "11:15 PM", format: "DOLBY 7.1" },
    ],
  },
];

const SelectTheater = ({ movieTitle }) => {

  const [hideLower, setHideLower] = useState(false);
  const [hovered, setHovered] = useState({ theaterIndex: null, slotIndex: null });


  const navigate = useNavigate();
  const location = useLocation();

  const { releaseDate, } = location.state || {};




  const handleSlotClick = (time, format, theaterName,) => {
    navigate("/select-seats", {
      state: { title: movieTitle, time, format, theaterName, releaseDate: releaseDate, }
    });
  };


  return (
    <>
      <div className="booking-container">
        {theaters.map((theater, theaterIndex) => (
          <div className="theater-section" key={theaterIndex}>
            <div className="theater-left">
              <div className="theater-title">
                <FaHeart className="heart-icon" />
                <span>{theater.name}</span>
                <div className="info-wrapper">
                  <FaInfoCircle className="info-icon" />
                </div>
              </div>
              <p className="cancellation-text">
                {theater.cancellable ? "Cancellation available" : "Non-cancellable"}
              </p>
            </div>

            <div className="theater-right">
              {theater.timings.map((slot, slotIndex) => (
                <div
                  key={slotIndex}
                  className="time-card-wrapper"
                  onMouseEnter={() => setHovered({ theaterIndex, slotIndex })}
                  onMouseLeave={() => setHovered({ theaterIndex: null, slotIndex: null })}
                >
                  <div
                    className="time-card"
                    onClick={() => handleSlotClick(slot.time, slot.format, theater.name)}
                  >
                    <div className="time">{slot.time}</div>
                    <div className="format">{slot.format}</div>
                  </div>

                  {hovered.theaterIndex === theaterIndex && hovered.slotIndex === slotIndex && (
                    <div className="seat-typesz">
                      <div>
                        <div className="ratez">₹ 300.00</div>
                        <div className="typez">NORMAL</div>
                        <div className="availablezz">Available</div>
                      </div>
                      <div>
                        <div className="ratez">₹ 320.00</div>
                        <div className="typez">EXECUTIVE</div>
                        <div className="availablezz">Available</div>
                      </div>
                      <div>
                        <div className="ratez">₹ 340.00</div>
                        <div className="typez">PREMIUM</div>
                        <div className="availablezz">Available</div>
                      </div>
                      <div>
                        <div className="ratez">₹ 540.00</div>
                        <div className="typez">VIP</div>
                        <div className="availablezz">Available</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {!hideLower && (
          <div className="lower">
            <div className="left">
              <h5>
                Mark Favourite Cinemas by tapping on the <span><CiHeart /></span>
              </h5>
              <button onClick={() => setHideLower(true)}>Got It</button>
            </div>
          </div>
        )}
      </div>

    </>
  );
};

export default SelectTheater;
