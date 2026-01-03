* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.fnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    width: 100%;
    color: #666; /* Matches text color in the image */
    background-color: #f8f8f8; /* Matches background color in the image */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    z-index: 1000;
}

.fnav .left {
    display: flex;
    align-items: center;
}

.left img {
    width: 130px; /* Adjust size for a clean fit */
}

.left input {
    margin-left: 15px;
    width: 500px;
    height: 35px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    padding: 0 10px;
    color: #666;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    transition: border 0.3s ease;
}

.left input:focus {
    border-color: #888;
}

.fnav .right {
    display: flex;
    align-items: center;
}

.right p {
    margin: 0 15px;
    font-size: 16px;
    color: #666; /* Matches text color */
    cursor: pointer;
    transition: color 0.3s ease;
}

.right p:hover {
    color: #000;
}

.right button {
    margin: 0 15px;
    padding: 5px 15px;
    border: none;
    border-radius: 20px;
    color: white;
    background-color: #e13955; /* Matches the Sign-in button color */
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

.right button:hover {
    background-color: #d12d48;
}

.right i {
    margin-left: 15px;
    font-size: 22px;
    color: #666;
    cursor: pointer;
    transition: color 0.3s ease;
}

.right i:hover {
    color: #000;
}









import './Navbar.css'
import { FaBars } from "react-icons/fa";



export default function Navbar(){
    return(
        <div>
            <nav className="fnav">
                <div className="left">
                    <img src="./bms.png" alt="" />
                    <input type="text" placeholder="Search For Movies , Events , Plays and More" />
                </div>
                
                <div className="right">
                    <select name="City" id="drop">
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                    </select>
                    <button>SignIn</button>
                    <i> <FaBars /></i>
                </div>
            </nav>

            <nav className="sec-nav">
            <div className="s-left">
                <p>Movies</p>
                <p>Stream</p>
                <p>Events</p>
                <p>Plays</p>
                <p>Sports</p>
                <p>Activaties</p>
                <p>Buzz</p>

            </div>
            
            <div className="s-right">    
                <p>ListYourShow</p>
                <p>Corporates</p>
                <p>Offer</p>
                <p>GiftCard</p>

            </div>
            </nav>

            <div className="slideshow-container">

                <div className="mySlides">
                    <img src="./Banner.png" alt='' />
                </div>

                <div className="mySlides">
                    <img src="./Banner2.png" alt="" />
                </div>

                {/* Next previous buttons */}
                <a className='prev' onClick={prevSlide}>&#10094;</a>

            </div>
        </div>

import "./Home.css"

export default function Home() {
    return(
      
        <div className="container">
            <h2>Recommended Movies</h2>
        <div className="card">
            <div className="card-item">
                <img src="./card1.png" alt="" />
                <p className="movie-name">Sky Force</p>
                    <p className="movie-genre">Action/Historical/Thriller</p>
                </div>
                <div className="card-item">
                <img src="./card6.png" alt="" />
                <p className="movie-name">Sky Force</p>
                    <p className="movie-genre">Action/Historical/Thriller</p>
                </div>
                <div className="card-item">
                <img src="./card3.png" alt="" />
                <p className="movie-name">Sky Force</p>
                    <p className="movie-genre">Action/Historical/Thriller</p>
                </div>
                <div className="card-item">
                <img src="./card4.png" alt="" />
                <p className="movie-name">Sky Force</p>
                    <p className="movie-genre">Action/Historical/Thriller</p>
                </div>
                <div className="card-item">
                <img src="./card5.png" alt="" />
                <p className="movie-name">Sky Force</p>
                    <p className="movie-genre">Action/Historical/Thriller</p>
                </div>
        
        </div>

        <div className="Homebanner">
            <img src="./Banner5.png" alt="" />
        </div>
        <h2>The Best Of Live Events</h2>
        <div className="card">
            <img src="./Event1.png" alt="" />
            <img src="./Event2.png" alt="" />
            <img src="./Event3.png" alt="" />
            <img src="./Event4.png" alt="" />
            <img src="./Event5.png" alt="" />

            
            
        </div>
        </div>



.container{
    margin-bottom: 50px;
}
.container h2{
    text-align: start;
    padding: 22px 35px;
}

.container .card {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.card-item {
    text-align: center;
    width: 17%;
    margin-bottom: 20px;
}

.card-item img {
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    display: block;
}
 
.movie-name {
    font-size: 16px;
    font-weight: bold;
    margin: 8px 0 4px;
}

.movie-genre {
    font-size: 14px;
    color: gray;
}

.Homebanner img{
     width: 95%;
     height: 100px;
     margin: 70px 0px 0px 31px;
     margin-bottom: 50px;
}


        
    )
}

    )
}





.mobile-view {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    /*Ensures it fits the viewport width exactly */
    max-width: 100%;
    /* Prevents overflow */
    overflow-x: hidden;
    background-color: white;
    z-index: 1000;
    box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.1);
  }







  <div className="container">
            <h2>Recommended Movies</h2>
            <div className="card">
            <div className="card-item" onClick={handleMovieClick}>
                <img src="./Card5.png" alt="" />
                <p className="movie-name">Mission Impossible 9</p>
                    <p className="movie-genre">Action/Thriller</p>
                </div>
                <div className="card-item" onClick={handleMovieClick}>
                <img src="./Card4.png" alt="" />
                <p className="movie-name">Final Destination Bloodlines</p>
                    <p className="movie-genre">Horror/Thriller</p>
                </div>
                <div className="card-item" onClick={handleMovieClick}>
                <img src="./Card3.png" alt="" />
                <p className="movie-name">Thunderbolts*</p>
                    <p className="movie-genre">Action/Thriller</p>
                </div>
                <div className="card-item" onClick={handleMovieClick}>
                <img src="./Card2.png" alt="" />
                <p className="movie-name">Kesari Chapter 2</p>
                    <p className="movie-genre">History/Crime/Thriller</p>
                </div>
                <div className="card-item" onClick={handleMovieClick}>
                <img src="./Card1.png" alt="" />
                <p className="movie-name">Raid 2</p>
                    <p className="movie-genre">Crime/Drama</p>
                </div>
        
        </div>





                 <div className="container">
  <h2>Recommended Movies</h2>
  <div className="card">
    {movies.slice(0, 5).map((movie) => (
      <div
        className="card-item"
        key={movie._id}
        onClick={() => handleMovieClick(movie._id)}
      >
        <img src={movie.image} alt={movie.title} />
        <p className="movie-name">{movie.title}</p>
        <p className="movie-genre">{movie.genre}</p>
      </div>
    ))}
  </div>
</div>








{/* Flex wrapper for Snacks and Ticket Summary */}
      <div className="main-flex-container">
        {/* Snacks Section */}
        <div className="snacks-container">
          <h1>
            Grab a <span>bite !</span>
          </h1>
          <p>
            Now get your Favorite snack at a <span>discount price!</span>
          </p>

          <div className="snacks-filter">
            <span>ALL</span> &nbsp;
            <span>POPCORN</span> &nbsp;
            <span>SNACKS</span> &nbsp;
            <span>COMBOS</span> &nbsp;
            <span>BEVERAGES</span> &nbsp;
          </div>

          <div className="snack-section">
            <div className="snack-items">
              {/* Multiple Cards */}
              {/* CARD 1 */}
              <div className="snack-card">
                <div className="card-top">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png"
                    alt="veg"
                    className="veg-icon"
                  />
                  <img
                    src="https://in.bmscdn.com/fnb/v3/xxhdpi/2001054_26122022174031.png"
                    alt="Popcorn"
                    className="snack-image"
                  />
                  <div className="snack-info">
                    <h3 className="snack-title">Jumbo Cheese Popcorn</h3>
                    <p className="snack-desc">
                      Jumbo Cheese Popcorn 240g | 1380 kcal
                    </p>
                  </div>
                </div>
                <div className="card-bottom">
                  <span className="price">₹640</span>
                  <button className="add-btn">Add</button>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="snack-card">
                <div className="card-top">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png"
                    alt="veg"
                    className="veg-icon"
                  />
                  <img
                    src="https://in.bmscdn.com/fnb/v3/xxhdpi/1020006_06082018135441.png"
                    alt="Nachos"
                    className="snack-image"
                  />
                  <div className="snack-info">
                    <h3 className="snack-title">Nachos</h3>
                    <p className="snack-desc">
                      Nachos 80g with Cheese Dip 50g | 382 kcal
                    </p>
                  </div>
                </div>
                <div className="card-bottom">
                  <span className="price">₹400</span>
                  <button className="add-btn">Add</button>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="snack-card">
                <div className="card-top">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png"
                    alt="veg"
                    className="veg-icon"
                  />
                  <img
                    src="https://in.bmscdn.com/fnb/v3/xxhdpi/2000492_01082023133741.png"
                    alt="Nachos"
                    className="snack-image"
                  />
                  <div className="snack-info">
                    <h3 className="snack-title">Nachos Combo (Flavoured)</h3>
                    <p className="snack-desc">
                      Jumbo Tub Flavoured Popcorn 240g 
                    </p>
                  </div>
                </div>
                <div className="card-bottom">
                  <span className="price">₹1150</span>
                  <button className="add-btn">Add</button>
                </div>
              </div>


              {/* CARD 4 */}
              <div className="snack-card">
                <div className="card-top">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png"
                    alt="veg"
                    className="veg-icon"
                  />
                  <img
                    src="https://in.bmscdn.com/fnb/v3/xxhdpi/2001054_26122022174031.png"
                    alt="Nachos"
                    className="snack-image"
                  />
                  <div className="snack-info">
                    <h3 className="snack-title">Jumbo Salted Popcorn</h3>
                    <p className="snack-desc">
                      Jumbo Salted Popcorn 240g | 1311 kcal
                    </p>
                  </div>
                </div>
                <div className="card-bottom">
                  <span className="price">₹600</span>
                  <button className="add-btn">Add</button>
                </div>
              </div>


              {/* CARD 5 */}
              <div className="snack-card">
                <div className="card-top">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png"
                    alt="veg"
                    className="veg-icon"
                  />
                  <img
                    src="https://in.bmscdn.com/fnb/v3/xxhdpi/1020011_17082018145045.png"
                    alt="Nachos"
                    className="snack-image"
                  />
                  <div className="snack-info">
                    <h3 className="snack-title">Coke 810ml</h3>
                    <p className="snack-desc">
                     Coke 810ml | 373 kcal
                    </p>
                  </div>
                </div>
                <div className="card-bottom">
                  <span className="price">₹450</span>
                  <button className="add-btn">Add</button>
                </div>
              </div>


             {/* CARD 6 */}
              <div className="snack-card">
                <div className="card-top">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/2048px-Veg_symbol.svg.png"
                    alt="veg"
                    className="veg-icon"
                  />
                  <img
                    src="https://in.bmscdn.com/fnb/v3/xxhdpi/1020080_17082018155618.png"
                    alt="Nachos"
                    className="snack-image"
                  />
                  <div className="snack-info">
                    <h3 className="snack-title">Cappuccino 150ml</h3>
                    <p className="snack-desc">
                      Cappuccino 150ml | 99 kcal
                    </p>
                  </div>
                </div>
                <div className="card-bottom">
                  <span className="price">₹400</span>
                  <button className="add-btn">Add</button>
                </div>
              </div>



            </div>
          </div>

          <div className="instructions"> 
            <h5>Note:</h5>
            <span>1. Images are for representation purposes only.</span>
            <br />
            <span>2. Prices inclusive of taxes.</span>
            <br />
            <span>
              3. All nutritional information is indicative, values are per serve
              as shared by the Cinema and may vary depending on the ingredients
              and portion size.
            </span>
            <br />
            <span>
              4. An average active adult requires 2000 kcal energy per day,
              however, calorie needs may vary.
            </span>
            <br /> <br />
            <span>Kids above the age of 3 years will be charged separately.</span>
          </div>
        </div>








 .seats {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  justify-content: center;
}

.seat {
  width: 25px;
  height: 25px;
  border: 1px solid #4caf50;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
  background-color: #fff;
}

/* .seat:hover {
  background-color:  #00b386;
} */



















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
    const [resposnseId, setResponseId] = useState("")
    // const [responseState, setResponseState] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();
    // This will have all the passed booking details
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

    // console.log("TicketPrices at parent:", totalTicketPrice);
    //   useEffect(() => {
    //     console.log("Title:", title);
    //     console.log("Theater Name:", theaterName);
    //     console.log("Release Date:", releaseDate);
    //     console.log("Show Time:", time);
    //     console.log("Seat Groups:", seatGroups);
    //     console.log("Ticket Price:", ticketPrices);
    //     console.log("Convenience Fees:", convenienceFees);
    //     // console.log("Donation:", donation);
    //     console.log("SubTotal:", subTotal);
    //   }, [location]);
    





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
            url: "http://localhost:3000/api/orders",
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

            {/* This is Mobile View Code Here....................................... */}

            <div className="payment-mobile-view">
                <div className="payment-wrapper">
                    <div className="payment-topbar">
                        <span className="payment-back-arrow"
                            onClick={() => navigate("/confirm-booking", {
                                state: {
                                    title,
                                    theaterName,
                                    releaseDate,
                                    time,
                                    seatGroups,
                                    totalTicketPrice,
                                    convenienceFees,
                                    subTotal
                                }
                            })
                            }
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





        </>
    )
}




