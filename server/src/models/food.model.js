const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  category: { type: String,enum : ["Appetizer", "Main Course", "Beverage", "Dessert", "Pizza"] ,required: true },
  price: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true },
  imageUrl: { type: String },
},{
    timestamps: true,
});

module.exports = mongoose.model('Food', foodSchema);
