const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    mood: {
      type: String,
      required: [true, "Please add your mood"],
    },
    activity: {
      type: String,
      required: [true, "Please add an activity"],
    },
    sets: {
      type: Number,
      required: [true, "Please add sets"],
    },
    reps: {
      type: Number,
      required: [true, "Please add reps"],
    },
    weight: {
      type: Number,
      required: [true, "Please add weight"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Workout', workoutSchema);
