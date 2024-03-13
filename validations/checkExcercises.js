const checkTargetedMuscles = (req, res, next) => {
    if(req.body.targeted_muscles){
        // next() comes from the parameters
        // next() tells the route that this piece of middleware is satisfied and can move onto the next argument in the route.
        next()
    } else {
        res.status(400).json({ error: 'Targeted Muscle(s) is required'})
    }
}

const checkBoolean = (req, res, next) => {
    const fav = req.body.added_to_routine
    if(typeof fav === 'boolean'){
        next()
    } else {
        res.status(400).json({ error: "added_to_routine must be type boolean" })
    }
}

module.exports = { checkTargetedMuscles, checkBoolean }