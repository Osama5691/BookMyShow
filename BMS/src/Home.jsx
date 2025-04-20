import React, { useState, useEffect } from "react";
import "./Home.css"

export default function Home() {


  const mobileSlides = [
    { src: "./Banner7.png" },
    { src: "./Banner8.png" },
  ];

  const desktopSlides = [
    { src: "./Banner3.png" },
    { src: "./Banner4.png" },
    { src: "./Banner6.png" },
  ];

  const [slides, setSlides] = useState(
    window.innerWidth <= 430 ? mobileSlides : desktopSlides
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSlides(window.innerWidth <= 430 ? mobileSlides : desktopSlides);
      setCurrentSlide(0); // Reset to the first slide when switching views
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(autoSlide);
  }, [slides, currentSlide]);


  
    return(
      <>

      <div className="banner">
        <div className="slideshow-container">
          {slides.map((slide, index) => (
            <div
              className={`mySlides fade ${index === currentSlide ? "active" : ""}`}
              key={index}
              style={{ display: index === currentSlide ? "block" : "none" }}
            >
              <img
                src={slide.src}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          ))}

          {/* Navigation Buttons */}
          <a className="prev" onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}>
            &#10094;
          </a>
          <a className="next" onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>
            &#10095;
          </a>
        </div>

        {/* Dots for Slide Navigation */}
        <div className="dot-container">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
        {/* Mobile Banner .....  */}
        <div className="Mbanner">
        <img src="MB.png" alt="" />
      </div>
      </div>

      
            {/* Recomended Movie Section  */}
      
        <div className="container">
            <h2>Recommended Movies</h2>
            <div className="card">
            <div className="card-item">
                <img src="./card1.png" alt="" />
                <p className="movie-name">Fateh</p>
                    <p className="movie-genre">Action/Thriller</p>
                </div>
                <div className="card-item">
                <img src="./card6.png" alt="" />
                <p className="movie-name">Yeh Jawaani Hai Deewani</p>
                    <p className="movie-genre">Comedy/Drama/Romantic</p>
                </div>
                <div className="card-item">
                <img src="./card3.png" alt="" />
                <p className="movie-name">Pushpa 2</p>
                    <p className="movie-genre">Action/Thriller</p>
                </div>
                <div className="card-item">
                <img src="./card4.png" alt="" />
                <p className="movie-name">Wolf Man</p>
                    <p className="movie-genre">Horror/Mysetry/Thriller</p>
                </div>
                <div className="card-item">
                <img src="./card5.png" alt="" />
                <p className="movie-name">Nosferatu</p>
                    <p className="movie-genre">Horror/Mysetryr</p>
                </div>
        
        </div>

         {/* Middle Section */}

        <div className="Homebanner">
            <img src="./Banner5.png" alt="" />
        </div>

         {/* Middle Section For Mobile screens Only */}

         <div className="Homebanner2">
            <img src="./MidBanner.png" alt="" />
        </div>
       
        <div className="container2">
        <h2>The Best Of Live Events</h2>
        <div className="cards">
            <img src="./Event1.png" alt="" />
            <img src="./Event2.png" alt="" />
            <img src="./Event3.png" alt="" />
            <img src="./Event4.png" alt="" />
            <img src="./Event5.png" alt="" />

            </div>
        </div>



         {/* This is Middle Event section For mobile View Only */}
        <div className="Mcontainer">
          <h1>Best Events This Week</h1>
          <p>Monday to Sunday, we got you covered</p>
          <div className="Mcards">
          <img src="./Event6.png" alt="" />
          <img src="./Event7.png" alt="" />
          <img src="./Event8.png" alt="" />

          </div>
        </div>


        {/* This is Bms Animation Banner for Mobile View */}
        <div className="Bms">
        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-480:w-600/stream-showcase-banner-exp-collection-202406050332.gif" alt="" />
       </div>


       {/* Premier Movies Section */}
<div className="Premier-Movies">

