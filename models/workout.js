const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    activity: {
        type: String,
        required: "Must chose an exercise type."
    },
    name: {
        type: String,
        required: "Must identify the exercise performed."
    },
    duration: {
        type: Number,
        required: "Please provide time spent performing activity."
    },
    distance: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    reps: {
        type: Number,
    }
})