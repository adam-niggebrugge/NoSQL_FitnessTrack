const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioExerciseSchema = new Schema ({
   
    //Either activity should always have a time
    duration: {
        type: Number,
        required: "Please provide time spent performing activity."
    },
    //expect cardio and mobility action
    distance: {
        type: Number,
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
    //need to know when exercises occur to find the last occurance
    date: {
        type: Date,
        default: Date.now
    }
});

const CardioExercise = mongoose.model("CardioExercise", CardioExerciseSchema);

module.exports = CardioExercise;
