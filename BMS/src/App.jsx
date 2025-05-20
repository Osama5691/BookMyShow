// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Home'
import Navbar from './Components/Navbar/Navbar'
import MovieDetails from './Pages/MovieDetails'
import BookingPage from './Components/BookingPage/BookingPage'
import SelectSeats from './Components/BookingPage/SelectSeats'
import SelectSeatNav from './Components/BookingPage/SelectSeatNav'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="/movie-details/:id" element={<><MovieDetails /></>} />
        <Route path="/booking-details" element={<BookingPage />} />
        <Route path="/select-seats" element={<SelectSeatNav />} />
      </Routes>
    </Router>
    // <div>
    //   {/* <Navbar/> */}
    //   {/* <BookingPage/> */}
    //   {/* <Footer/> */}
    //   {/* <SelectSeatNav/> */}
    // </div>
  )
}

export default App
