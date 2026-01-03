import "../../css/Payment.css"
import { FaPencilAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useState, useEffect } from "react";
import TicketSummary from "./TicketSummary";
import axios from "axios";
import PaymentOptions from "./PaymentOptions";
import { useLocation, useNavigate } from "react-router-dom";
import useExitModal from "../../hooks/useExitModal";
import ExitModal from "../ExitModal/ExitModal";


const payOptions = [
    {
        icon: 'https://assets-in.bmscdn.com/paymentcms/category/rz_ios.png?14032020202847',
        label: 'Pay by any UPI App',
    },
    {
        icon: 'https://img.icons8.com/ios-filled/50/000000/bank-card-back-side.png',
        label: 'Debit/Credit Card',
    },
    {
        icon: 'https://assets-in.bmscdn.com/paymentcms/category/mw_ios.png',
        label: 'Mobile Wallets',
    },
    {
        icon: 'https://img.icons8.com/ios-filled/50/FF4081/gift--v1.png',
        label: 'Gift Voucher',
    },
    {
        icon: 'https://img.icons8.com/ios-filled/50/616161/computer.png',
        label: 'Net Banking',
    },
    {
        icon: 'https://assets-in.bmscdn.com/paymentcms/category/pl_ios.png?08112018125404',
        label: 'Pay Later',
    },
];


