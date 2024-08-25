const movie = require("../models/movie.model.js");
const { addAvailableTimes } = require("./game.controller.js");

/**
 * @function getMovies
 * @description View all movies
 * @returns {Promise<Movie[]>} A promise that resolves with an array of all movies
 */
exports.getMovies = async (req, res) => {
  try {
    const movies = await movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * @function getMovieById
 * @description View a single movie by ID
 * @param {string} id The ID of the movie to find
 * @returns {Promise<Movie>} A promise that resolves with the found movie
 * @throws {Error} Throws an error if the movie is not found
 */
exports.getMovieById = async (req, res) => {
  try {
    const movie = await movie.findById(req.params.id);
    if (!movie) {
      throw new Error("Movie not found");
    }
    res.json(movie);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

/**
 * @function createMovie
 * @description Create a new movie
 * @param {Object} req.body The request body containing the movie details
 * @param {string} req.body.name The name of the movie
 * @param {string} req.body.category The category of the movie
 * @param {Date[]} req.body.availableTimes The available times of the movie
 * @returns {Promise<Movie>} A promise that resolves with the newly created movie
 */
exports.createMovie = async (req, res) => {
  try {
    const { name, category, availableTimes } = req.body;
    const movie = new movie({
      name,
      category,
      availableTimes,
      duration,
      price,
      description,
    });
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * @function updateMovie
 * @description Update a movie
 * @param {Object} req.body The request body containing the updated movie details
 * @param {string} req.params.id The ID of the movie to update
 * @returns {Promise<Movie>} A promise that resolves with the updated movie
 */
exports.updateMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const updatedMovie = await movie.findByIdAndUpdate(movieId, req.body, {
      new: true,
    });
    res.json(updatedMovie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * @function deleteMovie
 * @description Delete a movie
 * @param {string} req.params.id The ID of the movie to delete
 * @returns {Promise<Movie>} A promise that resolves with the deleted movie
 */
exports.deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const deletedMovie = await movie.findByIdAndDelete(movieId);
    res.json(deletedMovie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * @function addAvailableTimes
 * @description Add available times to a movie
 * @param {string} req.params.id The ID of the movie to add available times to
 * @param {Date[]} req.body.availableTimes The new available times for the movie
 * @returns {Promise<Movie>} A promise that resolves with the updated movie
 */
exports.addAvailableTimes = async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await movie.findById(movieId);
    movie.availableTimes.push(...req.body.availableTimes);
    await movie.save();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * @function removeAvailableTimes
 * @description Remove available times from a movie
 * @param {string} req.params.id The ID of the movie to remove available times from
 * @param {Date[]} req.body.availableTimes The available times to remove from the movie
 * @returns {Promise<Movie>} A promise that resolves with the updated movie
 */
exports.removeAvailableTimes = async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await movie.findById(movieId);
    movie.availableTimes = movie.availableTimes.filter(
      (time) => !req.body.availableTimes.includes(time)
    );
    await movie.save();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * @function addRatingsToMovie
 * @description Add ratings to a movie
 * @param {string} req.params.id The ID of the movie to add ratings to
 * @param {string} req.body.ratings[].customerId The ID of the customer who rated the movie
 * @param {number} req.body.ratings[].score The score given by the customer
 * @param {string} req.body.ratings[].feedback The feedback given by the customer
 * @returns {Promise<Movie>} A promise that resolves with the updated movie
 */
exports.addRatingsToMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await movie.findById(movieId);
    movie.ratings.push({ customerId, score, feedback });
    await movie.save();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
