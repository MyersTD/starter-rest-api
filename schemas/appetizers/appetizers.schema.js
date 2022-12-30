const mongoose = require('mongoose');

// Define the pizza schema
const grinderSchema = new mongoose.Schema({
    name: String,
    ingredients: [String],
    price: Number
  }, {
      collection: 'Appetizer'
  });
  
// Create the Salad model
module.exports = mongoose.model('Appetizer', grinderSchema);