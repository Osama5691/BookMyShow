const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    mobilebg: String,
    bgimage: String,
    image: String,
    alt: String,
    title: String,
    duration: String,
    genre: String,
    rating: String,
    releaseDate: String,
    ratingsz: String,
    votes: String,
    about: String,

    cast: [
      {
        name: String,
        character: String,
        image: String,
      },
    ],

    crew: [
      {
        name: String,
        role: String,
        image: String,
      },
    ],

    suggestions: [
      {
        title: String,
        image: String,
        languages: String
      },
    ],
  });
  
  module.exports = mongoose.model("Movie", movieSchema);