function Payment() {
    const [responseId, setResponseId] = useState("");
    
    const navigate = useNavigate();
    const location = useLocation();
    const { showExitModal, setShowExitModal, handleConfirmExit, loading } = useExitModal();
    

    // Data Fallback from localStorage
    const title = location.state?.title || localStorage.getItem("paymentTitle") || "";
    const theaterName = location.state?.theaterName || localStorage.getItem("paymentTheater") || "";
    const releaseDate = location.state?.releaseDate || localStorage.getItem("paymentReleaseDate") || "";
    const time = location.state?.time || localStorage.getItem("paymentTime") || "";
    const seatGroups = location.state?.seatGroups || JSON.parse(localStorage.getItem("paymentSeatGroups") || "[]");
    const totalTicketPrice = location.state?.totalTicketPrice || localStorage.getItem("paymentTotalPrice") || "";
    const convenienceFees = location.state?.convenienceFees || localStorage.getItem("paymentConvenienceFees") || "";
    const subTotal = location.state?.subTotal || localStorage.getItem("paymentSubTotal") || "";
    const navLanguage = location.state?.navLanguage || localStorage.getItem("paymentLanguage") || "";
    const navScreen = location.state?.navScreen || localStorage.getItem("paymentScreen") || "";
    const navRating = location.state?.navRating || localStorage.getItem("paymentRating") || "";
    const image = location.state?.image || localStorage.getItem("paymentImage") || "";

    // Save to localStorage
    useEffect(() => {
        if (title) localStorage.setItem("paymentTitle", title);
        if (theaterName) localStorage.setItem("paymentTheater", theaterName);
        if (releaseDate) localStorage.setItem("paymentReleaseDate", releaseDate);
        if (time) localStorage.setItem("paymentTime", time);
        if (seatGroups) localStorage.setItem("paymentSeatGroups", JSON.stringify(seatGroups));
        if (totalTicketPrice) localStorage.setItem("paymentTotalPrice", totalTicketPrice);
        if (convenienceFees) localStorage.setItem("paymentConvenienceFees", convenienceFees);
        if (subTotal) localStorage.setItem("paymentSubTotal", subTotal);
        if (navLanguage) localStorage.setItem("paymentLanguage", navLanguage);
        if (navScreen) localStorage.setItem("paymentScreen", navScreen);
        if (navRating) localStorage.setItem("paymentRating", navRating);
        if (image) localStorage.setItem("paymentImage", image);
    }, [title, theaterName, releaseDate, time, seatGroups, totalTicketPrice, convenienceFees, subTotal, navLanguage, navScreen, navRating, image]);

    

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");

            script.src = src;

            script.onload = () => {
                resolve(true);
            }
            script.onerror = () => {
                resolve(false);
            }

            document.body.appendChild(script);
        });
    };


    const createRazorPayOrder = (amount) => {
        console.log("💰 Creating order with amount:", amount);  // Add this
        let data = JSON.stringify({
            amount: amount * 100,
            currency: "INR"
        });

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "http://localhost:5000/api/orders",
            headers: {
                "content-Type": "application/json",
            },
            data: data
        }

        axios.request(config)
            .then((response) => {
                // console.log(JSON.stringify(response));
                handleRazorpayScreen(response.data.amount);
            })
            .catch((error) => {
                console.log("Error at", error)
            })
    }

    const handleRazorpayScreen = async (amount) => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if (!res) {
            alert("some Error at razorPay Screen Loading.");
            return;
        }

        const options = {
            key: "rzp_test_RSE0MAxRUsRJOA",
            amount: amount,
            currency: "INR",
            name: "BOOKMYSHOW",
            description: "payment to BOOKMYSHOW",
            image: "https://play-lh.googleusercontent.com/FPtxFPnbUNmOPvggNFaTUGPUr4DAb-djW6uWgG8lST76KTmZYko679Oh5g15gr4KAUZH",
            handler: function (response) {
                // console.log("✅ Payment successful!", response);
                setResponseId(response.razorpay_payment_id)

                navigate("/ticket-page", {
                    state: {
                        paymentId: response.razorpay_payment_id,
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
                    }
                });




            },
            profile: {
                name: "Osama Chaudhary",
                email: "Osamachaudhary5691@gmail.com"
            },
            theme: {
                color: "#8B5CF6"
            },


        }


        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    useEffect(() => {
        document.body.style.backgroundColor = "#f5f5f5";

        return () => {
            // Cleanup: reset body background when leaving page
            document.body.style.backgroundColor = "";
        };
    }, []);


    return (
        <>

        {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Exiting, please wait...</p>
        </div>
      )}


            {/* This is Mobile View Code Here....................................... */}

            <div className="payment-mobile-view">
                <div className="payment-wrapper">
                    <div className="payment-topbar">
                        <span className="payment-back-arrow"
                           onClick={() => setShowExitModal(true)}
                        >
                            <IoIosArrowBack /></span>
                        <span className="payment-title">Payment</span>
                    </div>
                    <div className="payment-amount-box">
                        <span>Total Amount</span>
                        <span>₹ {totalTicketPrice}</span>
                    </div>
                    <div className="payment-amount-content">
                        <span className="payment-amount-label">Amount Payable</span>
                        <span className="payment-amount-price">₹ {subTotal}</span>
                    </div>

                    <div className="preferred-options">
                        PREFERRED PAYMENTS
                    </div>
                </div>

                <div className="payment-options-wrapper">
                    <div className="preferred-payment-option">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBLlFEtwg5TN0kHmJ299cqrBfK4hbNd3Dhkw&s"
                            alt="Paytm logo"
                        />
                        <div className="payment-texts" >
                            <h3>RazorPay (Wallet | UPI | Saved Cards)</h3>
                            <p>Start Accepting Payments Instantly with Razorpay's Payment Suite. </p>
                        </div>
                        <span className="arrow-icon" onClick={() => createRazorPayOrder(subTotal)}>
                            <IoIosArrowForward />
                        </span>
                    </div>
                </div>


                <div className="preferred-options">
                    OTHER PAYMENT OPTIONS
                </div>

                <div className="other-payments-container">
                    {payOptions.map((option, index) => (
                        <div className="payment-row" key={index}>
                            <img src={option.icon} alt={option.label} />
                            <p>{option.label}</p>
                            <span>
                                <IoIosArrowForward />
                            </span>
                        </div>
                    ))}
                </div>

                <div className="redeem-options">
                    Redeem Points
                </div>


                <div className="rewards-section">
                    <div className="rewards-top-row">
                        <div className="rewards-left">
                            <img
                                src="https://assets-in.bmscdn.com/paymentcms/icon-200x200-px.png"
                                alt="Rewards"
                            />
                            <p>Pay with Rewards</p>
                        </div>
                        <button className="link-account">LINK ACCOUNT</button>
                    </div>

                    <div className="rewards-bottom-row">
                        <p>Other pay by points options</p>
                        <span>
                            <IoIosArrowForward />
                        </span>
                    </div>
                </div>

                <div className="lower-section">
                    <img src="./logo.png" alt="BookMyShow Logo" className="bms-logo" />

                    <div className="policy">
                        <p className="note-title">Note:</p>
                        <ul>
                            <li>Registrations/Tickets once booked cannot be exchanged, cancelled or refunded.</li>
                            <li>
                                In case of Credit/Debit Card bookings, the Credit/Debit Card and Card holder must be present at the ticket counter while collecting the ticket(s).
                            </li>
                        </ul>

                        <p className="security-text">As safe as it gets</p>

                        <div className="secure-logo-wrapper">
                            <img
                                src="https://assets-in.bmscdn.com/webin/payment/pcci.png"
                                alt="Security logo 1"
                                className="secure-logo"
                            />
                            <img
                                src="https://assets-in.bmscdn.com/webin/payment/safe-icon.jpg"
                                alt="Verified "
                                className="secure"
                            />
                        </div>
                    </div>
                </div>

            </div >



            {/* This is Desktop-Section Code here.............................................. */}



            < div className="movie-container-p" >
                <div className="top-section-p">
                    <img src="./logo.png" alt="" />
                </div>

                <div className="details-p">
                    <p>Send tickets to osamachaudhary5691@gmail.com / +91 9689828588</p>
                    <span><FaPencilAlt /></span>
                </div>
                <div className="offers-and-promocodes">
                    <span><IoIosArrowDown /></span>
                    <p>Unlock Offers or Apply Promocodes</p>

                </div>
                <div className="payment-options">
                    <span><IoIosArrowDown /></span>
                    <p>Payment Options</p>
                </div>


                <PaymentOptions
                    subTotal={subTotal}
                    title={title}
                    theaterName={theaterName}
                    releaseDate={releaseDate}
                    time={time}
                    seatGroups={seatGroups}
                    totalTicketPrice={totalTicketPrice}
                    convenienceFees={convenienceFees}
                    navLanguage={navLanguage}
                    navScreen={navScreen}
                    navRating={navRating}
                    image={image}
                />



                <TicketSummary
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
            </div >

            <div className="footer-wrapper">
                <div className="footer-note">
                    <p className="note-title">Note:</p>
                    <ul>
                        <li>
                            You can cancel the tickets 20 min(s) before the show. Refunds will be done according to&nbsp;
                            <span className="cancellation-policy">Cancellation Policy</span>.
                        </li>
                        <li>
                            In case of Credit/Debit Card bookings, the Credit/Debit Card and Card holder must be present at the ticket counter while collecting the ticket(s).
                        </li>
                    </ul>
                </div>

                <div className="footer-bottom">
                    <p className="footer-text">
                        © All Rights reserved by All.IN.ONE  &nbsp;<span className="link-text">Privacy Policy</span> | <span className="link-text">Contact Us</span>
                    </p>

                    <div className="security-wrapper">
                        <span className="secure-label">As safe as it gets</span>
                        <img src="https://in.bmscdn.com/webin/payment/securelogic-pci-dss.png" alt="PCI DSS" />
                    </div>
                </div>
            </div>



           {showExitModal && (
        <ExitModal
          show={showExitModal}
          onConfirm={() => handleConfirmExit("/")}
          onCancel={() => setShowExitModal(false)}
        />
      )}




        </>
    )
}




export default Payment;