const express = require("express");

const gameRoutes = require('./games.route.js');
const authRoutes = require('./auth.route.js');
<<<<<<< HEAD
const resourceRoutes = require('./resource.route.js');
=======
const movieRoutes = require('./movie.route.js');
>>>>>>> e1af67526b559f024da447f7e9e98a092602fe2c

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/games", gameRoutes);
router.use("/auth",authRoutes);
<<<<<<< HEAD
router.use("/resource", resourceRoutes);
=======
router.use("/movies", movieRoutes);
>>>>>>> e1af67526b559f024da447f7e9e98a092602fe2c

module.exports = router;
