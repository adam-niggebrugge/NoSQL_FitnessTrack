const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
     //Expect either cardio or workout. user interface is using select
     activity: {
        type: String,
        required: "Must chose an exercise type."
    },

    //need to know when exercises occur to find the last occurance
    date: {
        type: Date,
        required: "Date must exist",
        default: Date.now
    }
})   
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;