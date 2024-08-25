const movie = require('../models/movie.model.js');

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
}


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
}

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
        const movie = new movie({ name, category, availableTimes, duration, price, description });
        await movie.save();
        res.status(201).json(movie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

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
        const updatedMovie = await movie.findByIdAndUpdate(
            movieId,
            req.body,
            { new: true }
        );
        res.json(updatedMovie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

/**
 * @function deleteMovie
 * @description Delete a movie
 * @param {string} req.params.id The ID of the movie to delete
 * @returns {Promise<Movie>} A promise that resolves with the deleted movie
 */
exports.deleteMovie = async (req, res) => {
    try {
        const movieId = req.params.id;
        const deletedMovie = await movie.findByIdAndDelete(
            movieId
        );
        res.json(deletedMovie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

