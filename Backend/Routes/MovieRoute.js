const router = require("express").Router();
const Movie = require("../Models/Movies");


//Add Movies
router.post('/add-movie', async (req, res) => {
    try {
      const newMovie = new Movie(req.body);
      await newMovie.save();
      res.status(201).json({message: "Movie Saved Successfully" , movie: newMovie });
    } catch (err) {
      res.status(500).json({ message: "Failed To Save Movie" });
    }
  });

// ✅ Route to fetch movie data
router.get("/get-movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movies" });
  }
});



// Get movie by ID
router.get("/get-movie/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch movie" });
  }
});

module.exports = router;