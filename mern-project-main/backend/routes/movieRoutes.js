const express = require('express');
const router = express.Router();
const movieController = require('../models/Movie');

// GET /movies - Get all movies
router.get('/', movieController.getAllMovies);

// GET /movies/:id - Get a specific movie by ID
router.get('/:id', movieController.getMovieById);

// POST /movies - Create a new movie
router.post('/', movieController.createMovie);

// PUT /movies/:id - Update a movie by ID
router.put('/:id', movieController.updateMovie);

// DELETE /movies/:id - Delete a movie by ID
router.delete('/:id', movieController.deleteMovie);

module.exports = router;
