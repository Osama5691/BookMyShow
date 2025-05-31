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

