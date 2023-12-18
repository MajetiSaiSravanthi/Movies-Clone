const Movie = require('../models/Movie');

// Get all movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Add a new movie
const addMovie = async (req, res) => {
  try {
    const { title, imageUrl, genre, description } = req.body;

    // Create a new movie
    const newMovie = new Movie({ title, imageUrl, genre, description });
    await newMovie.save();

    res.status(201).json({ message: 'Movie added successfully', movie: newMovie });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

module.exports = { getAllMovies, addMovie };
