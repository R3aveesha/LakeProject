const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie.controller.js");

//customer routes
router.get("/movies", movieController.getMovies);
router.get("/movies/:id", movieController.getMovieById);

//movie manager routes
router.post("/movies", movieController.createMovie);
router.put("/movies/:id", movieController.updateMovie);
router.delete("/movies/:id", movieController.deleteMovie);
router.post("/movies/:id/available-times", movieController.addAvailableTimes);
router.get("/movies/:id/feedback", movieController.viewFeedbackRatings);
router.post("/movies/:id/feedback", movieController.addFeedbackRating);

module.exports = router;
