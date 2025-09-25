import "../../css/paymentOptions.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";



// const paymentOptions = [
//     {
//         icon: 'https://assets-in.bmscdn.com/paymentcms/category/rz_ios.png?14032020202847',
//         label: 'Pay by any UPI App',
//     },
//     {
//         icon: 'https://img.icons8.com/ios-filled/50/000000/bank-card-back-side.png',
//         label: 'Debit/Credit Card',
//     },
//     {
//         icon: 'https://assets-in.bmscdn.com/paymentcms/category/mw_ios.png',
//         label: 'Mobile Wallets',
//     },
//     {
//         icon: 'https://img.icons8.com/ios-filled/50/FF4081/gift--v1.png',
//         label: 'Gift Voucher',
//     },
//     {
//         icon: 'https://img.icons8.com/ios-filled/50/616161/computer.png',
//         label: 'Net Banking',
//     },
//     {
//         icon: 'https://assets-in.bmscdn.com/paymentcms/category/pl_ios.png?08112018125404',
//         label: 'Pay Later',
//     },
// ];


function PaymentOptions({ }) {
    // console.log("payment options:" , subTotal);

    const [gvNumber, setGvNumber] = useState("");
    const [showError, setShowError] = useState(false);
    const [activeTab, setActiveTab] = useState("quikpay"); // default is "upi"
    const [resposnseId, setResponseId] = useState("")
    const [responseState, setResponseState] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const {
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
    } = location.state || {}; // fallback empty if nothing passed
    


    //  this section function for Razorpay payemnt integration..........................
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
            }
        }


        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    //  const paymentFetch = (e) =>{
    //     e.preventDefault();

    //     const paymentId = e.target.paymentID.value;

    //     axios.get(`http://localhost:3000/payment/${paymentId}`)
    //     .then((response)=>{
    //         console.log(response.data);
    //         setResponseState(response.data);
    //     })
    //     .catch((error)=>{
    //      console.log("Error Occures" , error);
    //     })

    //  }

    // this section ends 




    const handleApply = () => {
        if (gvNumber.trim() === "") {
            setShowError(true);
        } else {
            setShowError(false);
            // Handle valid GV number logic here
            alert(`Applied GV: ${gvNumber}`);
        }
    };


    return (
        <>

            <div className="payment-container">
                {/* Left Side */}
                <div className="left-side">
                    <span className={`menu-item ${activeTab === "quikpay" ? "active" : "inactive"}`} onClick={() => setActiveTab("quikpay")}>QuikPay</span>
                    <span className={`menu-item ${activeTab === "upi" ? "active" : "inactive"}`} onClick={() => setActiveTab("upi")}>Pay by any UPI App</span>
                    <span className={`menu-item ${activeTab === "card" ? "active" : "inactive"}`} onClick={() => setActiveTab("card")}>Debit/Credit Card</span>
                    <span className={`menu-item ${activeTab === "netbanking" ? "active" : "inactive"}`} onClick={() => setActiveTab("netbanking")}>Net Banking</span>
                    <span className={`menu-item ${activeTab === "wallet" ? "active" : "inactive"}`} onClick={() => setActiveTab("wallet")}>Mobile Wallets</span>
                    <span className={`menu-item ${activeTab === "gift" ? "active" : "inactive"}`} onClick={() => setActiveTab("gift")}>Gift Voucher</span>
                    <span className={`menu-item ${activeTab === "points" ? "active" : "inactive"}`} onClick={() => setActiveTab("points")}>Redeem Points</span>
                </div>

                {/* Right Side */}
                <div className="right-side">
                    <div className="active-tabs">
                        {activeTab === "upi" && (
                            <div>
                                <div className="first">
                                    <img src="https://assets-in.bmscdn.com/paymentcms/OTHERUPI.png" alt="" />
                                    <h2>Pay by any UPI App</h2>
                                </div>
                                <div className="upi-row" onClick={() => createRazorPayOrder(100)}>
                                    <label><input type="radio" name="upi" />
                                        <img src="https://assets-in.bmscdn.com/paymentcms/gpay.jpg  "
                                            alt="GPay"
                                        /> Google Pay</label>
                                    <label><input type="radio" name="upi" /> <img src="https://assets-in.bmscdn.com/paymentcms/Amazonpay.png" alt="Amazon Pay" /> Amazon Pay UPI</label>
                                </div>
                                <div className="upi-row">
                                    <label><input type="radio" name="upi" /> <img src="https://assets-in.bmscdn.com/paymentcms/bhim_web.png" alt="BHIM" /> BHIM</label>
                                    <label><input type="radio" name="upi" /> <img src="https://assets-in.bmscdn.com/paymentcms/paytmupi_web.png" alt="Paytm" /> Paytm</label>
                                </div>
                                <div className="upi-row">
                                    <label><input type="radio" name="upi" /> <img src="https://assets-in.bmscdn.com/paymentcms/phonepe_web.png" alt="PhonePe" /> PhonePe</label>
                                    <label><input type="radio" name="upi" /> <img src="https://assets-in.bmscdn.com/paymentcms/OTHERUPI.png" alt="Other UPI" /> Other UPI</label>
                                </div>
                                <div className="qr-section">
                                    <p>Or Scan QR code</p>
                                    <label><input type="radio" name="upi" /> <span className="qr-box">[  ]</span> Scan QR Code</label>
                                </div>
                                <p className="terms">By clicking "Make Payment" you agree to the <a href="#">terms and conditions</a></p>
                            </div>
                        )}

                        {activeTab === "quikpay" && (
                            <div className="quikpay-container">
                                <h2 className="quikpay-heading">Pay using QuikPay</h2>

                                <div className="section-title">OTHER WALLETS</div>
                                <div className="payment-option">
                                    <input type="radio" name="wallet" />
                                    <img
                                        src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-07/04/full/1656922506-9167.jpg?im=FeatureCrop,size=(826,465)"
                                        alt="Paytm"
                                        className="paytm-logo"
                                    />
                                </div>

                                <div className="section-title upi-label">UPI</div>
                                <div className="payment-option">
                                    <input type="radio" name="wallet" />
                                    <img
                                        src="https://assets-in.bmscdn.com/paymentcms/OTHERUPI.png"
                                        alt="UPI"
                                        className="logo"
                                    />
                                    <span className="upi-id">7499406023@paytm</span>
                                </div>

                                <button className="make-payment" onClick={() => createRazorPayOrder(subTotal)}>MAKE PAYMENT</button>
                                <p className="disclaimer">
                                    By clicking "Make Payment" you agree to the{" "}
                                    <a href="#">terms and conditions</a>
                                </p>
                            </div>
                        )}

                        {activeTab === "card" && (
                            <div className="card-container">
                                <h2 className="card-heading">Enter your Card details</h2>

                                <div className="card-box">
                                    <label className="card-label">Card Number</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Card Number"
                                        className="card-input"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Name on the card"
                                        className="card-input"
                                    />

                                    <div className="expiry-cvv-row">
                                        <div className="expiry">
                                            <label className="small-label">Expiry</label>
                                            <div className="expiry-inputs">
                                                <input type="text" placeholder="MM" className="small-input" />
                                                <input type="text" placeholder="YY" className="small-input" />
                                            </div>
                                        </div>

                                        <div className="cvv">
                                            <label className="small-label">CVV</label>
                                            <input type="text" placeholder="C V V" className="cvv-input" />
                                        </div>
                                    </div>
                                </div>

                                <button className="make-payment-btn">MAKE PAYMENT</button>

                                <p className="terms-text">
                                    By clicking "Make Payment" you agree to the{" "}
                                    <span className="terms-link">terms and conditions</span>
                                </p>
                            </div>
                        )}

                        {activeTab === "netbanking" && (
                            <div>
                                <h2>Net Banking</h2>
                                <p>Select your bank and proceed.</p>
                            </div>
                        )}

                        {activeTab === "wallet" && (
                            <div>
                                <h2>Mobile Wallets</h2>
                                <p>Select your preferred wallet service.</p>
                            </div>
                        )}

                        {activeTab === "gift" && (
                            <div className="gv-container">
                                <h2 className="gv-heading">Pay using Gift Voucher</h2>

                                <div className="gv-input-wrapper">
                                    <input
                                        type="text"
                                        placeholder="Enter your GV number"
                                        className="gv-input"
                                        value={gvNumber}
                                        onChange={(e) => setGvNumber(e.target.value)}
                                    />
                                    <button className="gv-button" onClick={handleApply}>
                                        APPLY
                                    </button>
                                </div>

                                {showError && (
                                    <p className="gv-error-text">
                                        Hey! Looks like you're trying to avail a discount code and not a Gift Voucher.
                                        <br />
                                        Please <a href="#">click here to avail the same.</a>
                                    </p>
                                )}
                            </div>
                        )}

                        {activeTab === "points" && (
                            <div>
                                <h2>Redeem Points</h2>
                                <p>Redeem your loyalty points here.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}



export default PaymentOptions;