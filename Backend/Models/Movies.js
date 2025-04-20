const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    posterUrl: String,
    trailerUrls: [String],
    rating: Number,
    voteCount: Number,
    format: String, // e.g., "2D"
    language: String, // e.g., "Hindi"
    duration: String,
    genre: String,
    certificate: String, // e.g., "UA16+"
    releaseDate: Date,
    inCinemas: Boolean
  });
  
  module.exports = mongoose.model("Movie", movieSchema);