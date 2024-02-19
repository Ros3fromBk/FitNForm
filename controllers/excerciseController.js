require('dotenv').config()

// importing Express
const express = require('express')
// Creating an instance of a Router
const excercises = express.Router()
// Importing db query functions
const { getExcercises , getExcercise } = require('../queries/excercises');

//GET all excercises
excercises.get('/', async (req, res) => {
    try {
        const excercises = await getExcercises()
        res.status(200).json(excercises)
    } catch (err) {
        res.status(500).json({ "error": "Internal Server Error" })
    }
});
excercises.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const excercise = await getExcercise(id)
        res.status(200).json(excercise)
    } catch (err) {
        res.status(404).json({ error: err })
    }
});


module.exports = excercises