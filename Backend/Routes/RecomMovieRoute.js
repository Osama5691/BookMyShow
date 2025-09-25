const express = require("express");
const router = express.Router();
const RecommendedMovie = require("../Models/RecomendedMovies");

// POST - Add multiple movies
router.post('/add', async (req, res) => {
  try {
    const movies = req.body; // expecting array of movie objects
    await RecommendedMovie.insertMany(movies);
    res.status(201).json({ message: 'Movies added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add movies', details: err.message });
  }
});

// GET - Get all recommended movies
router.get('/get-all', async (req, res) => {
  try {
    const movies = await RecommendedMovie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch movies', details: err.message });
  }
});

module.exports = router;