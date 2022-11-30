const express = require("express");
const router = express.Router();
const {
  getWorkouts,
  setWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const { protect } = require('../middleware/authMiddleware')

router.get("/", protect, getWorkouts);

router.post("/", protect, setWorkout);

router.put("/:id", protect, updateWorkout);

router.delete("/:id", protect, deleteWorkout);

module.exports = router;