export default Payment;
























import "../../css/Navbar.css"; // Ensure this includes the provided CSS
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { useState, useEffect } from "react";
import SignUp from "../../Pages/SignUp";
import { account } from "../../appWrite";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  


// fetch Logged in user
  useEffect(() => {
  account
    .get()
    .then((res) => setUser(res))
    .catch(() => {
      const guest = localStorage.getItem("guestUser");
      if (guest) {
        setUser(JSON.parse(guest)); // ✅ ab Guest user mil jayega
      } else {
        setUser(null);
      }
    });
}, []);




async function signOut() {
  try {
    // ✅ Clear Appwrite session
    await account.deleteSession("current").catch(() => {});

    // ✅ Clear Guest session
    localStorage.removeItem("guestUser");

    setUser(null);
    setShowProfile(false);

    toast.success("You have been signed out!", {
      position: "top-center",
      autoClose: 3000,
    });

    setTimeout(() => {
      window.location.reload();
    }, 1500);
  } catch (err) {
    console.error("Error signing out:", err);
    toast.error("Failed to sign out. Try again.", {
      position: "top-center",
      autoClose: 3000,
    });
  }
}







  // Function to get first name from email or full name
const getFirstName = (email, name) => {
  if (name && name.trim().length > 0) {
    return name.split(" ")[0];
  }
  return email ? email.split("@")[0] : "Guest";
};



  return (
    <div>
      {/* Primary Navbar */}
      <nav className="fnav">
        <div className="left">
          <img src="./bms.png" alt="Logo" />
          <input
            type="search"
            placeholder="Search For Movies, Events, Plays and More"
          />
        </div>

        <div className="right">
          <select name="City" id="drop">
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>


          {user ? (
            <div className="user-profile"
              style={{
                display: "flex",
                alignItems: "start",
                gap: "8px",
                cursor: "pointer"
              }}
              onClick={()=> setShowProfile(true)}   // <-- Open sidebar

            >
              <img
                src={
                  user.prefs?.avatar ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="Profile"
                style={{ width: "32px", height: "32px", borderRadius: "50%" }}
              />
              <span
              style={{ width:"80px" , overflow: "hidden" , whiteSpace:"nowrap", textOverflow:"ellipsis" , marginTop:"4px"}}
              >Hello, {getFirstName(user.email, user.name ,)}</span>
              
            </div>
          ) : (
            <>
              <button className="right-button" onClick={() => setShowSignup(true)}>
                Sign In
              </button>
              {showSignup && <SignUp onClose={() => setShowSignup(false)} />}
            </>
          )}


          <i>
            <FaBars />
          </i>
        </div>
      </nav>

      {/* Secondary Navbar */}
      <nav className="sec-nav">
        <div className="s-left">
          <p>Movies</p>
          <p>Stream</p>
          <p>Events</p>
          <p>Plays</p>
          <p>Sports</p>
          <p>Activities</p>
          <p>Buzz</p>
        </div>

        <div className="s-right">
          <p>List Your Show</p>
          <p>Corporates</p>
          <p>Offers</p>
          <p>Gift Card</p>
        </div>
      </nav>



      {/* Mobile Navbar...................................... */}
      <div className="Nav2">
        <nav className="Mnav">
          <div className="left-section">
            <h1>
              It All Starts Here! <br /> <span>Mumbai</span>
            </h1>
          </div>
          <div className="right-section">
            <div className="search">
              <FaSearch />
            </div>
            <div className="notification">
              <IoNotificationsOutline />
            </div>
            <div className="scan">
              <MdOutlineQrCodeScanner />
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile View Secondary Navbar */}

      <nav className="Snav">
        <img src="./MI.png" alt="" />
        <img src="./MI2.png" alt="" />
        <img src="./MI3.png" alt="" />
        <img src="./MI4.png" alt="" />
        <img src="./MI5.png" alt="" />
        <img src="./MI6.png" alt="" />
        <img src="./MI7.png" alt="" />
      </nav>



     {/* Profile Sidebar .......................*/}
<div className={`profile-sidebar ${showProfile ? "open" : ""}`}>
  <div className="profile-header">
    <div>
      <h2>Hey!</h2>
      <p className="edit-profile">Edit Profile &gt;</p>
    </div>
    <img
      src={
        user?.prefs?.avatar ||
        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
      }
      alt="Profile Avatar"
      className="profile-avatar"
    />
  </div>

  <ul className="profile-menu">
    <li>
      <span className="icon">🔔</span>
      <div>
        <h4>Notifications</h4>
        <p>Stay updated with latest updates</p>
      </div>
    </li>
    <li>
      <span className="icon">📦</span>
      <div>
        <h4>Your Orders</h4>
        <p>View all your bookings & purchases</p>
      </div>
    </li>
    <li>
      <span className="icon">🎬</span>
      <div>
        <h4>Stream Library</h4>
        <p>Rented & Purchased Movies</p>
      </div>
    </li>
    <li>
      <span className="icon">💳</span>
      <div>
        <h4>Play Credit Card</h4>
        <p>View your Play Credit Card details and offers</p>
      </div>
    </li>
    <li>
      <span className="icon">❓</span>
      <div>
        <h4>Help & Support</h4>
        <p>View commonly asked queries and Chat</p>
      </div>
    </li>
    <li>
      <span className="icon">⚙️</span>
      <div>
        <h4>Accounts & Settings</h4>
        <p>Location, Payments, Permissions & More</p>
      </div>
    </li>
    <li>
      <span className="icon">🎁</span>
      <div>
        <h4>Rewards</h4>
        <p>View your rewards & unlock new ones</p>
      </div>
    </li>
  </ul>

  <button className="signout-btn" onClick={signOut}>Sign out</button>
</div>

{/* Overlay */}
{showProfile && (
  <div className="sidebar-overlay" onClick={() => setShowProfile(false)}></div>
)}


<ToastContainer />


</div>



  );
}
















