const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
     //Expect either cardio or workout. user interface is using select
     activity: {
        type: String,
        required: "Must chose an exercise type."
    },
    //User can define. Either activity should be named
    name: {
        type: String,
        required: "Must identify the exercise performed."
    },
})   
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;