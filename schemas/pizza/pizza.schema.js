const mongoose = require('mongoose');

// Define the pizza schema
const pizzaSchema = new mongoose.Schema({
    name: String,
    toppings: [String],
    prices: [Number],
    combo: Number
  }, {
      collection: 'Pizza'
  });
  
// Create the Salad model
module.exports = mongoose.model('Pizza', pizzaSchema);