import React from "react";
import "../../css/Footer.css"; // Import the CSS file
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaLinkedin } from "react-icons/fa";
import { FaHome, FaVideo, FaTicketAlt, FaUser } from 'react-icons/fa';

export default function Footer({ onOpenSignup }) {
  return (
    <>
    
   {/* Desktop Footer */}

   <footer className="bms-footer">
  {/* Top Section */}
  <div className="bms-footer-top">
    <p>
      <strong>📢 List your Show &nbsp;</strong> Got a show, event, activity, or a great experience? 
      Partner with us & get listed on <span className="bms-highlight">BookMyShow</span>
    </p>
    <button className="bms-contact-btn">Contact today!</button>
  </div>

  {/* Middle Section */}
  <div className="bms-footer-services">
    <div className="bms-footer-service">
      <span className="bms-icon">👤</span>
      <p>24/7 CUSTOMER CARE</p>
    </div>
    <div className="bms-footer-service">
      <span className="bms-icon">🔄</span>
      <p>RESEND BOOKING CONFIRMATION</p>
    </div>
    <div className="bms-footer-service">
      <span className="bms-icon">📧</span>
      <p>SUBSCRIBE TO THE NEWSLETTER</p>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="bms-footer-info">
    <div className="bms-footer-section">
      <h3>Movies Now Showing in Mumbai</h3>
      <p>
        Chhava | Sanam Teri Kasam | Loveyapa | Badass Ravi Kumar | Captain America: Brave New World | 
        Sky Force | Interstellar | Drea | Umbarro | Vidaamuyarchi
      </p>
    </div>

    <div className="bms-footer-section">
      <h3>Upcoming Movies in Mumbai</h3>
      <p>
        Namma Preethiya Ramu | Nimitta Matra | Athu Vaangina Ethu Elavasam | Daveed | 
        It's Complicated | Fire (2025) | Otha Muthiaya | Vettu | Badava | Ilti
      </p>
    </div>

    <div className="bms-footer-section">
      <h3>Countries</h3>
      <p>Indonesia | Singapore | UAE | Sri Lanka | West Indies</p>
    </div>

    <div className="bms-footer-section">
      <h3>Help</h3>
      <p>About Us | Contact Us | FAQs | Privacy Policy | Terms and Conditions</p>
    </div>

    <div className="bms-footer-section">
      <h3>BookMyShow Exclusives</h3>
      <p>Lollapalooza India | BookAChange | Gift Cards | List My Show | Offers | Stream | Trailers</p>
    </div>
  </div>

  {/* Social Section */}
  <div className="bms-footer-social">
    <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="BookMyShow Logo" className="bms-logo" />
    <div className="bms-social-icons">
      <FaFacebookF />
      <FaTwitter />
      <FaInstagram />
      <FaYoutube />
      <FaPinterest />
      <FaLinkedin />
    </div>
  </div>

  {/* Copyright */}
  <p className="bms-footer-copy">
    Copyright 2025 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved. <br />
    This project is dummy
  </p>
</footer>

     {/* Mobile Footer.........................  */}

    <div className="mobile-footer-wrapper mobile-footer">
      <div className="footer-item active">
        <FaHome className="icon" />
        <span>Home</span>
      </div>
      <div className="footer-item">
        <FaVideo className="icon" />
        <span>Movies</span>
      </div>
      <div className="footer-item">
        <FaTicketAlt className="icon" />
        <span>Live Events</span>
      </div>
      <div className="footer-item" onClick={onOpenSignup}>
        <FaUser className="icon" />
        <span>Profile</span>
      </div>
    </div>

    </>
  );
}







