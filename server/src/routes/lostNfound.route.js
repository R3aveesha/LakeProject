const express = require('express');
const router = express.Router();
const lostNFoundController = require('../controllers/lostNFoundController.controller');

router.post('/add-lost-and-found', lostNFoundController.addLostAndFound);
router.get('/all-lost-and-found', lostNFoundController.allLostNFound);
router.get('/one-lost-and-found', lostNFoundController.oneLostNFound);
router.put('/update-lost-and-found', lostNFoundController.updateLostAndFound);
router.delete('/delete-lost-and-found', lostNFoundController.deleteLostAndFound);

module.exports = router;