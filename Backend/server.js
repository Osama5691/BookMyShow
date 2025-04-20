const express = require("express");
const app = express();
require("dotenv").config();
require("./mongoose-connection");
const Movie = require("./Routes/MovieRoute")


app.use(express.json());

app.use("/api/v1", Movie);





app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})