const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceExerciseSchema = new Schema ({
    //User can define. activity should be named. multiple resistance exercises to a single workout
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
})   
const ResistanceExercise = mongoose.model("ResistanceExercise", ResistanceExerciseSchema);

module.exports = ResistanceExercise;