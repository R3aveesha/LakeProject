const Order = require('../models/order.model');
const Food = require("../models/food.model");

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate({ path: 'meals.food' });

        if(orders.length === 0){
            return res.status(200).json({message: "Not Found"});
        }

        return res.status(201).json(orders);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
};

exports.addOrder = async (req, res) => {
    try {

        const newOrder = {
            userId: req.body.userId,
            meals: req.body.meals,
            totalPrice: req.body.totalPrice,
            isCompleted: req.body.isCompleted,
        }

        const order = await Order.create(newOrder);

        return res.status(201).json(order);


    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const orderId = req.params.id; // Get the order ID from the URL parameter

        // Extract the fields to be updated from the request body
        const updates = {
            meals: req.body.meals, // Array of meals with food and quantity
            totalPrice: req.body.totalPrice,
            isCompleted: req.body.isCompleted
        };

        // Remove undefined fields to avoid accidental overwriting of existing fields with undefined
        Object.keys(updates).forEach((key) => {
            if (updates[key] === undefined) {
                delete updates[key];
            }
        });

        // Find the order by ID and update it
        const updatedOrder = await Order.findByIdAndUpdate(orderId, updates, {
            new: true, // Return the updated document
            runValidators: true // Run validation against the model's schema
        });

        // Check if the order was found and updated
        if (!updatedOrder) {
            return res.status(404).send({ message: 'Order not found' });
        }

        // Respond with the updated order
        return res.status(200).json(updatedOrder);
    } catch (error) {
        // Handle any errors
        return res.status(500).json({ error: error.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id;

        const result = await Food.findByIdAndDelete(orderId);

        if (!result) {
            return res.status(400).send({ message: "Product cannot be found" });
        }

        return res.status(200).send({ message: "Order deleted successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.viewOneOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await Food.findById(orderId);
        return res.status(200).json(order);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};