{/* Desktop Section ...............................*/}
<div className="Desktop-Container">
  <div className="Premier">
    <div className="Pcard">
      <img src="./Premier.png" alt="" />
    </div>
    <div className="Pmovies">
      <h2>Premieres</h2>
      <p>Brand new release every Friday</p>

      <div className="card">
        <div className="card-item">
          <img src="./P1.png" alt="" />
          <p className="movie-name">Gladiator 2</p>
          <p className="movie-genre">English , Hindi</p>
        </div>
        <div className="card-item">
          <img src="./P2.png" alt="" />
          <p className="movie-name">The Lord Of The Rings The War Of The Rohirrim</p>
          <p className="movie-genre">English</p>
        </div>
        <div className="card-item">
          <img src="./P3.png" alt="" />
          <p className="movie-name">Venom</p>
          <p className="movie-genre">English , Hindi</p>
        </div>
        <div className="card-item">
          <img src="./P4.png" alt="" />
          <p className="movie-name">Jurassic Park</p>
          <p className="movie-genre">English</p>
        </div>
        <div className="card-item">
          <img src="./P5.png" alt="" />
          <p className="movie-name">Wicked</p>
          <p className="movie-genre">English , Hindi</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Mobile Section .............................................*/}
<div className="Mobile-Container">
  <div className="premiere-container">
    <h2>Watch Top Movies Online</h2>
    <p>
      Buy or Rent movies on <span className="highlight">BMS STREAM</span>
    </p>

    <div className="premiere-card">
      {/* Left - Movie Poster */}
      <div className="poster-wrapper">
        <img src="./P1.png" alt="September 5" className="movie-poster" />
      </div>

      {/* Right - Movie Details */}
      <div className="details">
        <h1>Gladiator II</h1>
        <p className="info">
          2h 35m · Drama, Action, Adventure, Thriller · 18+ · English, Hindi
        </p>
        <p className="description">
          From legendary director Ridley Scott, Gladiator II continues the epic saga of power, intrigue, and vengeance set in Ancient Rome.
        </p>
      </div>
    </div>

    <button className="buy-btn">Buy or Rent</button>
  </div>
