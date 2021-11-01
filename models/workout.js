const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema ({
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
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
