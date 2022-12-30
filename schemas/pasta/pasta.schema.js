const mongoose = require('mongoose');

// Define the pizza schema
const grinderSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
  }, {
      collection: 'Pasta'
  });
  
// Create the Salad model
module.exports = mongoose.model('Pasta', grinderSchema);