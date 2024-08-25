const Maintenance = require('../models/maintenance.model.js');

exports.getMaintenances =async(req,res)=>{
    try{
        const maintenance= await Maintenance.find();
        res.json(maintenance)
    }
    catch{
        res.status(500).json({error:err.message});
    }
}
exports.addResources=async(req,res)=>{
    try{
        const maintenances=await Maintenance.create(req.body);
        res.json(maintenances);
    }
    catch{
        res.status(500).json({error:err.message});
    }
}

exports.deleteResources=async(req,res)=>{
    try{
        const maintenances=await Maintenance.findByIdAndDelete(req.params.id);
        res.json(maintenances); 
    }
    catch{
        res.status(500).json({error:err.message});
    }
}