import "../css/SignUp.css";
import { useState, useEffect } from "react";
import { account, ID } from "../appWrite";

const SignUp = ({ onClose }) => {

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [userId, setUserId] = useState(null);
  const [step, setStep] = useState(1);
  const [flashMessage, setFlashMessage] = useState(null); // ✅ flash message state


  // Google login handler
 const handleGoogleLogin = async () => {
  try {
    await account.createOAuth2Session(
      "google",
      window.location.origin, // success redirect
      window.location.origin  // failure redirect
    );

    // ✅ Login ke baad Appwrite se user fetch kar
    const user = await account.get();

    // ✅ user info localStorage me save kar
    localStorage.setItem("guestUser", JSON.stringify({
      name: user.name || "Google User",
      email: user.email,
      avatar: user.prefs?.avatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    }));

    // ✅ Toast dikhane ke liye reload ya manually update
    localStorage.removeItem("toastShown"); // taki toast dikh sake
    window.location.reload();

  } catch (err) {
    console.error("Google login error:", err);
  }
};


  // ✅ Auto hide flash after 3s
  useEffect(() => {
    if (flashMessage) {
      const timer = setTimeout(() => setFlashMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [flashMessage]);


  // Step 1: Send OTP
  const handleSendOtp = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: `+91${phone}` }),
      });

      const data = await res.json();
      if (data.success) {
        setStep(2);
        setFlashMessage({ type: "success", text: "OTP sent successfully!" });
      } else {
        setFlashMessage({ type: "error", text: data.message || "Failed to send OTP" });
      }
    } catch (err) {
      console.error(err);
      setFlashMessage({ type: "error", text: "Error sending OTP" });
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: `+91${phone}`, otp }),
      });

      const data = await res.json();
      if (data.success) {
        setFlashMessage({ type: "success", text: "Phone verified & logged in!" });

        // ✅ Save guest user in localStorage
        localStorage.setItem("guestUser", JSON.stringify({
          name: "Guest",
          avatar: "https://cdn-icons-png.flaticon.com/512/149/149071.png", // default avatar
          phone: `+91${phone}`
        }));

        if (typeof onLoginSuccess === "function") {
          onLoginSuccess();
        }

        
        onClose(); // ✅ signup modal close kar do
        setTimeout(() => window.location.reload(), 1500); // reload after showing flash
      } else {
        setFlashMessage({ type: "error", text: "Invalid OTP" });
      }
    } catch (err) {
      console.error(err);
      setFlashMessage({ type: "error", text: "Error verifying OTP" });
    }
  };


  return (
    <div className="signup-overlay">
      <div className="signup-modal">

        {/* ✅ Flash Message */}
        {flashMessage && (
          <div className={`flash-message ${flashMessage.type}`}>
            {flashMessage.text}
          </div>
        )}

        <div className="signup-header">
          <h2>Get Started</h2>
          <button className="signup-close-btn" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="signup-button-group">
          <button className="signup-social-btn" onClick={handleGoogleLogin}>
            <img src="https://static.vecteezy.com/system/resources/previews/046/861/647/non_2x/google-logo-transparent-background-free-png.png" alt="Google" />
            Continue with Google
          </button>

          <button className="signup-social-btn">
            <img src="https://cdn.pixabay.com/photo/2016/01/26/17/15/gmail-1162901_640.png" alt="Email" />
            Continue with Email
          </button>

          <button className="signup-social-btn">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQkvgWmqru66TM6dPE8OGD2KvoEtqg9HtNQ&s" alt="Apple" />
            Continue with Apple
          </button>
        </div>

        <div className="signup-divider">
          <span>OR</span>
        </div>

        {/* Mobile Number + OTP Login */}
        {step === 1 ? (
          <div className="signup-mobile-container">
            <div className="signup-mobile-input">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India"
                className="flag-icon"
              />
              <span className="country-code">+91</span>
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button className="signup-btn" onClick={handleSendOtp}>
              Send OTP
            </button>
          </div>
        ) : (
          <div className="signup-mobile-container">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="otp-input"
            />
            <button className="signup-btn verify" onClick={handleVerifyOtp}>
              Verify OTP
            </button>
          </div>
        )}


        <p className="signup-terms">
          I agree to the <a href="#">Terms & Conditions</a> & <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
