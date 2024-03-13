require('dotenv').config()

// importing Express
const express = require('express')
// Creating an instance of a Router
const excercises = express.Router()
// Importing db query functions
const { getExcercises , getExcercise, createExcercise, updatedExcercise, deleteExcercise } = require('../queries/excercises');
// Validations 
const { checkTargetedMuscles, checkBoolean } = require('../validations/checkExcercises')

//GET all excercises
excercises.get('/', async (req, res) => {
    try {
        const excercises = await getExcercises()
        res.status(200).json(excercises)
    } catch (err) {
        res.status(500).json({ "error": "Internal Server Error" })
    }
});
// Get Single Excercise by id 
excercises.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const excercise = await getExcercise(id)
        res.status(200).json(excercise)
    } catch (err) {
        res.status(404).json({ error: err })
    }
});
// POST a new excercise 
excercises.post('/', checkTargetedMuscles, async (req, res) => {
    try {
        const createdExcercise = await createExcercise(req.body)
        res.status(201).json(createdExcercise)
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" })
    }
})
// UPDATE Excercise 
excercises.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const updateSingleExcercise = await updatedExcercise(id, req.body)
        res.status(200).json(updateSingleExcercise)
    } catch (err) {
        res.status(404).json({ error: err})
    }
});

// DELETE an Excercise 
excercises.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deletedExcercise = await deleteExcercise(id)
        res.status(200).json({ success: "excercise no longer exist."})
    } catch (err) {
        res.status(404).json({ error: err })
    }
})


module.exports = excercises