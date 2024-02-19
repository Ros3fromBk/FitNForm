require('dotenv').config()

// importing Express
const express = require('express')
// Creating an instance of a Router
const excercises = express.Router()
// Importing db query functions
const { getExcercises } = require('../queries/excercises');

//GET all excercises
excercises.get('/', async (req, res) => {
    try {
        const excercises = await getExcercises()
        res.status(200).json(excercises)
    } catch (err) {
        res.status(500).json({ "error": "Internal Server Error" })
    }
});

module.exports = excercises