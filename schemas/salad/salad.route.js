const express = require('express');
const app = express.Router();
const {create_, read_all_, delete_, update_} = require ('../crud')

let Model = require('./salad.schema')

app.route('/create').post((req, res) => {
    create_ (Model, req, res);
  });
  
app.route('/all').get((req, res) => {
    read_all_(Model, req, res);
});

app.route('/:id').put ((req, res) => {
    update_(Model, req, res);
});

app.route('/:id').delete((req, res) => {
    delete_(Model, req, res);
});

  
  module.exports = app;