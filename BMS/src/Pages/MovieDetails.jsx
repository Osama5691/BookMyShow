import "../css/MovieDetails.css"
import axios from "axios";
// import "../../src/App.css"
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { FaBars, FaSearch } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaStar, FaThumbsUp, FaRegCommentDots } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import Footer from "../Components/Footer/Footer";



const reviews = [
  {
    name: "Ronit",
    rating: 10,
    hashtags: ["#SuperDirection", "#WowMusic", "#AwesomeStory"],
    comment:
      "Too good movie it breaks all the expectations I’m all alone in the theatre because people just don’t know about such movies it was a great watch 👏🏻🎬",
    likes: 63,
    comments: 9,
    daysAgo: 4,
  },
  {
    name: "Anjali",
    rating: 9,
    hashtags: ["#SuperDirection", "#Visuals", "#Emotional"],
    comment:
      "Once you watch it, you can't stop thinking. The visuals, episodes, and climax are unforgettable moments.",
    likes: 38,
    comments: 5,
    daysAgo: 3,
  },
];


export default function MovieDetails() {
  const [showWarning, setShowWarning] = useState(false);
  const [showFormatModal, setShowFormatModal] = useState(false);
  const { id } = useParams();
  // console.log("Movie ID from URL:", id);
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();


  // Step 1: Movie info ek object me rakho (abhi static hai, baad me dynamic ho sakta hai)
  // const movie = {
  //   title: "Final Destination Bloodlines",
  //   rating: "A", // abhi yahi change karke test karo ("U/A", "PG", etc.)
  //   duration: "1h 50m",
  //   genre: "Horror, Mystery, Thriller",
  //   releaseDate: "15 May, 2025",
  // };

  useEffect(() => {
    axios.get(`http://localhost:3000/api/get-movie/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.error(err));
  }, [id]);



  const handleBookTicket = () => {
    if (movie?.rating === "A") {
      setShowWarning(true); // Show warning modal
    } else {

      // ✅ Save to localStorage before navigating
      localStorage.setItem("movieId", movie._id);
      localStorage.setItem("movieTitle", movie.title);
      localStorage.setItem("movieRating", movie.rating);
      localStorage.setItem("movieGenre", movie.genre);
      localStorage.setItem("movieReleaseDate", movie.releaseDate);

      // console.log("Movie ID from URL:", id);
      navigate("/booking-details", {
        state: {
          movieId: movie._id,
          title: movie.title,
          rating: movie.rating,
          genre: movie.genre,
          releaseDate: movie.releaseDate,


        }
      });
    }
  };


  const handleContinue = () => {
    setShowWarning(false);
    setShowFormatModal(true); // Now show language/format
  };

  const handleFormatSelect = (format, language) => {
    // ✅ Save to localStorage before navigating
    localStorage.setItem("movieId", movie._id);
    localStorage.setItem("movieTitle", movie.title);
    localStorage.setItem("movieRating", movie.rating);
    localStorage.setItem("movieGenre", movie.genre);
    localStorage.setItem("movieReleaseDate", movie.releaseDate);

    navigate("/booking-details", {
      state: {
        title: movie.title,
        rating: movie.rating,
        genre: movie.genre,
        releaseDate: movie.releaseDate,
      }
    });
  };

  return (
    <>

      <div className="mobile-container">
        <div className="movie-nav">
          <div className="left-section">
            <span className="arrow-icon-md"
              onClick={() => navigate('/')}>
              <MdOutlineKeyboardArrowLeft />
            </span>
            <h2 className="movie-title">{movie.title}</h2>
          </div>
          <span className="share-icon"><CiShare2 /></span>
        </div>


        <div className="movie-card">
          <div className="movie-trailer-container">
            <img
              src={movie.mobilebg}
              // alt="Ne Zha 2"
              className="movie-trailer-img"
            />
            <button className="trailer-button">Trailers (3)</button>
          </div>
          <div className="in-cinemas">
            <p className="in-cinemas-text">In cinemas</p>
          </div>

          <div className="ratings-container">
            <span className="star">⭐</span>
            <span className="ratings">{movie.ratingsz}</span>
            <span className="votes">{movie.votes}</span>
            <button className="rate-now-button">Rate now</button>
          </div>

          <div className="tags-container">
            <div className="tags-group">
              <span className="tag">2D</span>
              <span className="tag">4DX 3D</span>
              <span className="tag">4DX</span>
              <span className="tag">3D</span>
              <span className="tag">IMAX 3D</span>
            </div>

            <div className="language">
              <span className="tag">English</span>
              <span className="tag">HINDI</span>
            </div>
          </div>

          <div className="movie-info">
            {movie.duration} • {movie.genre} • <strong>{movie.rating}</strong> • {movie.releaseDate}
            <p className="movie-description">
              The newest chapter in New Line Cinema's bloody successful franchise takes audiences back to the very ....
            </p>
          </div>

          <div className="onprime">
            <img src="./crazy.jpg" alt="" />
          </div>

          <div className="offers-container">
            <h3 className="offers-title">Top offers for you</h3>
            <div className="offers-list">
              <div className="offer-card">
                <img
                  src="https://companieslogo.com/img/orig/YESBANK.NS-a31ff15a.png?t=1720244494"
                  alt="Yes Bank Offer"
                  className="offer-icon"
                />
                <div className="offer-content">
                  <p className="offer-heading">YES Private Debit Card Offer</p>
                  <p className="offer-subtext">Tap to view details</p>
                </div>
              </div>
              <div className="offer-card">
                <img
                  src="https://1000logos.net/wp-content/uploads/2020/04/DBS-Logo-1968.jpg"
                  alt="DBS Offer"
                  className="offer-icon"
                />
                <div className="offer-content">
                  <p className="offer-heading">Get discounts on all...</p>
                  <p className="offer-subtext">Tap to view details</p>
                </div>
              </div>
            </div>
          </div>

          <div className="top-reviews-container">
            <div className="top-header">
              <h3>Top reviews</h3>
              <span className="review-count">498 reviews &gt;</span>
            </div>
            <p className="summary">Summary of 498 reviews.</p>

            <div className="tagsz">
              <span className="tagz">#Wellmade 336</span>
              <span className="tagz">#SuperDirection 316</span>
              <span className="tagz">#AwesomeStory 298</span>
            </div>

            <div className="reviews-scroll-container">
              {reviews.map((review, index) => (
                <div className="review-card" key={index}>
                  <div className="review-header">
                    <div className="profile-placeholder"></div>
                    <div>
                      <p className="name">{review.name}</p>
                      <p className="booked">
                        Booked on{" "}
                        <span className="bookmyshow">
                          book<span className="red">My</span>show
                        </span>
                      </p>
                    </div>
                    <div className="rating">
                      <FaStar className="star-icon" />
                      <span>{review.rating}/10</span>
                    </div>
                  </div>
                  <p className="hashtags">{review.hashtags.join(" ")}</p>
                  <p className="comment">{review.comment}</p>
                  <div className="review-footer">
                    <span>
                      <FaThumbsUp /> {review.likes}
                    </span>
                    <span>
                      <FaRegCommentDots /> {review.comments}
                    </span>
                    <span>{review.daysAgo} Days ago</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="mobile-only" />

          <section className="cast-crew">
            <h2>Cast</h2>
            <div className="cast-list">
              {movie?.cast?.map((actor, index) => (
                <div className="cast-card" key={index}>
                  <img src={actor.image} alt="Kaitlyn Santa Juana" />
                  <h4>{actor.name}</h4>
                  <p>{actor.character}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="mobile-only" />

          <section className="crew">
            <h2>Crew</h2>
            <div className="cast-list">
              {movie?.crew?.map((person, index) => (
                <div className="cast-card">
                  <img src={person.image} alt="Lily-Rose Depp" />
                  <h4>{person.name}</h4>
                  <p>{person.role}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="MovieDetailsBanner">
            <img src="./MDBanner.jpg" alt="" />
          </div>


          <hr className="mobile-only" />

          <section className="recent">
            <h2>You might also like</h2>
            <div className="cardz">
              {movie?.suggestions?.map((item, index) => (
                <div className="card-item" key={index}>
                  <img src={item.image} alt="" />
                  <p className="movie-name">{item.title}</p>
                  <p className="movie-genre">{item.languages}</p>
                </div>
              ))}


            </div>
          </section>
        </div>

        <div className="book-btn-container">
          <button className="book-btn" onClick={handleBookTicket}>Book tickets</button>
        </div>booking-details

      </div>


      {/* Modal Warning */}
      {showWarning && (
        <div className="modal-backdrop">
          <div className="modal-box">
            <h2>Content Warning</h2>
            <p>
              This movie is rated “A” and is only for viewers above 18. Please
              carry a valid ID/Age Proof to the theatre. If you are denied entry
              due to age or ID issues, you will not get a refund.
            </p>
            <button className="continue-btn" onClick={handleContinue}>
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Modal - Format Selection */}
      {showFormatModal && (
        <div className="format-modal-backdrop">
          <div className="format-modal-box">
            <button className="close-btn" onClick={() => setShowFormatModal(false)}>×</button>
            <h3 className="movie-title">{movie.title}</h3>
            <h4 className="sub-title">Select language and format</h4>

            <div className="lang-section">
              <div className="lang-label">ENGLISH</div>
              <div className="format-buttons">
                <button onClick={() => handleFormatSelect("2D", "English")}>2D</button>
                <button onClick={() => handleFormatSelect("4DX", "English")}>4DX</button>
                <button onClick={() => handleFormatSelect("MX4D", "English")}>MX4D</button>
              </div>
            </div>

            <div className="lang-section">
              <div className="lang-label">HINDI</div>
              <div className="format-buttons">
                <button onClick={() => handleFormatSelect("2D", "Hindi")}>2D</button>
                <button onClick={() => handleFormatSelect("4DX", "Hindi")}>4DX</button>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* this section For Desktop view Only......................................................... */}



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
          <button>Sign In</button>
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


      <div className="desktop-container">
        <div className="movie-detail-container"
          style={{
            background: `url(${movie.bgimage}) no-repeat center center/cover`,
            height: "80vh",
            position: "relative",
            color: "#fff",
            marginBottom: "10px"
          }}
        >
          <div className="overlay">
            {/* Left Side */}
            <div className="left-panel">
              <div className="poster-card">
                <img
                  src={movie.image}
                  alt={movie.alt}
                  className="poster-img"
                />
                <div className="trailer-btn">
                  <span>&#9658;</span> Trailer
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="right-panel">
              <div className="labels">
                <img src="./premiere-tag.png" alt="" />
                <span className="streaming">Streaming Now</span>
              </div>
              <h1 className="main-title">{movie.title}</h1>

              <div className="ratings-containerz">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span className="starz">⭐</span>
                  <span className="ratingsz">{movie.ratingsz}</span>
                  <span className="votesz">{movie.votes}</span>
                </div>
                <button className="rate-now-buttonz">Rate now</button>
              </div>

              <p className="info-line">
                {movie.duration} • {movie.genre} • <strong>{movie.rating}</strong> • {movie.releaseDate}
                {/* <span className="highlight">Audio(4), Subtitles(1)</span> */}
              </p>
              {/* <p className="info-line">
              2h 4m • Horror, Mystery • U/A • 15 May, 2025
            </p> */}

              <div className="action-buttons">
                <button className="rent-btns" onClick={handleBookTicket}>
                  Book Ticket
                </button>
                {/* <button className="buy-btns">Buy ₹999</button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Warning */}
        {showWarning && (
          <div className="modal-backdrop">
            <div className="modal-box">
              <h2>Content Warning</h2>
              <p>
                This movie is rated “A” and is only for viewers above 18. Please
                carry a valid ID/Age Proof to the theatre. If you are denied entry
                due to age or ID issues, you will not get a refund.
              </p>
              <button className="continue-btn" onClick={handleContinue}>
                Continue
              </button>
            </div>
          </div>
        )}


        {showFormatModal && (
          <div className="format-modal-backdrop">
            <div className="format-modal-box">
              <button className="close-btn" onClick={() => setShowFormatModal(false)}>×</button>
              <h3 className="movie-title">{movie.title}</h3>
              <h4 className="sub-title">Select language and format</h4>

              <div className="lang-section">
                <div className="lang-label">ENGLISH</div>
                <div className="format-buttons">
                  <button onClick={() => handleFormatSelect("2D", "English")}>2D</button>
                  <button onClick={() => handleFormatSelect("4DX", "English")}>4DX</button>
                  <button onClick={() => handleFormatSelect("MX4D", "English")}>MX4D</button>
                </div>
              </div>

              <div className="lang-section">
                <div className="lang-label">HINDI</div>
                <div className="format-buttons">
                  <button onClick={() => handleFormatSelect("2D", "Hindi")}>2D</button>
                  <button onClick={() => handleFormatSelect("4DX", "Hindi")}>4DX</button>
                </div>
              </div>
            </div>
          </div>
        )}


        <div className="containers">
          <section className="about">
            <h2>About the movie</h2>
            <p>
              {movie.about}
            </p>
          </section>

          <hr />

          <section className="cast-crew">
            <h2>Cast</h2>
            <div className="cast-list">
              {movie?.cast?.map((actor, index) => (
                <div className="cast-card" key={index}>
                  <img src={actor.image} alt="Kaitlyn Santa Juana" />
                  <h4>{actor.name}</h4>
                  <p>{actor.character}</p>
                </div>
              ))}
            </div>
          </section>

          <hr />

          <section className="crew">
            <h2>Crew</h2>
            <div className="cast-list">
              {movie?.crew?.map((person, index) => (
                <div className="cast-card" key={index}>
                  <img src={person.image} alt="Lily-Rose Depp" />
                  <h4>{person.name}</h4>
                  <p>{person.role}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="MovieDetailsBanner">
            <img src="./MDBanner.jpg" alt="" />
          </div>


          <hr />

          <section className="recent">
            <h2>You might also like</h2>
            <div className="cardz">
              {movie?.suggestions?.map((item, index) => (
                <div className="card-item" key={index}>
                  <img src={item.image} alt="" />
                  <p className="movie-name">{item.title}</p>
                  <p className="movie-genre">{item.languages}</p>
                </div>
              ))}


            </div>
          </section>

        </div>
        <Footer />
      </div>


    </>
  )
}