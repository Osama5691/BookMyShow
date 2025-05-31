// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Home'
import Navbar from './Components/Navbar/Navbar'
import MovieDetails from './Pages/MovieDetails'
import BookingPage from './Components/BookingPage/BookingPage'
import SelectSeatNav from './Components/BookingPage/SelectSeatNav'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import BookingSummary from './Components/BookingSummary/BookingSummary'
import Snacks from './Components/BookingSummary/Snacks'

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="/movie-details/:id" element={<><MovieDetails /></>} />
        <Route path="/booking-details" element={<BookingPage />} />
        <Route path="/select-seats" element={<SelectSeatNav />} />
        <Route path="/booking-summary" element={<BookingSummary />} />
        <Route path="/confirm-booking" element={<Snacks/>} />
        
      </Routes>
    </Router>
    // <div>
    //   {/* <Navbar/> */}
    //   {/* <BookingPage/> */}
    //   {/* <Footer/> */}
    //   {/* <SelectSeatNav/> */}
    //   <BookingSummary/>
    //   {/* <Snacks/> */}
    // </div>
  )
}

export default App
