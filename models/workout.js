const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    exercises: [{
        //Expect either cardio or resistance. user interface is using select
        type: {
            type: String,
            required: "Must be either resistance or cardio"
        },
        name: {
            type: String,
            required: "Must identify the exercise performed."
        },
         //expect workout activity and exercise name
         weight: {
            type: Number,
        },
        //expect workout, each weight amount belongs to a set
        sets: {
            type: Number,
        },
        //expect workout, belongs with set 
        reps: {
            type: Number,
        },
        //Either activity should always have a time
        duration: {
            type: Number,
            required: "Please provide time spent performing activity."
        },
         //not required if cardio is dancing, jazzercise, stay in place activity, duration
        distance: {
            type: Number,
        },
    }],
    //need to know when exercises occur to find the last occurance
    day: {
        type: Date,
        default: Date.now
    }
  }
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;