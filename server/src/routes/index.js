const express = require("express");

const gameRoutes = require('./games.route.js');
const authRoutes = require('./auth.route.js');
const resourceRoutes = require('./resource.route.js');
const movieRoutes = require('./movie.route.js');
const maintenanceRoutes = require('./maintenance.route.js');
const eventRoutes = require('./event.route.js');
const customerRoutes = require('./customer.route.js');

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/games", gameRoutes);
router.use("/auth",authRoutes);
router.use("/resource", resourceRoutes);
router.use("/movies", movieRoutes);
router.use("/maintenance", maintenanceRoutes);

module.exports = router;
