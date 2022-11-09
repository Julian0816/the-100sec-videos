const asyncHandler = require("express-async-handler");

const Workout = require("../models/workoutModel");
const User = require("../models/userModel");

// @desc    Get workouts
// @route   GET /api/workouts
// @access  Private
const getWorkouts = asyncHandler(async (req, res) => {
  const workouts = await Workout.find({ user: req.user.id });

  res.status(200).json(workouts);
});

// @desc    Set Workout
// @route   POST /api/workouts
// @access  Private
const setWorkout = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a valid workout");
  }
  console.log(req.body)
  const workout = await Workout.create({
    mood: req.body.mood,
    activity: req.body.activity,
    sets: req.body.sets,
    reps: req.body.reps,
    weight: req.body.weight,
    user: req.user.id,
  });
  
  console.log(workout)
  res.status(200).json(workout);
  console.log(workout)
});

// @desc    Update Workout
// @route   PUT /api/workouts/:id
// @access  Private
const updateWorkout = asyncHandler(async (req, res) => {
  const workout = await Workout.findById(req.params.id);

  if (!workout) {
    res.status(400);
    throw new Error("Wokout not found");
  }

  const user = await User.findById(req.user.id)

  //Check for user
  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }

  //Make sure the logged in user matches the workout user
  if(workout.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorised')
  }

  const updatedWorkout = await Workout.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedWorkout);
});

// @desc    Delete workout
// @route   DELETE /api/workouts/:id
// @access  Private
const deleteWorkout = asyncHandler(async (req, res) => {
  const workout = await Workout.findById(req.params.id);

  if (!workout) {
    res.status(400);
    throw new Error("Workout not found");
  }

    const user = await User.findById(req.user.id);

    //Check for user
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    //Make sure the logged in user matches the workout user
    if (workout.user.toString() !== user.id) {
      res.status(401);
      throw new Error("User not authorised");
    }

  await Workout.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getWorkouts,
  setWorkout,
  updateWorkout,
  deleteWorkout,
};
