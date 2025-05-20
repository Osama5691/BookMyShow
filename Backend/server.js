const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
require("./mongoose-connection");
const Movie = require("./Routes/MovieRoute");
const RecomMovieRoute =require("./Routes/RecomMovieRoute");


app.use(express.json());
app.use(cors());

app.use("/api/", Movie);
app.use('/api/recommended-movies', RecomMovieRoute);





app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})