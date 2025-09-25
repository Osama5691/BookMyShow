const express = require("express");
const router = express.Router();
const client = require("../Utils/Twilio");

// ✅ Send OTP
router.post("/send-otp", async (req, res) => {
  try {
    const { phone } = req.body;

    const verification = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SID)
      .verifications.create({ to: phone, channel: "sms" });

    res.json({ success: true, status: verification.status });
  } catch (err) {
    console.error("Error sending OTP:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Verify OTP
router.post("/verify-otp", async (req, res) => {
  try {
    const { phone, otp } = req.body;

    const verificationCheck = await client.verify.v2
      .services(process.env.TWILIO_VERIFY_SID)
      .verificationChecks.create({ to: phone, code: otp });

    if (verificationCheck.status === "approved") {
      res.json({ success: true, message: "OTP verified successfully!" });
    } else {
      res.status(400).json({ success: false, message: "Invalid OTP" });
    }
  } catch (err) {
    console.error("Error verifying OTP:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
