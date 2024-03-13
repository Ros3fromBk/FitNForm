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

const createExcercise = async (excercise) => {
    try {
        const partOfRoutine = excercise.added_to_routine || false
        const newExcercise = await db.one("INSERT INTO excercises (name, targeted_muscles, body_parts,added_to_routine) VALUES ($1, $2, $3, $4) RETURNING *", [excercise.name, excercise.targeted_muscles,excercise.body_parts, partOfRoutine]);
console.log(newExcercise)
        return newExcercise
    } catch (err) {
        return err;
    }
};

// UPDATE Excercise 
const updatedExcercise = async (id, body) => {
    const { name, targeted_muscles } = body;
    try {
      const updatedExcercise = await db.one(
        "UPDATE excercises SET name=$1, targeted_muscles=$2 WHERE excercise_id=$3 RETURNING *",
        [name, targeted_muscles, id]
      );
      console.log(updatedExcercise)
      return updatedExcercise;
    } catch (error) {
      return error;
    }
  };

// DELETE a single Excercise  
  const deleteExcercise = async (id) => {
    try {
        const deletedExcercise = await db.one("DELETE FROM excercises WHERE excercise_id=$1 RETURNING *", id)
        return deletedExcercise
    } catch (err) {
        return err
    }
}
module.exports = { getExcercises , getExcercise , createExcercise, updatedExcercise,deleteExcercise}