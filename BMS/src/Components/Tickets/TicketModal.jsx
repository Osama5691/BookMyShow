import React from "react";
import "../../css/TicketModal.css"

const TicketModal = ({ showModal, setShowModal, handleOverlayClick, title, theaterName, releaseDate, time, seatGroups, totalTicketPrice, convenienceFees, subTotal, navLanguage, navScreen, navRating, image }) => {
    if (!showModal) return null;


    const totalTickets = Object.values(seatGroups || {}).reduce((acc, group) => acc + group.length, 0);

    const seatInfo = Object.entries(seatGroups || {}).map(([category, seats]) => {
        const seatNames = seats
            .map(seat => seat.seatId)  // seatId use karo name ki jagah
            .filter(id => id && id.trim() !== "")
            .join(", ");

        const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
        return `${formattedCategory} - ${seatNames}`;
    });


    return (
        <div className="modal-ticket-overlay" onClick={handleOverlayClick}>
            <div className="modal-ticket-card">
                {/* Circle Cuts */}
                <div className="modal-cut modal-cut-left"></div>
                <div className="modal-cut modal-cut-right"></div>
                <div className="modal-cut modal-cut-left-bottom"></div>
                <div className="modal-cut modal-cut-right-bottom"></div>

                <div className="modal-ticket-content">
                    <div className="modal-ticket-header">
                        <img
                            src={image}
                            alt="Poster"
                        />
                        <div>
                            <h2>{title}</h2>
                            <h2>({navRating})</h2>
                            <div className="modal-desc">
                                <p>{navLanguage}, {navScreen}</p>
                                <p>Sun, {releaseDate} | {time}</p>
                                <p>{theaterName}</p>
                            </div>
                        </div>
                    </div>

                    <div className="modal-ticket-divider" onClick={() => setShowModal(false)}>
                        Tap to hide details
                    </div>

                    <div className="modal-ticket-info">
                        <p>{totalTickets} Ticket(s)</p>
                        <h3>SCREEN 2</h3>
                        {seatInfo.map((info, index) => (
                            <p key={index}>{info}</p>
                        ))}
                        <strong>BOOKING ID: T9ADJRN</strong>
                    </div>

                    <div className="modal-ticket-note">
                        Cancellation unavailable : cut-off time of 20 minutes before showtime has passed
                    </div>

                    <div className="modal-ticket-support">
                        📞<br />Contact<br />support
                    </div>

                    <div className="modal-ticket-footer">
                        <div className="modal-footer-row-total-amt"><span>Total Amount</span><span>₹ {subTotal}</span></div>
                        <div className="modal-footer-row"><span>Ticket(s) price (1)</span><span>₹ {totalTicketPrice}</span></div>
                        <div className="modal-footer-row"><span>Convenience fee</span><span>₹ {convenienceFees}</span></div>
                        <div className="modal-footer-row"><span>Discount</span><span>- ₹ 0.00</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketModal;
