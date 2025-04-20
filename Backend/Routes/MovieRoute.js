const router = require("express").Router();
const Movie = require("../Models/Movies");


//Add Movies
router.post('/movies', async (req, res) => {
    try {
      const movie = new Movie(req.body);
      await movie.save();
      res.status(201).json(movie);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// GET specific movie by ID
router.get('/movies/:id', async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) return res.status(404).json({ message: "Movie not found" });
      res.json(movie);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


module.exports = router;