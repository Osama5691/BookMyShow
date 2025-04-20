import "./MovieDetails.css"

export default function MovieDetails(){
    return(
      <div className="movie-detail-container">
      <div className="overlay">
        {/* Left Side */}
        <div className="left-panel">
          <div className="poster-card">
            <img
              src="./Nosferatu.jpg"
              alt="Nosferatu Poster"
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
          <h1 className="main-title">Nosferatu</h1>
          <p className="info-line">
            4K • English • Languages: <span className="highlight">Audio(2), Subtitles(1)</span>
          </p>
          <p className="info-line">2h 4m • Horror, Mystery • A • 10 Jan, 2025</p>

          <div className="action-buttons">
            <button className="rent-btn">Rent ₹299</button>
            <button className="buy-btn">Buy ₹999</button>
          </div>
        </div>
      </div>
    </div>

       


    )
}