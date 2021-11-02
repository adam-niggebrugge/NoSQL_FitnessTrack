const router = require("express").Router();
const { Workout } = require("../models");


//retrieve a workout
router.get("/workouts", async (req, res) => {
  try {
    const workout  = await Workout.find({})
    res.status(200).json(workout);
  } catch (err) {  
      console.log(`inside of get workouts ++++
      ++${err}`);
      res.status(400).json(err);
  };
});

//add a dependency, exercise to a workout. can be many
router.put("/workouts/:id", async (req, res) => {
  try{
    if(req.body.name !== "" | req.body.duration !== 0){
      const workout = await Workout.findByIdAndUpdate(
        {_id: req.params.id},
        {$push: {exercises: req.body}}
      );
      res.status(200).json(workout);
    } else {
      res.status(200).json({message: "empty submission, nothing saved"});
    }
  } catch (err) {
    console.log(`inside of put workouts %%%%%%%%%%%%%%%${err}`);
    res.status(400).json(err);
  }
})

//create a workout
router.post("/workouts", async (req, res) => {
  try {
    console.log(req.body);
    const workout = await Workout.create(req.body)
    if(workout){
      res.status(200).json(workout);
    } else {
      res.status(400).json({message: "Not Created"})
    }
  } catch (err) { 
      console.log(`Inside of post workouts *************
      ***${err}`);
      res.status(500).json(err);
  };
});

//get workouts over time period
router.get("/workouts/range", async (req, res) => {
    try {
      const workout = await Workout.find({})
        .sort({"date": -1})
        .limit(7);
        res.status(200).json(workout);
    } catch (err) { 
      console.log(`Inside of get  range workouts #################### ${err}`);
      res.status(400).json(err);
    }
});

module.exports = router;