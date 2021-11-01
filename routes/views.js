const router = require("express").Router();
const { Workout, CardioExercise, ResistanceExercise } = require("../models");


router.get("/exercise", (req, res) => {
    console.log(`view exercise, are there request parts? ${req.body}`)
    try{
        res.render("exercise.html")
    } catch (err){
        res.status(500).json(err);
    }
});

router.get("/stats", (req, res) => {
    console.log(`stats, are there request parts? ${req.body}`)
    try{
        res.render("stats.html")
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;