import React from "react";
import "../css/Profile.css";
import { FaUserCircle, FaEdit, FaLock, FaGift, FaUtensils, FaCog, FaInfoCircle, FaCreditCard, FaFilm, FaTags, FaTicketAlt, FaStar } from "react-icons/fa";
import { useState , useEffect , useRef } from "react";

const Profile = () => {

const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);


  // Load image from localStorage on mount
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  // Trigger file picker when avatar clicked
  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  // Upload and save image
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result;
        setProfileImage(imageDataUrl);
        localStorage.setItem("profileImage", imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove image (reset to default)
  const handleRemoveImage = () => {
    setProfileImage(null);
    localStorage.removeItem("profileImage");
  };

  return (
    <>
      <div className="userProfile-nav">
        <p>Your Oredrs</p>
        <p>Stream Library</p>
        <p>QuickPay</p>
        <p>Rewards</p>
        <p>Profile</p>
        <p>Saved Devices</p>
      </div>
      
      <div className="userProfile-wrapper">
        <div className="userProfile-card">
          <div className="userProfile-header">
            {/* Avatar section */}
            <div className="userProfile-avatar" onClick={handleAvatarClick}>
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="userProfile-image"
                />
              ) : (
                <FaUserCircle className="default-avatar" />
              )}
            </div>

            {/* Hidden input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />

            {/* Show remove button only if image is set */}
            {profileImage && (
              <button
                className="removeImage-btn"
                onClick={handleRemoveImage}
              >
                Remove Image
              </button>
            )}

            <h2 className="userProfile-title">Guest</h2>
          </div>