const db = require('../db/dbConfig');

const getExcercises = async () => {
    try {
        const excercises = await db.any("SELECT * FROM excercises");
        return excercises;
    } catch (err){
        return err;
    }
};

const getExcercise = async (id) => {
    try {
        const task = await db.one("SELECT * FROM excercises WHERE excercise_id=$1", id)
        return task
    } catch (err) {
        return err
    }
};

module.exports = { getExcercises , getExcercise }