</div>
</div>


         {/* For music related evnets */}
          
          <div className="Show">
            <h2>Your Music Studio</h2>
            <div className="card">
            <div className="card-item">
                <img src="./show1.png" alt="" />
                <p className="movie-name">Ed Sheeran +-=÷x 2025 <br /> India Tour in PUNE</p>
                    <p className="movie-genre">Yash Lawns: Pune</p>
                    <p>Concert</p>
                </div>
                <div className="card-item">
                <img src="./show2.png" alt="" />
                <p className="movie-name">Symphony With Sonu Nigam</p>
                    <p className="movie-genre">Kora Kendra Ground 2 and 3: Borivali</p>
                    <p>Concert</p>
                </div>
                <div className="card-item">
                <img src="./show3.png" alt="" />
                <p className="movie-name">PAPON LIVE IN CONCERT <br />- Mumbai </p>
                    <p className="movie-genre">Shanmukhananda Hall: Mumbai</p>
                    <p>Concert</p>
                </div>
                <div className="card-item">
                <img src="./show4.png" alt="" />
                <p className="movie-name">&ME (Keinemusik) <br /> - Mumbai</p>
                    <p className="movie-genre">Members Enclosure: Mahalaxmi Race Course</p>
                    <p>Concert</p>
                </div>
                <div className="card-item">
                <img src="./show5.png" alt="" />
                <p className="movie-name">MARTIN GARRIX - <br /> World's Biggest Holi</p>
                    <p className="movie-genre">D.Y. Patil Stadium: Navi Mumbai</p>
                    <p>Concert</p>
                </div>
                </div>

          </div>

          {/* For Outdoor events  */}

          <div className="Outdoor">
            <h2>Outdoor Events</h2>
            <div className="card">
            <div className="card-item">
                <img src="./Otd1.png" alt="" />
                <p className="movie-name">It's A Holi Thing Ft. DJ <br /> Chetas at MMRDA, BKC</p>
                    <p className="movie-genre">MMRDA Grounds: Mumbai</p>
                </div>
                <div className="card-item">
                <img src="./Otd2.png" alt="" />
                <p className="movie-name">The HPSL Indian Derby <br /> Weekend - Horse Racing </p>
                    <p className="movie-genre">Mahalakshmi Race Course: Mumbai</p>
                </div>
                <div className="card-item">
                <img src="./Otd3.png" alt="" />
                <p className="movie-name">"What is this?" by Kanan <br /> Gill </p>
                    <p className="movie-genre">Bal Gandharva Rang Mandir: Mumbai</p>
                </div>
                <div className="card-item">
                <img src="./Otd4.png" alt="" />
                <p className="movie-name">Fountain of Joy - <br /> Dhirubhai Ambani Square</p>
                    <p className="movie-genre">Dhirubhai Ambani Square: Mumbai</p>
                </div>
                <div className="card-item">
                <img src="./Otd5.png" alt="" />
                <p className="movie-name">The Phantom of the <br /> Opera</p>
                    <p className="movie-genre">Grand Theatre, Nita Mukesh Ambani Cultural Centre</p>
                </div>
                </div>

          </div>

          {/* Laughter therapy Section */}
          
          <div className="Laughter">
            <h2>Laughter therapy</h2>
            <div className="card">
            <div className="card-item">
                <img src="./Otd3.png" alt="" />
                <p className="movie-name">"What is this?" by Kanan Gill</p>
                    <p className="movie-genre">Bal Gandharva Rang Mandir: Mumbai</p>
                </div>
                <div className="card-item">
                <img src="./Lt1.png" alt="" />
                <p className="movie-name">History Of Bollywood </p>
                    <p className="movie-genre">St. Andrews Auditorium: Mumbai</p>
                </div>
                <div className="card-item">
                <img src="./Lt2.png" alt="" />
                <p className="movie-name"> Samay Raina Unfiltered </p>
                    <p className="movie-genre">Shanmukhananda Hall: Mumbai</p>
                </div>
                <div className="card-item">
                <img src="./Lt3.png" alt="" />
                <p className="movie-name">All Star Standup Comedy</p>
                    <p className="movie-genre">The Habitat: Mumbai</p>
                </div>
                <div className="card-item">
                <img src="./Lt4.png" alt="" />
                <p className="movie-name">Gaurav Kapoor LIVE</p>
                    <p className="movie-genre">Sri Shanmukhananda Fine Arts & Sangeetha: Mumbai</p>
                </div>
                </div>

          </div>

          {/* Games & Sports Section */}

          <div className="Sports">
            <h2>Top Games & Sports Events</h2>
            <div className="card">
            <div className="card-item">
                <img src="./Sp1.png" alt="" />
                <p className="movie-name">MUMBAI CITY FC - ISL <br />2024/25</p>
                    <p className="movie-genre">Multiple Venues</p>
                </div>
                <div className="card-item">
                <img src="./Sp2.png" alt="" />
                <p className="movie-name">Mumbai Half Marathon  </p>
                    <p className="movie-genre">Bandra Fort Garden: Mumbai</p>
                </div>
                <div className="card-item">
                <img src="./Sp3.png" alt="" />
                <p className="movie-name"> Enthusia VJTI Marathon</p>
                    <p className="movie-genre">VJTI Main Gate: Mumbai</p>
                </div>
                <div className="card-item">
                <img src="./Sp4.png" alt="" />
                <p className="movie-name">Navi Mumbai Half Marathon</p>
                    <p className="movie-genre">Jewel of Navi Mumbai</p>
                </div>
                <div className="card-item">
                <img src="./Sp5.png" alt="" />
                <p className="movie-name">MINDSPACE EcoRun <br /> Mumbai</p>
                    <p className="movie-genre">Mindspace: Navi Mumbai</p>
                </div>
                </div>

          </div>

          
          <div className="trending">
  <h2>Trending Searches Right Now</h2>
  <div className="trending-container">
    <div className="option">
      <h3>Sanam Teri Kasam</h3>
      <p>Movies</p>
    </div>
    <div className="option">
      <h3>Chhaava</h3>
      <p>Movies</p>
    </div>
    <div className="option">
      <h3>Thats So Viraj - With Friends A Live Comedy Show</h3>
      <p>Events</p>
    </div>
    <div className="option">
      <h3>Interstellar</h3>
      <p>Movies</p>
    </div>
    <div className="option">
      <h3>Umbarro</h3>
      <p>Movies</p>
    </div>
    <div className="option">
      <h3>Sky Force</h3>
      <p>Movies</p>
    </div>
    <div className="option">
      <h3>Deva</h3>
      <p>Movies</p>
    </div>
    <div className="option">
      <h3>Lollapalooza India 2025</h3>
      <p>Events</p>
    </div>
    <div className="option">
      <h3>Vidaamuyarchi</h3>
      <p>Movies</p>
    </div>
    <div className="option">
      <h3>MARTIN GARRIX - World's Biggest Holi</h3>
      <p>Event</p>
    </div>
  </div>
</div>

        </div>
        </>
        
    )
}