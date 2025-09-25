// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './AuthContext'
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
import Payment from './Components/Payment/Payment'
import Tickets from './Components/Tickets/Tickets'
import SignUp from './Pages/SignUp'
import { useState } from 'react'

function App() {
  const [showSignup, setShowSignup] = useState(false);


  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar onOpenSignup={() => setShowSignup(true)} />
                <Home />
                <Footer onOpenSignup={() => setShowSignup(true)} />
              </>
            }
          />
          <Route path="/movie-details/:id" element={<><MovieDetails /></>} />
          <Route path="/booking-details" element={<BookingPage />} />
          <Route path="/select-seats" element={<SelectSeatNav />} />
          <Route path="/booking-summary" element={<BookingSummary />} />
          <Route path="/confirm-booking" element={<Snacks />} />
          <Route path='/payment-page' element={<Payment />} />
          <Route path='/ticket-page' element={<Tickets />} />

        </Routes>
        {/* ✅ Global SignUp modal */}
        {showSignup && <SignUp onClose={() => setShowSignup(false)} />}

      </Router>
    </AuthProvider>
    // <div>
    //   {/* <Navbar/> */}
    //   {/* <BookingPage/> */}
    //   {/* <Footer/> */}
    //   {/* <SelectSeatNav/> */}
    //   {/* <BookingSummary/> */}
    //   {/* <Snacks/> */}
    //   {/* <Payment/> */}
    //   {/* <Tickets /> */}
    //   <SignUp/>
    // </div>
  )
}

export default App
