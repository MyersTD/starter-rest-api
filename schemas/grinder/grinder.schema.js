const mongoose = require('mongoose');

// Define the pizza schema
const grinderSchema = new mongoose.Schema({
    name: String,
    ingredients: [String],
    price: Number
  }, {
      collection: 'Grinders'
  });
  
// Create the Salad model
module.exports = mongoose.model('Grinders', grinderSchema);