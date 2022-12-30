const mongoose = require('mongoose');

// Define the salad schema
const saladSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  price: Number 
},
  {
    collection: 'Salad'
  });

// Create the Salad model
module.exports = mongoose.model('Salad', saladSchema);
