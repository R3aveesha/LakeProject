const express = require("express");

const gameRoutes = require('./games.route.js');
const authRoutes = require('./auth.route.js');
const foodRoutes = require('./food.route.js');
const orderRoutes = require('./order.route.js');
const feedRoutes = require('./feedback.route');

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.use("/games", gameRoutes);
router.use("/auth",authRoutes);
router.use("/food",foodRoutes);
router.use("/order", orderRoutes);
router.use("/feedback", feedRoutes);

module.exports = router;
