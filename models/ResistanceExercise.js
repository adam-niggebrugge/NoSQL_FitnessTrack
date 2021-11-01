const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceExerciseSchema = new Schema ({
})   
const ResistanceExercise = mongoose.model("ResistanceExercise", ResistanceExerciseSchema);

module.exports = ResistanceExercise;