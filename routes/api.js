const router = require("express").Router();
const { Workout, CardioExercise, ResistanceExercise } = require("../models");

//retrieve a workout
router.get("/workouts", (req, res) => {
    console.log(`api router workkouts, are there request parts? ${req.params}`)
    Workout.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

//add a dependency, exercise to a workout. can be many
router.put("/workouts/:id", (req, res) => {
    console.log(`api put /api/workouts/:id, are there request parts? ${req.params}`)

})

//create a workout
router.post("/workouts/", (req, res) => {
    console.log(`post /api/workouts/, are there request parts? ${req.params}`)
    Workout.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

//get workouts over time period
router.get("/workouts/range", (req, res) => {
    console.log(`/api/workouts/range, are there request parts? ${req.params}`)

})

module.exports = router;