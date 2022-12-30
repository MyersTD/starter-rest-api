const functions = require("firebase-functions");

const express = require('express'),
cors = require('cors'),
app = express(),
port = 3000;

bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');
const pizzaRoute = require ("./schemas/pizza/pizza.route")
const saladRoute = require ("./schemas/salad/salad.route")
const grinderRoute = require ("./schemas/grinder/grinder.route")
const pastaRoute = require ("./schemas/pasta/pasta.route")
const appetizerRoute = require ("./schemas/appetizers/appetizers.route")

// Connect to the database
mongoose.connect('mongodb://admin:ksVwrmYWOV8NVYna51cSOhMC@MongoS3601A.back4app.com:27017/df7381e30ae94fcf88c77977734ae5af', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.use(cors())

app.use ('/pizza', pizzaRoute)
app.use ('/salad', saladRoute)
app.use ('/grinder', grinderRoute)
app.use ('/pasta', pastaRoute)
app.use ('/appetizers', appetizerRoute)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

exports.app = functions.https.onRequest(app);