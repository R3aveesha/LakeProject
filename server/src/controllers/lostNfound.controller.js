const LostNFound = require("../models/lostNFound.model");

exports.addLostAndFound = async (req, res) => {
  try {
    const lostNFound = {
      userName: req.body.userName,
      email: req.body.email,
      contactNumber: req.body.contactNumber,
      foundItemsCategory: req.body.foundItemsCategory,
      foundItem: req.body.foundItem,
      foundItemPlace: req.body.foundItem,
      isFound: req.body.isFound,
      founder: req.body.founder,
    };

    const newLostNFound = await LostNFound.create(lostNFound);

    return res.status(201).json(newLostNFound);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


