const router = require("express").Router();
const Razorpay =require("razorpay");


router.post('/' ,async (req, res)=>{
    const razorpay = new Razorpay({
        key_id: "rzp_test_RSE0MAxRUsRJOA",
        key_secret: "ecVp6yHtygcw5lDRD0CbqeiI"
    })

    const options ={
        amount: req.body.amount,
        currency: req.body.currency,
        receipt: "receipt#1",
        payment_capture: 1,
    }

    try{
       const response = await razorpay.orders.create(options)
       res.json({
        order_id: response.id,
        currency: response.currency,
        amount: response.amount,
       });
      
    }  catch(error){
        res.status(500).send("Internal Server Error")
       }
});




router.get("/payment/:paymentId", async (req ,res)=>{
    const {paymentId} = req.params;
     
    const razorpay = new Razorpay({
        key_id: " rzp_test_RSE0MAxRUsRJOA",
        key_secret: "ecVp6yHtygcw5lDRD0CbqeiI"
    })

    try{
        const payment = await razorpay.payments.fetch(paymentId);

        if(!payment){
            return res.status(500).json("Error at Razorpay Laoding..")
        }

        res.json({
            status: payment.status,
            method: payment.method,
            amount: payment.amount,
            currency: payment.currency,
        });
    } catch(error){
      res.status(500).json("failed to fetch")
    }

});




module.exports = router;