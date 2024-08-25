const express = require("express");

const gameRoutes = require('./games.route.js');
const authRoutes = require('./auth.route.js');

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/games", gameRoutes);
router.use("/auth",authRoutes);

module.exports = router;
