const router = require("express").Router();
const path = require("path");
const { Workout } = require("../models/Workout.js");


router.get("/exercise", (req, res) => {
    console.log(`view exercise, are there request parts? ${req}`)
    try{
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    } catch (err){
        res.status(500).json(err);
    }
});

router.get("/stats", (req, res) => {
    console.log(`stats, are there request parts? ${req}`)
    try{
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    } catch (err){
        console.log(`${err} stats problem?`)
        res.status(500).json(err);
    }
});

module.exports = router;
