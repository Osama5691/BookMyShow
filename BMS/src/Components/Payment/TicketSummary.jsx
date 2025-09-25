import "../../css/TicketSummary.css";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";


const TicketSummary = ({
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
}) => {

  // console.log(ticketPrices)


  const totalTickets = Object.values(seatGroups || {}).reduce((acc, group) => acc + group.length, 0);

  const seatInfo = Object.entries(seatGroups || {}).map(([category, seats]) => {
    const seatNames = seats
      .map(seat => seat.seatId)  // seatId use karo name ki jagah
      .filter(id => id && id.trim() !== "")
      .join(", ");

    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
    return `${formattedCategory} - ${seatNames}`;
  });



  // console.log("seatGroups: ", seatGroups);


  const [donate, setDonate] = useState(false);



  return (

    <div className="summary-container">
      <div className="summary-header">
        <h2 className="summary-title">ORDER SUMMARY</h2>
        <div className="summary-ticket-box">
          <div className="summary-ticket-count">{totalTickets}</div>
          <div className="summary-ticket-label">Tickets</div>
        </div>
      </div>

      <div className="summary-movie-details">
        <div className="summary-movie-title">{title} ({navRating})</div>
        <div className="summary-language-format">{navLanguage}, {navScreen}</div>
        <div className="summary-theatre">
          {theaterName}<br />(AUDI 6)
        </div>
        <div className="summary-ticket-type">M-Ticket</div>
        <div className="summary-seat-info">
          {seatInfo.map((info, index) => (
            <div key={index}>{info}</div>
          ))}
        </div>
        <div className="summary-date-time">
          Sat, {releaseDate}<br />
          {time}
        </div>
      </div>

      <hr className="summary-divider" />

      <div className="summary-price-row">
        <span className="summary-label">Sub Total</span>
        <span className="summary-price">Rs.{totalTicketPrice}</span>
      </div>

      <div className="summary-fees-row">
        <span className="summary-fees-label">+ Convenience fees</span>
        <span className="summary-fees-price">Rs. {convenienceFees}</span>
      </div>

      <div className="summary-tax-info">
        <p className="summary-tax-toggle">Show tax breakup</p>
        <span className="summary-tax-icon"><MdKeyboardArrowDown /></span>
      </div>

      <div className="summary-donation-box">
        <div className="summary-donation-header">
          <div className="summary-donation-left">
            <img src="./Donate.png" alt="Donate Icon" className="summary-donation-icon" />
            <span className="summary-donation-title">Donate to BookAChange</span>
          </div>
          <div className="summary-donation-right">
            <span className="summary-donation-amount">Rs. 0</span>
          </div>
        </div>

        <div className="summary-donation-subrow">
          <span className="summary-donation-note">(₹1 per ticket has been added)</span>
          <span
            className="summary-donation-toggle"
            onClick={() => setDonate(!donate)}
          >
            {donate ? "Remove Rs. 1" : "Add Rs. 1"}
          </span>
        </div>

        <div className="summary-donation-tnc">VIEW T&C</div>
      </div>

      <div className="summary-total-box">
        <span className="summary-total-label">Amount Payable</span>
        <span className="summary-total-amount">Rs. {subTotal}</span>
      </div>
    </div>



  );
};

export default TicketSummary;
