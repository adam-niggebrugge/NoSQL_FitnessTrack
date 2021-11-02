const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioExerciseSchema = new Schema ({
   //User can define. Either activity should be named
    name: {
        type: String,
        required: "Must identify the exercise performed."
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
    workout: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workout"
    },
});

const CardioExercise = mongoose.model("CardioExercise", CardioExerciseSchema);

module.exports = CardioExercise;
