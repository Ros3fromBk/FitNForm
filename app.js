const express = require('express');
const cors = require('cors');
const app = express();
const excerciseController= require('./controllers/excerciseController');

// const axios = require("axios");
// const { getPlaceId, getPlaceDetails } = require("./helpers");



//middleware
app.use(cors());
app.use(express.json());
app.use('/excercises', excerciseController)

// const BASE_URL = " " ;

// const API_KEY = process.env.API_KEY;


app.get('/', (req, res) => {
  res.json({index:"FitNForm Backend Index"});
});

module.exports = app;
