const db = require('../db/dbConfig');

const getExcercises = async () => {
    try {
        const excercises = await db.any("SELECT * FROM excercises");
        return excercises;
    } catch (err){
        return err;
    }
};

module.exports = { getExcercises }