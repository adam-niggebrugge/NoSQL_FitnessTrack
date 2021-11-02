const router = require("express").Router();
const { Workout } = require("../models/Workout.js");


//retrieve a workout
router.get("/workouts", (req, res) => {
    console.log(`api router workkouts, are there request parts? ${req.params}`)
    Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkoutRetrieved => {
      res.status(200).json(dbWorkoutRetrieved);
    })
    .catch(err => {
      console.log(`${err}`)
      res.status(400).json(err);
    });
})

//add a dependency, exercise to a workout. can be many
router.put("/workouts/:id", async (req, res) => {
  try{
      const workout = await Workout.findByIdAndUpdate(
          {_id: req.params.id},
          {$push: {exercise: req.body}
            });
        res.status(200).json(workout);
    } catch (err) {
      res.status(400).json(err);
    }
})

//create a workout
router.post("/workouts/", (req, res) => {
    Workout.create(req.body)
    .then(dbWorkoutCreated => {
      res.json(dbWorkoutCreated);
    })
    .catch(err => {
      console.log(`${err}`)
      res.status(400).json(err);
    });
})

//get workouts over time period
router.get("/workouts/range", async (req, res) => {
    console.log(`/api/workouts/range, are there request parts? ${req.params}`)
    try {
      const workout = await Workout.find({})
        .sort({"date": -1})
        .limit(7);
        res.status(200).json(workout);
    } catch { err => 
      res.status(400).json(err);
    }
})

module.exports = router;