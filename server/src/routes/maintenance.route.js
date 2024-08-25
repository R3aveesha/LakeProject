const express = require('express')
const router = exprsss.Router();
const maintenanceController = require('../controllers/maintenance.controller.js');

router.get('/maintenances', maintenanceController.getMaintenances); // get all maintenances
router.post('/maintenances',maintenanceController.addResources);//add resources
router.delete('/maintenances/:id',maintenanceController.deleteResources);//delete resources
router.put('/maintenance/:id',updateMaintenance.updategame);//update maintenance